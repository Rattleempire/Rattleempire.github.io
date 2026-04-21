// ===== FIREBASE INIT =====
let auth = null;
let db = null;

try {
    const firebaseConfig = {
        apiKey: "AIzaSyDDYgf7UflNzrEwWq3sKp79XBu2vWSF2cs",
        authDomain: "rattle-empire-de5be.firebaseapp.com",
        projectId: "rattle-empire-de5be",
        storageBucket: "rattle-empire-de5be.firebasestorage.app",
        messagingSenderId: "1020522358126",
        appId: "1:1020522358126:web:c97987ed076ba5b365cd7f",
        measurementId: "G-W61PBBCZRD"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    auth = firebase.auth();
    db = firebase.firestore();

    // Set persistence
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    console.log("✅ Firebase initialized successfully!");

} catch (e) {
    console.error("❌ Firebase initialization error:", e);
    showToast("Authentication service unavailable", "info");
}

// ===== STATE =====
let cart = [];
let currentCategory = 'electronics';
let isDark = localStorage.getItem('theme') === 'dark';
let adminMode = false;
let currentUser = null;

// ===== PRODUCT DATA =====
const products = {
    electronics: [
        { id: 1, name: 'iPhone X 256GB', price: 850000, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', rating: 4.8, model3d: null },
        { id: 2, name: 'HP EliteBook G3', price: 1200000, img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400', rating: 4.6, model3d: null },
        { id: 3, name: 'Samsung 4K TV', price: 1500000, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400', rating: 4.9, model3d: null },
    ],
    furniture: [
        { id: 4, name: 'Modern Sofa Set', price: 950000, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', rating: 4.7, model3d: null },
        { id: 5, name: 'Dining Table', price: 450000, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400', rating: 4.5, model3d: null },    ],
    luxury: [
        { id: 6, name: 'Designer Watch', price: 650000, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', rating: 5.0, model3d: null },
        { id: 7, name: 'Leather Handbag', price: 280000, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', rating: 4.8, model3d: null },
    ],
    academy: [
        { id: 8, name: 'Web Dev Course', price: 350000, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400', rating: 4.9, model3d: null },
        { id: 9, name: 'ICT Bootcamp', price: 200000, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400', rating: 4.7, model3d: null },
    ],
    tech: [
        { id: 10, name: 'Website Package', price: 500000, img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400', rating: 4.9, model3d: null },
        { id: 11, name: 'SEO Service', price: 300000, img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400', rating: 4.6, model3d: null },
    ],
    blog: [
        { id: 20, name: 'How to Spot Quality Second‑Hand Tech', price: 0, img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b8?w=400', rating: 5.0, model3d: null, isPost: true },
        { id: 21, name: 'Top 5 Furniture Trends in Uganda 2026', price: 0, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', rating: 4.9, isPost: true },
        { id: 22, name: 'Why Rattle Empire Academy Works', price: 0, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400', rating: 5.0, isPost: true },
    ]
};

const categoryInfo = {
    electronics: { title: 'Electronics', desc: 'Certified pre‑owned tech — phones, laptops, and accessories.', icon: 'fa-laptop' },
    furniture: { title: 'Furniture', desc: 'Premium home living — sofas, tables, and décor.', icon: 'fa-couch' },
    luxury: { title: 'Luxury Items', desc: 'Curated accessories — watches, bags, and jewelry.', icon: 'fa-gem' },
    academy: { title: 'Virtual Academy', desc: 'Master coding, ICT, and digital skills.', icon: 'fa-graduation-cap' },
    tech: { title: 'Tigertec Services', desc: 'Web hosting, app development, SEO, and more.', icon: 'fa-microchip' },
    blog: { title: 'Empire Blog', desc: 'Tips, trends, and stories from the Rattle Empire community.', icon: 'fa-newspaper' }
};

const testimonials = [
    { stars: 5, text: "Best deals in Kampala! Got my iPhone in 2 days. ", author: "A. Naka " },
    { stars: 5, text: "The academy changed my career. Highly recommend! ", author: "J. Okello " },
    { stars: 4, text: "Fast delivery and genuine products. Will shop again. ", author: "M. Kato " },
    { stars: 5, text: "Rattle Empire is the future of Ugandan e‑commerce. ", author: "Tech Blogger " },
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
const authBtn = document.getElementById('authBtn');
const paymentModal = document.getElementById('paymentModal');
const modalTotal = document.getElementById('modalTotal');
const confirmPaymentBtn = document.getElementById('confirmPayment');const cancelPaymentBtn = document.getElementById('cancelPayment');
const adminPanel = document.getElementById('adminPanel');
const adminTrigger = document.getElementById('adminTrigger');

// ===== TOAST SYSTEM =====
function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container') || (() => {
        const div = document.createElement('div');
        div.className = 'toast-container';
        document.body.appendChild(div);
        return div;
    })();

    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
    toast.innerHTML = `<i class="fas fa-${icon}" style="color: var(--primary);"></i> ${message}`;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== HAPTIC FEEDBACK =====
function vibrate(pattern = 10) {
    if (window.navigator.vibrate) window.navigator.vibrate(pattern);
}

// ===== RIPPLE EFFECT =====
function applyRipple() {
    document.querySelectorAll('.btn, .product-card__btn, .tab-btn, .product-card, .cart-fab, .theme-toggle').forEach(el => {
        if (!el.classList.contains('ripple')) el.classList.add('ripple');
    });
}

// ===== THEME =====
function initTheme() {
    if (isDark) {
        document.body.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark';
    }
}

initTheme();
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    isDark = !isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light' : '<i class="fas fa-moon"></i> Dark';
    vibrate(15);
    showToast(`Switched to ${isDark ? 'Dark' : 'Light'} mode`, 'info');
    applyRipple();
});

// ===== AUTH =====
function updateAuthUI() {
    if (!authBtn) return;

    if (currentUser) {
        const name = currentUser.email ? currentUser.email.split('@')[0] : 'User';
        authBtn.innerHTML = `<i class="fas fa-user-check"></i> ${name}`;
    } else {
        authBtn.innerHTML = '<i class="fas fa-user"></i> Sign In';
    }
}

// Listen for auth state changes
if (auth) {
    auth.onAuthStateChanged(user => {
        currentUser = user;
        updateAuthUI();
        if (user) {
            console.log("✅ User signed in:", user.email);
        }
    });
}

// Auth button click handler
if (authBtn) {
    authBtn.addEventListener('click', () => {
        if (!auth) {
            showToast('Authentication service unavailable', 'error');
            return;
        }

        if (currentUser) {
            // Sign out
            auth.signOut().then(() => {
                showToast('Signed out successfully', 'info');
            });
        } else {
            // Sign in / Sign up
            const email = prompt('Enter your email:');
            if (!email) return;
            const password = prompt('Enter password (min 6 characters):');
            if (!password || password.length < 6) {
                showToast('Password must be at least 6 characters', 'info');
                return;
            }

            // Try sign in first, if fails, create account
            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    showToast(`Welcome back! 👑`, 'success');
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        // User doesn't exist, create account
                        const confirmSignup = confirm('No account found. Would you like to create one?');
                        if (confirmSignup) {
                            auth.createUserWithEmailAndPassword(email, password)
                                .then(() => {
                                    showToast('Account created! Welcome to Rattle Empire! 👑', 'success');
                                })
                                .catch(err => {
                                    showToast(err.message, 'error');
                                });
                        }
                    } else {
                        showToast(error.message, 'error');
                    }
                });
        }
    });
}

// ===== RENDER PRODUCTS =====
let currentProducts = [];

function renderProducts(category) {
    const items = products[category] || [];
    currentProducts = items;
    const isBlog = category === 'blog';

    productGrid.innerHTML = items.map(product => {
        if (isBlog) {
            return `
                <div class="product-card ripple" onclick="readBlogPost(${product.id})">
                    <img src="${product.img}" alt="${product.name}" class="product-card__image" loading="lazy">
                    <div class="product-card__content">
                        <h3 class="product-card__title">${product.name}</h3>
                        <p style="opacity:0.8; margin:10px 0;">📖 3 min read</p>
                        <button class="product-card__btn" onclick="event.stopPropagation(); readBlogPost(${product.id})">                            <i class="fas fa-book-open"></i> Read
                        </button>
                    </div>
                </div>
            `;
        }
        return `
            <div class="product-card ripple" onclick="addToCart(${product.id})">
                <img src="${product.img}" alt="${product.name}" class="product-card__image" loading="lazy">
                <div class="product-card__content">
                    <h3 class="product-card__title">${product.name}</h3>
                    <div class="product-card__price">UGX ${product.price.toLocaleString()}</div>
                    <button class="product-card__btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');

    applyRipple();
}

function readBlogPost(id) {
    const post = products.blog.find(p => p.id === id);
    if (post) {
        showToast(`📰 Opening: ${post.name}`, 'info');
        // In production, open a modal or navigate to blog post
    }
}

function updateCategoryHeader(category) {
    const info = categoryInfo[category] || { title: category, desc: '', icon: 'fa-box' };
    categoryTitle.innerHTML = `<i class="fas ${info.icon}"></i> <span>${info.title}</span>`;
    categoryDesc.textContent = info.desc;
}

// ===== SEARCH & FILTER =====
function filterAndSortProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sortValue = document.getElementById('sortSelect').value;

    let filtered = currentProducts.filter(p => p.name.toLowerCase().includes(searchTerm));

    if (sortValue === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortValue === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    const isBlog = currentCategory === 'blog';
        productGrid.innerHTML = filtered.map(product => {
        if (isBlog) {
            return `
                <div class="product-card ripple" onclick="readBlogPost(${product.id})">
                    <img src="${product.img}" alt="${product.name}" class="product-card__image" loading="lazy">
                    <div class="product-card__content">
                        <h3 class="product-card__title">${product.name}</h3>
                        <p style="opacity:0.8; margin:10px 0;">📖 3 min read</p>
                        <button class="product-card__btn" onclick="event.stopPropagation(); readBlogPost(${product.id})">
                            <i class="fas fa-book-open"></i> Read
                        </button>
                    </div>
                </div>
            `;
        }
        return `
            <div class="product-card ripple" onclick="addToCart(${product.id})">
                <img src="${product.img}" alt="${product.name}" class="product-card__image" loading="lazy">
                <div class="product-card__content">
                    <h3 class="product-card__title">${product.name}</h3>
                    <div class="product-card__price">UGX ${product.price.toLocaleString()}</div>
                    <button class="product-card__btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');

    applyRipple();
}

document.getElementById('searchInput').addEventListener('input', filterAndSortProducts);
document.getElementById('sortSelect').addEventListener('change', filterAndSortProducts);

// ===== TAB SWITCHING =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.tab;
        currentCategory = category;

        renderProducts(category);
        updateCategoryHeader(category);

        document.getElementById('searchInput').value = '';
        document.getElementById('sortSelect').value = 'default';
                vibrate(12);
        showToast(`Browsing ${categoryInfo[category]?.title || category}`, 'info');
    });
});

// ===== CART =====
function addToCart(productId) {
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);

    if (product && !product.isPost) {
        cart.push(product);
        updateCartUI();
        vibrate([10, 20, 10]);
        showToast(`✨ ${product.name} added to basket`, 'success');
    }
}

function removeFromCart(index) {
    const removed = cart.splice(index, 1)[0];
    updateCartUI();
    vibrate(20);
    showToast(`Removed ${removed.name}`, 'info');
}

function updateCartUI() {
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; opacity: 0.6; margin-top: 40px;">Your basket is empty</p>';
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
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:var(--primary); cursor:pointer; font-size:1.2rem;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
        cartTotal.textContent = `UGX ${total.toLocaleString()}`;
}

document.getElementById('cartFab').addEventListener('click', () => {
    cartSidebar.classList.add('open');
    vibrate(15);
});

document.getElementById('closeCart').addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// ===== CHECKOUT =====
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your basket is empty', 'info');
        vibrate([50, 30, 50]);
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    modalTotal.textContent = `UGX ${total.toLocaleString()}`;
    paymentModal.classList.add('open');
    vibrate(15);
});

cancelPaymentBtn.addEventListener('click', () => paymentModal.classList.remove('open'));

confirmPaymentBtn.addEventListener('click', () => {
    const phone = document.getElementById('phoneNumber').value;
    const network = document.getElementById('networkSelect').value;

    if (!phone || phone.length < 10) {
        showToast('Enter valid phone number', 'info');
        return;
    }

    showToast(`📲 Payment request sent to ${phone} (${network})`, 'success');
    vibrate([10, 20, 30]);

    setTimeout(() => {
        showToast('✅ Payment successful! Order confirmed.', 'success');
        cart = [];
        updateCartUI();
        paymentModal.classList.remove('open');
        cartSidebar.classList.remove('open');
    }, 2000);
});

// ===== TESTIMONIALS =====let testimonialIndex = 0;

function rotateTestimonial() {
    const t = testimonials[testimonialIndex % testimonials.length];
    testimonialCard.innerHTML = `
        <div class="testimonial__stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
        <div class="testimonial__text">"${t.text}"</div>
        <div class="testimonial__author">— ${t.author}</div>
    `;
    testimonialIndex++;
}

setInterval(rotateTestimonial, 6000);
rotateTestimonial();

// ===== ADMIN PANEL =====
function toggleAdminPanel() {
    adminPanel.style.display = adminMode ? 'none' : 'block';
    adminMode = !adminMode;
    if (adminMode) loadAdminProducts();
}

function loadAdminProducts() {
    const container = document.getElementById('adminProductList');
    const all = Object.values(products).flat().filter(p => !p.isPost);

    container.innerHTML = all.map(p => `
        <div style="display:flex; justify-content:space-between; padding:8px; border-bottom:1px solid var(--border-light);">
            <span>${p.name} - UGX ${p.price.toLocaleString()}</span>
            <button onclick="removeProduct(${p.id})" style="color:red; background:none; border:none; cursor:pointer;">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

window.removeProduct = function(id) {
    for (let cat in products) {
        products[cat] = products[cat].filter(p => p.id !== id);
    }
    loadAdminProducts();
    renderProducts(currentCategory);
    showToast('Product removed', 'info');
};

window.addNewProduct = function() {
    const name = prompt('Product name:');
    const price = parseInt(prompt('Price (UGX):'));
    const img = prompt('Image URL:');
        if (name && price && img) {
        const newId = Date.now();
        if (!products.electronics) products.electronics = [];
        products.electronics.push({ id: newId, name, price, img, rating: 5.0 });
        renderProducts(currentCategory);
        showToast('Product added!', 'success');
    }
};

adminTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    const pass = prompt('Enter admin key:');
    if (pass === 'rattle2026') {
        showToast('👑 Access granted! Welcome, Emperor.', 'success');
        vibrate([30, 50, 30]);
        toggleAdminPanel();
    } else if (pass !== null) {
        showToast('Invalid key', 'info');
        vibrate([50, 50]);
    }
});

// ===== 3D VIEWER (stub) =====
window.viewIn3D = function(productId) {
    const all = Object.values(products).flat();
    const product = all.find(p => p.id === productId);
    if (product && product.model3d) {
        showToast('🎥 3D view loading...', 'info');
    } else {
        showToast('3D model not available for this item', 'info');
    }
};

// ===== PARALLAX & SCROLL EFFECTS =====
if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.hero__glow');
        if (!glow) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        glow.style.transform = `translate(${x}px, ${y}px)`;
    });
}

const tabs = document.querySelector('.tabs');
window.addEventListener('scroll', () => {
    tabs?.classList.toggle('sticky-shadow', window.scrollY > 100);
});

// ===== ESCAPE KEY =====document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
        cartSidebar.classList.remove('open');
    }
    if (e.key === 'Escape' && paymentModal.classList.contains('open')) {
        paymentModal.classList.remove('open');
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#deals') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// ===== PRELOAD IMAGES =====
[
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400'
].forEach(src => {
    const img = new Image();
    img.src = src;
});

// ===== CART FAB PULSE ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    @keyframes cartPulse {
        0%,100%{transform:scale(1);}
        50%{transform:scale(1.2);}
    }
    .cart-fab:active {
        animation: cartPulse 0.3s ease;
    }
`;
document.head.appendChild(style);

// ===== MUTATION OBSERVER FOR RIPPLE =====
const observer = new MutationObserver(() => applyRipple());
observer.observe(document.body, { childList: true, subtree: true });

// ===== INITIAL RENDER =====
renderProducts('electronics');
updateCategoryHeader('electronics');
applyRipple();
console.log("👑 Rattle Empire initialized successfully!");
