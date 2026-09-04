let products = [];
let filter = "all";
let cart = JSON.parse(localStorage.getItem("rattle_cart") || "[]");

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const cartCount = document.getElementById("cartCount");

async function loadProducts() {
  try {
    const response = await fetch('/data/products.json');
    if (!response.ok) throw new Error('Products file not found');
    products = await response.json();
    render(); 
  } catch (error) {
    console.warn('Could not load products from JSON. Using sample data.');
  
    products = [
      {id:1,name:"AI Pro Membership",meta:"1 month • authorized",category:"ai",price:19.99,rating:4.9,badge:"Best seller",icon:"AI"},
      {id:2,name:"AI Productivity Bundle",meta:"1 month • authorized",category:"ai",price:12.99,rating:4.8,badge:"Popular",icon:"✦"},
      {id:3,name:"Streaming Membership",meta:"1 month • authorized",category:"streaming",price:11.99,rating:4.8,badge:"Trending",icon:"▶"},
      {id:4,name:"Music Premium",meta:"1 month • authorized",category:"streaming",price:7.99,rating:4.7,badge:"Popular",icon:"♫"},
      {id:5,name:"Cloud Pro License",meta:"30 days • license",category:"software",price:9.99,rating:4.9,badge:"Verified",icon:"☁"},
      {id:6,name:"Design Toolkit",meta:"Digital license",category:"software",price:14.99,rating:4.6,badge:"New",icon:"◇"},
      {id:7,name:"Game Wallet Code",meta:"Digital code",category:"gaming",price:24.99,rating:4.8,badge:"Top rated",icon:"⌁"},
      {id:8,name:"Gift Card",meta:"Digital delivery",category:"gift",price:25.00,rating:4.9,badge:"Instant",icon:"$"}
    ];
    render();
  }
}

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
      <div class="product-art">
        <div class="product-logo ${p.category}">${p.icon}</div>
        <span class="pill">${p.badge}</span>
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

function addToCart(id) {
  cart.push(id);
  localStorage.setItem("rattle_cart", JSON.stringify(cart));
  updateCart();
  openModal("Added to cart", "This demo stores your cart in your browser. A secure backend checkout will be connected in the production phase.");
}

function updateCart() {
  cartCount.textContent = cart.length;
}

function openModal(title, text) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = text;
  document.getElementById("modalBackdrop").hidden = false;
}

function closeModal() {
  document.getElementById("modalBackdrop").hidden = true;
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

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal();
});
document.getElementById("modalAction").addEventListener("click", closeModal);

document.getElementById("loginBtn")?.addEventListener("click", () => 
  openModal("Sign in", "Authentication will connect to the production backend in the next phase.")
);

document.getElementById("cartBtn")?.addEventListener("click", () => 
  openModal("Your cart", cart.length ? `${cart.length} item(s) are saved in this browser.` : "Your cart is empty.")
);

document.querySelector("a[href='/pages/sell.html']")?.addEventListener("click", (e) => {
  
});

document.getElementById("themeBtn")?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("rattle_theme", document.body.classList.contains("light") ? "light" : "dark");
});

if (localStorage.getItem("rattle_theme") === "light") {
  document.body.classList.add("light");
}

updateCart();
loadProducts();
