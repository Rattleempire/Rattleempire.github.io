// ===== STATE =====
let cart = [];
let currentCategory = 'electronics';
let isDark = localStorage.getItem('theme') === 'dark';

// ===== PRODUCT DATA =====
const products = {
  electronics: [
    { id: 1, name: 'iPhone X 256GB', price: 850000, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', rating: 4.8 },
    { id: 2, name: 'HP EliteBook G3', price: 1200000, img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400', rating: 4.6 },
    { id: 3, name: 'Samsung 4K TV', price: 1500000, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400', rating: 4.9 },
  ],
  furniture: [
    { id: 4, name: 'Modern Sofa Set', price: 950000, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', rating: 4.7 },
    { id: 5, name: 'Dining Table', price: 450000, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400', rating: 4.5 },
  ],
  luxury: [
    { id: 6, name: 'Designer Watch', price: 650000, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', rating: 5.0 },
    { id: 7, name: 'Leather Handbag', price: 280000, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', rating: 4.8 },
  ],
  academy: [
    { id: 8, name: 'Web Dev Course', price: 350000, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400', rating: 4.9 },
    { id: 9, name: 'ICT Bootcamp', price: 200000, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400', rating: 4.7 },
  ],
  tech: [
    { id: 10, name: 'Website Package', price: 500000, img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400', rating: 4.9 },
    { id: 11, name: 'SEO Service', price: 300000, img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400', rating: 4.6 },
  ]
};

const categoryInfo = {
  electronics: { title: 'Electronics', desc: 'Certified pre-owned tech — phones, laptops, and accessories.' },
  furniture: { title: 'Furniture', desc: 'Premium home living — sofas, tables, and décor.' },
  luxury: { title: 'Luxury Items', desc: 'Curated accessories — watches, bags, and jewelry.' },
  academy: { title: 'Virtual Academy', desc: 'Master coding, ICT, and digital skills.' },
  tech: { title: 'Tigertec Services', desc: 'Web hosting, app development, SEO, and more.' }
};

const testimonials = [
  { stars: 5, text: "Best deals in Kampala! Got my iPhone in 2 days.", author: "A. Naka" },
  { stars: 5, text: "The academy changed my career. Highly recommend!", author: "J. Okello" },
  { stars: 4, text: "Fast delivery and genuine products. Will shop again.", author: "M. Kato" },
  { stars: 5, text: "Rattle Empire is the future of Ugandan e‑commerce.", author: "Tech Blogger" },
];

// ===== DOM ELEMENTS =====
const productGrid = document.getElementById('productGrid');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDesc = document.getElementById('categoryDesc');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const testimonialCard = document.getElementById('testimonialCard');
const themeToggle = document.getElementById('themeToggle');

// ===== INITIALIZE THEME =====
function initTheme() {
  if (isDark) {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Light</span>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i><span>Dark</span>';
  }
}
initTheme();

// ===== THEME TOGGLE =====
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  isDark = !isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.innerHTML = isDark 
    ? '<i class="fas fa-sun"></i><span>Light</span>' 
    : '<i class="fas fa-moon"></i><span>Dark</span>';
});

// ===== RENDER PRODUCTS =====
function renderProducts(category) {
  const items = products[category] || [];
  productGrid.innerHTML = items.map(product => `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}" class="product-card__image" loading="lazy">
      <div class="product-card__content">
        <h3 class="product-card__title">${product.name}</h3>
        <div class="product-card__price">UGX ${product.price.toLocaleString()}</div>
        <button class="product-card__btn" onclick="addToCart(${product.id})">
          <i class="fas fa-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

// ===== UPDATE CATEGORY HEADER =====
function updateCategoryHeader(category) {
  const info = categoryInfo[category];
  categoryTitle.textContent = info.title;
  categoryDesc.textContent = info.desc;
}

// ===== TAB SWITCHING =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.tab;
    currentCategory = category;
    renderProducts(category);
    updateCategoryHeader(category);
  });
});

// ===== CART FUNCTIONS =====
function addToCart(productId) {
  const allProducts = Object.values(products).flat();
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartUI();
    // Haptic feedback if supported
    if (navigator.vibrate) navigator.vibrate(20);
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  // Update count
  cartCount.textContent = cart.length;
  
  // Update items in sidebar
  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center; opacity:0.6;">Your basket is empty</p>';
    cartTotal.textContent = 'UGX 0';
    return;
  }
  
  let total = 0;
  cartItems.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          <small>UGX ${item.price.toLocaleString()}</small>
        </div>
        <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
  }).join('');
  
  cartTotal.textContent = `UGX ${total.toLocaleString()}`;
}

// ===== CART SIDEBAR TOGGLE =====
document.getElementById('cartFab').addEventListener('click', () => {
  cartSidebar.classList.add('open');
});

document.getElementById('closeCart').addEventListener('click', () => {
  cartSidebar.classList.remove('open');
});

// ===== CHECKOUT =====
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert(`✅ Order placed! Total: UGX ${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}\nYou will receive an SMS confirmation.`);
  cart = [];
  updateCartUI();
  cartSidebar.classList.remove('open');
});

// ===== TESTIMONIALS ROTATION =====
let testimonialIndex = 0;
function rotateTestimonial() {
  const t = testimonials[testimonialIndex % testimonials.length];
  testimonialCard.innerHTML = `
    <div class="testimonial__stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
    <div class="testimonial__text">"${t.text}"</div>
    <div class="testimonial__author">— ${t.author}</div>
  `;
  testimonialIndex++;
}
setInterval(rotateTestimonial, 5000);
rotateTestimonial(); // initial

// ===== ADMIN SECRET =====
document.getElementById('adminTrigger').addEventListener('click', (e) => {
  e.preventDefault();
  const pass = prompt('Enter admin key:');
  if (pass === 'rattle2026') {
    alert('✅ Access granted! Welcome, Emperor.');
  }
});

// ===== INITIAL RENDER =====
renderProducts('electronics');
updateCategoryHeader('electronics');

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== CLOSE CART ON ESCAPE =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
    cartSidebar.classList.remove('open');
  }
});