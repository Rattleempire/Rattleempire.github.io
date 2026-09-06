// ============================================================
// RATTLE EMPIRE - MAIN APPLICATION ENGINE
// ============================================================

// ---------- GLOBAL STATE ----------
let products = [];
let filter = "all";
let cart = JSON.parse(localStorage.getItem("rattle_cart") || "[]");

// ---------- DOM REFERENCES ----------
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const cartCount = document.getElementById("cartCount");

// ---------- LOAD PRODUCTS FROM JSON FILE ----------
async function loadProducts() {
  try {
    const response = await fetch('/data/products.json?v=' + Date.now());
    if (!response.ok) throw new Error('Products file not found');
    products = await response.json();
    render();
  } catch (error) {
    console.warn('Could not load products from JSON. Using sample data.');
    products = [
      {id:1,name:"AI Pro Membership",meta:"1 month • authorized",category:"ai",price:19.99,rating:4.9,badge:"Best seller",icon:"AI",image:"https://picsum.photos/400/300?random=1"},
      {id:2,name:"AI Productivity Bundle",meta:"1 month • authorized",category:"ai",price:12.99,rating:4.8,badge:"Popular",icon:"✦",image:"https://picsum.photos/400/300?random=2"},
      {id:3,name:"Streaming Membership",meta:"1 month • authorized",category:"streaming",price:11.99,rating:4.8,badge:"Trending",icon:"▶",image:"https://picsum.photos/400/300?random=3"},
      {id:4,name:"Music Premium",meta:"1 month • authorized",category:"streaming",price:7.99,rating:4.7,badge:"Popular",icon:"♫",image:"https://picsum.photos/400/300?random=4"},
      {id:5,name:"Cloud Pro License",meta:"30 days • license",category:"software",price:9.99,rating:4.9,badge:"Verified",icon:"☁",image:"https://picsum.photos/400/300?random=5"},
      {id:6,name:"Design Toolkit",meta:"Digital license",category:"software",price:14.99,rating:4.6,badge:"New",icon:"◇",image:"https://picsum.photos/400/300?random=6"},
      {id:7,name:"Game Wallet Code",meta:"Digital code",category:"gaming",price:24.99,rating:4.8,badge:"Top rated",icon:"⌁",image:"https://picsum.photos/400/300?random=7"},
      {id:8,name:"Gift Card",meta:"Digital delivery",category:"gift",price:25.00,rating:4.9,badge:"Instant",icon:"$",image:"https://picsum.photos/400/300?random=8"}
    ];
    render();
  }
}

// ---------- RENDER PRODUCTS ----------
function render() {
  if (!products.length) {
    grid.innerHTML = '<p style="text-align:center;color:#8d97a8;padding:40px 0">Loading products...</p>';
    return;
  }

  let visible = products.filter(p => {
    const matchFilter = filter === "all" || p.category === filter;
    const q = searchInput.value.trim().toLowerCase();
    const matchSearch = !q || `${p.name} ${p.meta} ${p.category}`.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  const sort = sortSelect.value;
  if (sort === "price-asc") visible.sort((a,b)=>a.price-b.price);
  if (sort === "price-desc") visible.sort((a,b)=>b.price-a.price);
  if (sort === "rating") visible.sort((a,b)=>b.rating-a.rating);

  grid.innerHTML = visible.map(p => `
    <article class="product-card">
      <div class="product-art" style="background-image:url('${p.image || 'https://picsum.photos/400/300?random=' + p.id}');background-size:cover;background-position:center;position:relative">
        <div class="product-logo ${p.category}" style="position:relative;z-index:2">${p.icon}</div>
        <span class="pill" style="position:relative;z-index:2">${p.badge}</span>
        <div style="position:absolute;inset:0;background:rgba(7,9,14,0.5)"></div>
      </div>
      <div class="product-body">
        <strong>${p.name}</strong>
        <small>${p.meta}</small>
        <div class="rating">★ ${p.rating}</div>
        <div class="price-row">
          <span class="price">$${p.price.toFixed(2)}</span>
          <button class="add-btn" data-add="${p.id}">Add to cart</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visible.length > 0;
  grid.querySelectorAll("[data-add]").forEach(btn => 
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.add)))
  );
}

// ---------- CART FUNCTIONS ----------
function addToCart(id) {
  cart.push(id);
  localStorage.setItem("rattle_cart", JSON.stringify(cart));
  updateCart();
  openModal("Added to cart", "This demo stores your cart in your browser. A secure backend checkout will be connected in the production phase.");
}

function updateCart() {
  cartCount.textContent = cart.length;
}

// ---------- MODAL ----------
function openModal(title, text) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = text;
  document.getElementById("modalBackdrop").hidden = false;
}

function closeModal() {
  document.getElementById("modalBackdrop").hidden = true;
}

// ---------- EVENT LISTENERS ----------

// Category filter buttons
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

// Category cards
document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    const filterValue = card.dataset.filterLink;
    if (filterValue) {
      document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.filter === filterValue) btn.classList.add("active");
      });
      filter = filterValue;
      render();
      document.getElementById("marketplace").scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Search & Sort
searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

// Modal controls
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal();
});
document.getElementById("modalAction").addEventListener("click", closeModal);

// ---------- HEADER BUTTONS ----------
document.getElementById("loginBtn")?.addEventListener("click", () => 
  openModal("Sign in", "Authentication will connect to the production backend in the next phase.")
);

document.getElementById("cartBtn")?.addEventListener("click", () => 
  openModal("Your cart", cart.length ? `${cart.length} item(s) are saved in this browser.` : "Your cart is empty.")
);

document.getElementById("themeBtn")?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("rattle_theme", document.body.classList.contains("light") ? "light" : "dark");
});

// ---------- LOAD THEME PREFERENCE ----------
if (localStorage.getItem("rattle_theme") === "light") {
  document.body.classList.add("light");
}

// ---------- START THE APP ----------
updateCart();
loadProducts();

/* ===== THEME SYSTEM — No Neon, Muted & Professional ===== */

:root {
  /* --- Light Theme (default) --- */
  --bg: #f8f9fb;
  --bg-card: #ffffff;
  --bg-elevated: #ffffff;
  --text-primary: #1a1d23;
  --text-secondary: #5a6170;
  --text-muted: #8b92a0;
  --border: #e2e5ea;
  --border-hover: #c8ccd4;
  --accent: #3d5af1;
  --accent-hover: #2d46c9;
  --accent-soft: rgba(61, 90, 241, 0.08);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.06);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.08);
  --radius: 12px;
  --radius-sm: 8px;
  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

[data-theme="dark"] {
  --bg: #0f1117;
  --bg-card: #1a1d27;
  --bg-elevated: #22262f;
  --text-primary: #e8eaf0;
  --text-secondary: #a0a7b5;
  --text-muted: #6b7280;
  --border: #2a2e3a;
  --border-hover: #3d4250;
  --accent: #6b8afd;
  --accent-hover: #8ba3ff;
  --accent-soft: rgba(107, 138, 253, 0.1);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.2);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.3);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.4);
}

/* Smooth theme transition */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Base resets using variables */
body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text-primary);
  margin: 0;
  line-height: 1.6;
}

.product-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.product-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-md);
}

// ===== THEME ENGINE =====
(function() {
  const saved = localStorage.getItem('rattle_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rattle_theme', next);
  });
});
