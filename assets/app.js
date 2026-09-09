/* ============================================================
   RATTLE EMPIRE — APPLICATION ENGINE v3.4
   drawer • help helpline • rich artwork • discounts • most-sold
   ============================================================ */
"use strict";

/* ---------- 0. CONTACT CONSTANTS ---------- */
const HELPLINE = [
  { display: "0775 374 095", wa: "256775374095" },
  { display: "+256 782 832407", wa: "256782832407" }
];
const WA_HELP = encodeURIComponent("Hello Rattle Empire! I need help with an order.");
const SMS_BOTH = "sms:+256775374095,+256782832407?&body=" +
  encodeURIComponent("Hello Rattle Empire! I need help with an order.");

/* ---------- 1. THEME ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
(function initTheme() {
  const saved = localStorage.getItem("rattle_theme");
  const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(saved === "light" || saved === "dark" ? saved : system);
})();

/* ---------- 2. STATE ---------- */
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
function xmlEsc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------- 3. PARTIALS + LAYOUT ---------- */
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

  /* Drawer */
  const open = () => document.body.classList.add("drawer-open");
  const close = () => document.body.classList.remove("drawer-open");
  if ($("menuBtn")) $("menuBtn").addEventListener("click", open);
  if ($("drawerClose")) $("drawerClose").addEventListener("click", close);
  if ($("drawerBackdrop")) $("drawerBackdrop").addEventListener("click", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  document.querySelectorAll(".drawer a").forEach(a => a.addEventListener("click", close));

  /* Help FAB */
  if ($("helpFab")) $("helpFab").addEventListener("click", openHelp);

  updateCart();
}

/* ---------- 4. RICH ARTWORK (name + icon baked in, no external hosts) ---------- */
function artworkFor(p) {
  const palettes = {
    ai: ["#2e6b57", "#173c30"],
    streaming: ["#7e2f38", "#471a20"],
    software: ["#2e4a86", "#182a4e"],
    gaming: ["#3c4250", "#1e222b"]
  };
  const labels = { ai: "AI & PRODUCTIVITY", streaming: "STREAMING", software: "SOFTWARE", gaming: "GAMING" };
  const c = palettes[p.category] || ["#4a5160", "#2c313c"];
  const name = xmlEsc(p.name.length > 24 ? p.name.slice(0, 22) + "…" : p.name);
  const icon = xmlEsc(p.icon || "★");
  const label = xmlEsc(labels[p.category] || "DIGITAL GOODS");

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="' + c[0] + '"/><stop offset="1" stop-color="' + c[1] + '"/>' +
    '</linearGradient></defs>' +
    '<rect width="400" height="300" fill="url(#g)"/>' +
    '<circle cx="330" cy="60" r="95" fill="rgba(255,255,255,0.07)"/>' +
    '<circle cx="55" cy="265" r="120" fill="rgba(255,255,255,0.05)"/>' +
    '<text x="200" y="160" font-family="Arial, sans-serif" font-size="88" text-anchor="middle" fill="rgba(255,255,255,0.95)">' + icon + '</text>' +
    '<text x="24" y="256" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff">' + name + '</text>' +
    '<text x="24" y="280" font-family="Arial, sans-serif" font-size="12" letter-spacing="3" fill="rgba(255,255,255,0.6)">' + label + ' • RATTLE EMPIRE</text>' +
    '</svg>';
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

/* ---------- 5. PRODUCTS ---------- */
function renderSkeleton() {
  if (!grid) return;
  grid.innerHTML = Array.from({ length: 8 }, () => `
    <div class="skeleton">
      <div class="sk-art"></div>
      <div class="sk-line"></div>
      <div class="sk-line short"></div>
    </div>`).join("");
}

async function loadProducts() {
  if (!grid) return;
  renderSkeleton();
  try {
    const res = await fetch("/data/products.json?v=" + Date.now());
    if (!res.ok) throw new Error(res.status);
    products = await res.json();
  } catch (err) {
    console.warn("Could not load products.json");
    products = [];
  }
  render();
  renderMostSold();
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
    if (sort === "sold") visible.sort((a, b) => (b.sold || 0) - (a.sold || 0));
  }

  grid.innerHTML = visible.map(p => {
    const pct = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    const waHref = "https://wa.me/" + HELPLINE[0].wa + "?text=" +
      encodeURIComponent("Hello! I want to buy: " + p.name);
    return `
    <article class="product-card">
      <div class="product-art" style="background-image:url('${artworkFor(p)}')">
        <div class="product-logo">${esc(p.icon)}</div>
        <span class="pill">${esc(p.badge)}</span>
        ${pct ? `<span class="discount-badge">-${pct}%</span>` : ""}
      </div>
      <div class="product-body">
        <strong>${esc(p.name)}</strong>
        <small>${esc(p.meta)}${p.sold ? " • " + p.sold + " sold" : ""}</small>
        <div class="rating">★ ${esc(p.rating)}</div>
        <div class="price-row">
          <span class="price">${p.oldPrice ? `<s class="old-price">$${Number(p.oldPrice).toFixed(2)}</s>` : ""}$${Number(p.price).toFixed(2)}</span>
          <span class="price-actions">
            <a class="wa-btn" href="${waHref}" target="_blank" rel="noopener" aria-label="Order ${esc(p.name)} via WhatsApp">💬</a>
            <button class="add-btn" data-add="${p.id}">Add to cart</button>
          </span>
        </div>
      </div>
    </article>`;
  }).join("");

  if (emptyState) emptyState.hidden = visible.length > 0;

  grid.querySelectorAll("[data-add]").forEach(btn =>
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.add)))
  );
}

/* ---------- 6. MOST SOLD ---------- */
function renderMostSold() {
  const top = products.slice().sort((a, b) => (b.sold || 0) - (a.sold || 0)).slice(0, 4);

  const row = $("mostSoldRow");
  if (row) {
    row.innerHTML = top.map(p => `
      <a class="ms-card" href="#marketplace" style="text-decoration:none;color:inherit">
        <div class="ms-art" style="background-image:url('${artworkFor(p)}')"></div>
        <div><b>${esc(p.name)}</b><span>$${Number(p.price).toFixed(2)}</span></div>
        <span class="ms-sold">${p.sold || 0} sold</span>
      </a>`).join("");
  }

  const list = $("mostSoldList");
  if (list) {
    list.innerHTML = top.map(p => `
      <div class="request-row">
        <span>${esc(p.name)}</span>
        <span class="replies">${p.sold || 0} sold</span>
      </div>`).join("");
  }
}

/* ---------- 7. CART ---------- */
function addToCart(id) {
  cart.push(id);
  localStorage.setItem("rattle_cart", JSON.stringify(cart));
  updateCart();
  openModal("Added to cart", "This demo stores your cart in your browser. A secure backend checkout will be connected in the production phase.");
}
function updateCart() {
  const el = $("cartCount");
  if (el) el.textContent = cart.length;
  const d = $("drawerCartCount");
  if (d) d.textContent = cart.length + " items";
}

/* ---------- 8. GENERIC MODAL ---------- */
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

/* ---------- 9. HELP / HELPLINE PANEL ---------- */
function openHelp() {
  if (!$("helpBackdrop")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="modal-backdrop" id="helpBackdrop" hidden>
        <div class="modal" role="dialog" aria-modal="true" aria-label="Customer helpline">
          <h3>Customer helpline</h3>
          <p>Chat with our team on WhatsApp — we reply fast. For one message to both lines at once, use "Text both".</p>
          <div class="help-actions">
            <a class="primary-btn" target="_blank" rel="noopener" href="https://wa.me/${HELPLINE[0].wa}?text=${WA_HELP}">💬 WhatsApp ${HELPLINE[0].display}</a>
            <a class="primary-btn" target="_blank" rel="noopener" href="https://wa.me/${HELPLINE[1].wa}?text=${WA_HELP}">💬 WhatsApp ${HELPLINE[1].display}</a>
            <a class="ghost-btn" href="${SMS_BOTH}">📨 Text both numbers at once</a>
            <a class="ghost-btn" href="tel:+256775374095">📞 Call ${HELPLINE[0].display}</a>
            <a class="ghost-btn" href="tel:+256782832407">📞 Call ${HELPLINE[1].display}</a>
          </div>
          <div class="modal-actions" style="margin-top:16px">
            <button class="ghost-btn" id="helpClose">Close</button>
          </div>
        </div>
      </div>`);
    $("helpClose").addEventListener("click", () => { $("helpBackdrop").hidden = true; });
    $("helpBackdrop").addEventListener("click", e => { if (e.target.id === "helpBackdrop") $("helpBackdrop").hidden = true; });
  }
  $("helpBackdrop").hidden = false;
}

/* ---------- 10. EVENTS ---------- */
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

/* ---------- 11. START ---------- */
initLayout();
loadProducts();
