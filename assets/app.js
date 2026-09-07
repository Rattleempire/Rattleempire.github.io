"use strict";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
(function initTheme() {
  const saved = localStorage.getItem("rattle_theme");
  const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(saved === "light" || saved === "dark" ? saved : system);
})();

let products = [];
let filter = "all";
let cart = JSON.parse(localStorage.getItem("rattle_cart") || "[]");

const $ = (id) => document.getElementById(id);
const grid = $("productGrid");
const searchInput = $("searchInput");
const sortSelect = $("sortSelect");
const emptyState = $("emptyState");

function esc(value) {
  const div = document.createElement("div");
  div.textContent = value == null ? "" : String(value);
  return div.innerHTML;
}

async function loadPartial(placeholderId, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const host = $(placeholderId);
    if (host) host.innerHTML = await res.text();
  } catch (err) {
    console.warn("Partial not loaded:", url);
  }
}

async function initLayout() {
  await Promise.all([
    loadPartial("menu-placeholder", "/partials/menu.html"),
    loadPartial("footer-placeholder", "/partials/footer.html")
  ]);

  const toggle = $("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("rattle_theme", next);
    });
  }
  updateCart();
}

  const palettes = {
    ai: ["#2e6b57", "#1c4536"],
    streaming: ["#7e2f38", "#521f26"],
    software: ["#2e4a86", "#1e3159"],
    gaming: ["#3c4250", "#242933"]
  };
  const c = palettes[p.category] || ["#4a5160", "#2c313c"];
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="' + c[0] + '"/><stop offset="1" stop-color="' + c[1] + '"/>' +
    '</linearGradient></defs>' +
    '<rect width="400" height="300" fill="url(#g)"/>' +
    '<circle cx="310" cy="90" r="80" fill="rgba(255,255,255,0.08)"/>' +
    '<circle cx="90" cy="250" r="110" fill="rgba(255,255,255,0.05)"/>' +
    '</svg>';
  return "data:image/svg+xml;base64," + btoa(svg);
}

async function loadProducts() {
  if (!grid) return;
  try {
    const res = await fetch("/data/products.json?v=" + Date.now());
    if (!res.ok) throw new Error(res.status);
    products = await res.json();
  } catch (err) {
    console.warn("Could not load products.json");
    products = [];
  }
  render();
}

function render() {
  if (!grid) return;

  if (!products.length) {
    grid.innerHTML = "";
    if (emptyState) { emptyState.hidden = false; emptyState.textContent = "Products are being prepared. Check back soon."; }
    return;
  }

  let visible = products.filter(p => {
    const matchFilter = filter === "all" || p.category === filter;
    const q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const matchSearch = !q || (p.name + " " + p.meta + " " + p.category).toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if (sortSelect) {
    const sort = sortSelect.value;
    if (sort === "price-asc") visible.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") visible.sort((a, b) => b.price - a.price);
    if (sort === "rating") visible.sort((a, b) => b.rating - a.rating);
  }

  grid.innerHTML = visible.map(p => `
    <article class="product-card">
      <div class="product-art" style="background-image:url('${p.image || artworkFor(p)}')">
        <div class="product-logo">${esc(p.icon)}</div>
        <span class="pill">${esc(p.badge)}</span>
      </div>
      <div class="product-body">
        <strong>${esc(p.name)}</strong>
        <small>${esc(p.meta)}</small>
        <div class="rating">★ ${esc(p.rating)}</div>
        <div class="price-row">
          <span class="price">$${Number(p.price).toFixed(2)}</span>
          <button class="add-btn" data-add="${p.id}">Add to cart</button>
        </div>
      </div>
    </article>
  `).join("");

  if (emptyState) emptyState.hidden = visible.length > 0;

  grid.querySelectorAll("[data-add]").forEach(btn =>
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.add)))
  );
}

function addToCart(id) {
  cart.push(id);
  localStorage.setItem("rattle_cart", JSON.stringify(cart));
  updateCart();
  openModal("Added to cart", "This demo stores your cart in your browser. A secure backend checkout will be connected in the production phase.");
}
function updateCart() {
  const el = $("cartCount");
  if (el) el.textContent = cart.length;
}

function buildModal() {
  if ($("modalBackdrop")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="modalBackdrop" hidden>
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <h3 id="modalTitle"></h3>
        <p id="modalText"></p>
        <div class="modal-actions">
          <button class="ghost-btn" id="closeModal">Close</button>
          <button class="primary-btn" id="modalAction">OK</button>
        </div>
      </div>
    </div>`);
  $("closeModal").addEventListener("click", closeModal);
  $("modalAction").addEventListener("click", closeModal);
  $("modalBackdrop").addEventListener("click", e => { if (e.target.id === "modalBackdrop") closeModal(); });
}
function openModal(title, text) {
  buildModal();
  $("modalTitle").textContent = title;
  $("modalText").textContent = text;
  $("modalBackdrop").hidden = false;
}
function closeModal() {
  const m = $("modalBackdrop");
  if (m) m.hidden = true;
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    const value = card.dataset.filterLink;
    if (!value) return;
    document.querySelectorAll(".filter").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === value);
    });
    filter = value;
    render();
    const target = $("marketplace");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

if (searchInput) searchInput.addEventListener("input", render);
if (sortSelect) sortSelect.addEventListener("change", render);

initLayout();
loadProducts();
