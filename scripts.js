// ===== RATTLE EMPIRE v5.0 — scripts.js =====
// Premium Digital Marketplace Engine

// ===== PREMIUM DIGITAL PRODUCTS =====
const products = [
    // ChatGPT & AI Accounts
    { id: 1, name: "ChatGPT Plus (1 Month)", price: 45000, originalPrice: 80000, category: "chatgpt", condition: "Instant Delivery", seller: "Trevor Labs", sellerLoc: "Kampala", rating: 4.9, reviews: 128, sold: 342, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop", description: "Full ChatGPT Plus access with GPT-4, DALL-E, voice mode & priority during peak times." },
    { id: 2, name: "ChatGPT Plus (3 Months)", price: 120000, originalPrice: 240000, category: "chatgpt", condition: "Instant Delivery", seller: "Trevor Labs", sellerLoc: "Kampala", rating: 4.9, reviews: 89, sold: 156, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop", description: "3 months of ChatGPT Plus. Save 50% vs monthly pricing." },
    { id: 3, name: "ChatGPT Plus (1 Year)", price: 420000, originalPrice: 960000, category: "chatgpt", condition: "Instant Delivery", seller: "Trevor Labs", sellerLoc: "Kampala", rating: 5.0, reviews: 45, sold: 78, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop", description: "Full year of ChatGPT Plus. Best value for power users." },
    { id: 4, name: "Claude Pro (1 Month)", price: 55000, originalPrice: 90000, category: "claude", condition: "Instant Delivery", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.8, reviews: 67, sold: 189, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop", description: "Claude Pro with 200K context window, priority access & Claude 3 Opus." },
    { id: 5, name: "Claude Pro (3 Months)", price: 150000, originalPrice: 270000, category: "claude", condition: "Instant Delivery", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.9, reviews: 42, sold: 95, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop", description: "3 months of Claude Pro. Best for research & coding." },
    
    // Streaming Services
    { id: 6, name: "Netflix Premium 4K (1 Month)", price: 25000, originalPrice: 50000, category: "netflix", condition: "Instant Delivery", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.7, reviews: 234, sold: 567, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop", description: "Netflix Premium 4K with 4 screens. Watch anything, anywhere." },
    { id: 7, name: "Netflix Premium 4K (3 Months)", price: 65000, originalPrice: 150000, category: "netflix", condition: "Instant Delivery", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.8, reviews: 156, sold: 389, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop", description: "3 months of Netflix Premium 4K. Save 57%." },
    { id: 8, name: "Spotify Premium (1 Month)", price: 18000, originalPrice: 35000, category: "spotify", condition: "Instant Delivery", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.6, reviews: 189, sold: 423, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1611339555312-e607c835872e?w=400&h=300&fit=crop", description: "Spotify Premium with ad-free music, offline downloads & high quality audio." },
    { id: 9, name: "YouTube Premium (1 Month)", price: 22000, originalPrice: 40000, category: "youtube", condition: "Instant Delivery", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.7, reviews: 145, sold: 312, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop", description: "YouTube Premium - ad-free videos, background play & YouTube Music." },
    
    // Creative Tools
    { id: 10, name: "Midjourney Basic (1 Month)", price: 35000, originalPrice: 60000, category: "midjourney", condition: "Instant Delivery", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.8, reviews: 78, sold: 167, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1633419461250-d1d1a3d1d1d1?w=400&h=300&fit=crop", description: "Midjourney Basic - 200 image generations per month. Create stunning AI art." },
    { id: 11, name: "Midjourney Standard (1 Month)", price: 85000, originalPrice: 150000, category: "midjourney", condition: "Instant Delivery", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.9, reviews: 56, sold: 98, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1633419461250-d1d1a3d1d1d1?w=400&h=300&fit=crop", description: "Midjourney Standard - 900 generations + relax mode. Perfect for designers." },
    { id: 12, name: "Adobe Creative Cloud (1 Month)", price: 180000, originalPrice: 350000, category: "creative", condition: "Instant Delivery", seller: "Creative Pro", sellerLoc: "Kampala", rating: 4.7, reviews: 34, sold: 67, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop", description: "Full Adobe CC suite - Photoshop, Illustrator, Premiere Pro & 20+ apps." },
    
    // Developer Tools
    { id: 13, name: "GitHub Copilot (1 Month)", price: 40000, originalPrice: 70000, category: "developer", condition: "Instant Delivery", seller: "DevTools Pro", sellerLoc: "Kampala", rating: 4.8, reviews: 89, sold: 145, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop", description: "GitHub Copilot - AI pair programmer. Writes code as you type." },
    { id: 14, name: "Cursor Pro (1 Month)", price: 55000, originalPrice: 95000, category: "developer", condition: "Instant Delivery", seller: "DevTools Pro", sellerLoc: "Kampala", rating: 4.9, reviews: 45, sold: 78, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop", description: "Cursor Pro - The AI-first code editor. 10x your coding speed." },
    
    // Other Premium
    { id: 15, name: "Notion Plus (1 Year)", price: 95000, originalPrice: 180000, category: "productivity", condition: "Instant Delivery", seller: "Productivity Hub", sellerLoc: "Kampala", rating: 4.6, reviews: 67, sold: 123, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1611224923853-80b05380f1d5?w=400&h=300&fit=crop", description: "Notion Plus - unlimited file uploads, 30-day version history & more." },
    { id: 16, name: "Grammarly Premium (1 Year)", price: 75000, originalPrice: 150000, category: "productivity", condition: "Instant Delivery", seller: "Productivity Hub", sellerLoc: "Kampala", rating: 4.7, reviews: 89, sold: 167, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1455390582262-044cdead3037?w=400&h=300&fit=crop", description: "Grammarly Premium - advanced suggestions, tone detection & plagiarism checker." },
    { id: 17, name: "Perplexity Pro (1 Month)", price: 45000, originalPrice: 80000, category: "ai-tools", condition: "Instant Delivery", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.8, reviews: 34, sold: 56, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1633419461250-d1d1a3d1d1d1?w=400&h=300&fit=crop", description: "Perplexity Pro - unlimited pro searches, file uploads & GPT-4 access." },
    { id: 18, name: "Runway ML (1 Month)", price: 65000, originalPrice: 120000, category: "creative", condition: "Instant Delivery", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.7, reviews: 28, sold: 45, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop", description: "Runway ML - AI video generation, image editing & 100+ AI tools." },
    { id: 19, name: "ElevenLabs (1 Month)", price: 55000, originalPrice: 100000, category: "ai-tools", condition: "Instant Delivery", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.8, reviews: 45, sold: 78, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop", description: "ElevenLabs - AI voice generation. Create realistic voices in 29 languages." },
    { id: 20, name: "Canva Pro (1 Year)", price: 85000, originalPrice: 170000, category: "creative", condition: "Instant Delivery", seller: "Creative Pro", sellerLoc: "Kampala", rating: 4.6, reviews: 123, sold: 234, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop", description: "Canva Pro - unlimited premium templates, brand kits & 100GB storage." },
];

// ===== EXPERT COURSES =====
const courses = [
    { id: "course-1", title: "Master ChatGPT & AI Tools", instructor: "Alexus M.", category: "AI & Automation", level: "Beginner", lessons: 24, duration: "8 hours", rating: 4.9, reviews: 234, students: 1245, price: 75000, originalPrice: 150000, bestseller: true, emoji: "🤖", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop", description: "Master ChatGPT, Claude, Midjourney & 20+ AI tools. Build AI-powered workflows that save 10+ hours/week." },
    { id: "course-2", title: "TikTok Monetization Mastery", instructor: "Derrick K.", category: "Social Media", level: "Intermediate", lessons: 32, duration: "12 hours", rating: 4.8, reviews: 189, students: 892, price: 95000, originalPrice: 200000, bestseller: true, emoji: "📱", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=250&fit=crop", description: "Grow from 0 to 100K followers. Master the algorithm, viral hooks, TikTok Shop & brand deals." },
    { id: "course-3", title: "Full Stack Web Development", instructor: "Trevor Labs", category: "Programming", level: "Beginner", lessons: 64, duration: "40 hours", rating: 4.9, reviews: 156, students: 567, price: 150000, originalPrice: 300000, bestseller: true, emoji: "💻", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop", description: "HTML, CSS, JavaScript, React, Node.js & databases. Build 5 real projects from scratch." },
    { id: "course-4", title: "Cybersecurity & Ethical Hacking", instructor: "Security Pro", category: "Cybersecurity", level: "Intermediate", lessons: 48, duration: "30 hours", rating: 4.8, reviews: 123, students: 445, price: 120000, originalPrice: 250000, bestseller: false, emoji: "🛡️", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop", description: "Network security, penetration testing, Kali Linux & real-world red team techniques." },
    { id: "course-5", title: "Cryptocurrency & DeFi Trading", instructor: "Crypto Master", category: "Finance", level: "Advanced", lessons: 36, duration: "18 hours", rating: 4.7, reviews: 98, students: 334, price: 95000, originalPrice: 200000, bestseller: false, emoji: "₿", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=250&fit=crop", description: "Blockchain, trading strategies, DeFi protocols, NFTs & risk management." },
    { id: "course-6", title: "Instagram Growth & Branding", instructor: "Social Pro", category: "Social Media", level: "Beginner", lessons: 28, duration: "10 hours", rating: 4.8, reviews: 167, students: 723, price: 65000, originalPrice: 140000, bestseller: true, emoji: "📸", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=250&fit=crop", description: "Build a 6-figure Instagram brand. Content strategy, Reels mastery & monetization." },
    { id: "course-7", title: "YouTube Automation & SEO", instructor: "Video Master", category: "Social Media", level: "Intermediate", lessons: 40, duration: "20 hours", rating: 4.9, reviews: 145, students: 512, price: 85000, originalPrice: 180000, bestseller: true, emoji: "🎬", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=250&fit=crop", description: "Build faceless YouTube channels. AI scripts, thumbnails, SEO & ad revenue optimization." },
    { id: "course-8", title: "Dropshipping & E-Commerce", instructor: "Business Pro", category: "Business", level: "Beginner", lessons: 36, duration: "15 hours", rating: 4.7, reviews: 112, students: 389, price: 75000, originalPrice: 160000, bestseller: false, emoji: "🛒", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop", description: "Build a 6-figure dropshipping store. Product research, Shopify, Facebook ads & scaling." },
    { id: "course-9", title: "Python for Data Science", instructor: "Data Pro", category: "Programming", level: "Intermediate", lessons: 52, duration: "25 hours", rating: 4.8, reviews: 89, students: 267, price: 95000, originalPrice: 200000, bestseller: false, emoji: "🐍", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop", description: "Python, Pandas, NumPy, visualization & machine learning fundamentals." },
    { id: "course-10", title: "Freelancing & Remote Work", instructor: "Career Pro", category: "Business", level: "Beginner", lessons: 24, duration: "8 hours", rating: 4.9, reviews: 198, students: 845, price: 55000, originalPrice: 120000, bestseller: true, emoji: "💼", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop", description: "Land $50-100/hr freelance gigs. Upwork, Fiverr mastery, client acquisition & scaling." },
];

// ===== VERIFIED PREMIUM SELLERS =====
const sellers = [
    { name: "Trevor Labs", location: "Kampala", rank: 1, tier: "diamond", sales: 420, rating: 4.98, verified: true, specialty: "AI Accounts & Developer Tools", deliveryTime: "2 min", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { name: "AI Masters", location: "Kampala", rank: 2, tier: "diamond", sales: 385, rating: 4.95, verified: true, specialty: "Claude, Perplexity & AI Research Tools", deliveryTime: "3 min", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "StreamHub", location: "Entebbe", rank: 3, tier: "platinum", sales: 1267, rating: 4.85, verified: true, specialty: "Netflix, Spotify, YouTube & Disney+", deliveryTime: "5 min", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "AI Creators", location: "Kampala", rank: 4, tier: "platinum", sales: 388, rating: 4.88, verified: true, specialty: "Midjourney, Runway, ElevenLabs", deliveryTime: "3 min", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" },
    { name: "Creative Pro", location: "Kampala", rank: 5, tier: "gold", sales: 301, rating: 4.75, verified: true, specialty: "Adobe CC, Canva & Design Tools", deliveryTime: "5 min", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face" },
    { name: "DevTools Pro", location: "Kampala", rank: 6, tier: "gold", sales: 223, rating: 4.82, verified: true, specialty: "GitHub Copilot, Cursor & Developer Tools", deliveryTime: "4 min", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
    { name: "Productivity Hub", location: "Entebbe", rank: 7, tier: "gold", sales: 290, rating: 4.72, verified: true, specialty: "Notion, Grammarly & Productivity Tools", deliveryTime: "5 min", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
    { name: "MrGoViral SMM", location: "Kampala", rank: 8, tier: "diamond", sales: 892, rating: 4.92, verified: true, specialty: "Social Media Growth & Marketing", deliveryTime: "Instant", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
];

// ===== CATEGORIES =====
const categories = [
    { id: "all", name: "All Products", emoji: "🔥", color: "from-purple-600 to-indigo-600", icon: "fa-border-all", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop" },
    { id: "chatgpt", name: "ChatGPT", emoji: "🤖", color: "from-green-600 to-emerald-600", icon: "fa-robot", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=150&fit=crop" },
    { id: "claude", name: "Claude", emoji: "🧠", color: "from-orange-600 to-amber-600", icon: "fa-brain", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=150&fit=crop" },
    { id: "netflix", name: "Netflix", emoji: "🎬", color: "from-red-600 to-rose-600", icon: "fa-film", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=150&fit=crop" },
    { id: "spotify", name: "Spotify", emoji: "🎵", color: "from-green-500 to-emerald-500", icon: "fa-music", image: "https://images.unsplash.com/photo-1611339555312-e607c835872e?w=200&h=150&fit=crop" },
    { id: "midjourney", name: "Midjourney", emoji: "🎨", color: "from-purple-500 to-violet-500", icon: "fa-wand-magic-sparkles", image: "https://images.unsplash.com/photo-1633419461250-d1d1a3d1d1d1?w=200&h=150&fit=crop" },
    { id: "youtube", name: "YouTube", emoji: "📺", color: "from-red-500 to-red-600", icon: "fa-youtube", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=150&fit=crop" },
    { id: "developer", name: "Developer", emoji: "💻", color: "from-blue-600 to-cyan-600", icon: "fa-code", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200&h=150&fit=crop" },
    { id: "creative", name: "Creative", emoji: "🎨", color: "from-pink-600 to-rose-600", icon: "fa-palette", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&h=150&fit=crop" },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('rattle_cart') || '[]');
let currentCategory = 'all';
let currentSort = 'popular';
let carouselIndex = 0;
let carouselInterval;

function saveCart() { localStorage.setItem('rattle_cart', JSON.stringify(cart)); }

// ===== CAROUSEL =====
function startCarousel() {
    carouselInterval = setInterval(() => carouselMove(1), 6000);
}

function carouselMove(dir) {
    const track = document.getElementById('carousel-track');
    const dots = document.getElementById('carousel-dots').children;
    const total = 3;
    carouselIndex = (carouselIndex + dir + total) % total;
    track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    Array.from(dots).forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

function carouselGo(idx) {
    const track = document.getElementById('carousel-track');
    const dots = document.getElementById('carousel-dots').children;
    carouselIndex = idx;
    track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    Array.from(dots).forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
    clearInterval(carouselInterval);
    startCarousel();
}

// ===== SHUFFLE =====
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ===== RENDER CATEGORIES =====
function renderCategories() {
    const container = document.getElementById('category-thumbs');
    if (!container) return;
    
    container.innerHTML = categories.map(c => {
        let count;
        if (c.id === 'all') count = products.length;
        else count = products.filter(p => p.category === c.id).length;
        const isActive = currentCategory === c.id;
        return `
        <div class="cat-thumb ${isActive ? 'active' : ''}" onclick="setCategory('${c.id}')" data-cat="${c.id}">
            <img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.style.display='none'">
            <div class="absolute inset-0 bg-gradient-to-t ${c.color} opacity-40"></div>
            <div class="cat-overlay">
                <i class="fas ${c.icon}"></i>
                <span>${c.name}</span>
                <span class="count">${count} items</span>
            </div>
        </div>`;
    }).join('');
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    let filtered = currentCategory === 'all' ? [...products] : products.filter(p => p.category === currentCategory);
    
    if (currentSort === 'popular') filtered.sort((a, b) => b.sold - a.sold);
    else if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (currentSort === 'newest') filtered.sort((a, b) => b.id - a.id);
    
    const heading = document.getElementById('products-heading');
    if (heading) {
        if (currentCategory === 'all') {
            heading.innerHTML = '<i class="fas fa-crown"></i> Premium Accounts';
        } else {
            const cat = categories.find(c => c.id === currentCategory);
            heading.innerHTML = `<i class="fas ${cat.icon}"></i> ${cat.emoji} ${cat.name}`;
        }
    }
    
    grid.innerHTML = filtered.map((p, i) => productCardHTML(p, i)).join('');
}

function starsHTML(rating) {
    let html = '';
    for (let s = 1; s <= 5; s++) {
        html += `<i class="fas fa-star ${s <= Math.round(rating) ? '' : 'empty'}"></i>`;
    }
    return html;
}

function productCardHTML(p, i) {
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    return `
    <div class="product-card" style="animation-delay:${i * 0.05}s">
        <div class="card-img" onclick="openProductModal(${p.id})">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(p.name)}'">
            ${discount > 0 ? `<span class="badge-discount">-${discount}%</span>` : ''}
            ${p.warranty === 'lifetime' ? '<span class="badge-lifetime"><i class="fas fa-shield-halved"></i> Lifetime</span>' : ''}
            ${p.delivery === 'instant' ? '<span class="badge-instant"><i class="fas fa-bolt"></i> Instant</span>' : ''}
            <span class="badge-verified"><i class="fas fa-badge-check"></i> Verified</span>
        </div>
        <div class="card-body">
            <h3>${p.name}</h3>
            <div class="stars">${starsHTML(p.rating)}<span>(${p.reviews})</span></div>
            <div class="price-row">
                <span class="price">UGX ${p.price.toLocaleString()}</span>
                ${p.originalPrice ? `<span class="original">UGX ${p.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="meta">
                <i class="fas fa-bolt"></i> ${p.delivery === 'instant' ? 'Instant' : 'Fast'} Delivery
                <span style="margin:0 4px">•</span>
                <span class="sold-badge"><i class="fas fa-box"></i> ${p.sold} sold</span>
            </div>
            <div class="card-actions">
                <button class="btn-add" onclick="addToCart(products.find(x=>x.id===${p.id}))"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                <a class="btn-wa" href="https://wa.me/256775374095?text=Hi! I want to buy: ${encodeURIComponent(p.name)} (UGX ${p.price.toLocaleString()})" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </div>`;
}

// ===== RENDER COURSES =====
function renderCourses() {
    const grid = document.getElementById('course-grid');
    if (!grid) return;
    
    grid.innerHTML = courses.map(c => {
        const discount = c.originalPrice ? Math.round(((c.originalPrice - c.price) / c.originalPrice) * 100) : 0;
        return `
        <div class="course-card" onclick="openCourseModal('${c.id}')">
            <div class="course-img">
                <img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.style.display='none'">
                <div class="course-emoji" style="display:none">${c.emoji}</div>
                ${c.bestseller ? '<span class="badge-bestseller">🔥 Bestseller</span>' : ''}
                ${c.id === 'course-10' ? '<span class="badge-new">NEW</span>' : ''}
            </div>
            <div class="course-body">
                <div class="course-category">${c.category}</div>
                <h4>${c.title}</h4>
                <div class="course-instructor"><i class="fas fa-user"></i> ${c.instructor}</div>
                <div class="course-meta">
                    <span><i class="fas fa-book"></i> ${c.lessons} lessons</span>
                    <span><i class="fas fa-clock"></i> ${c.duration}</span>
                    <span><i class="fas fa-signal"></i> ${c.level}</span>
                </div>
                <div class="course-footer">
                    <div class="course-price">
                        UGX ${c.price.toLocaleString()}
                        ${c.originalPrice ? `<span class="original">UGX ${c.originalPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <div class="course-rating">
                        <i class="fas fa-star"></i> ${c.rating} (${c.reviews})
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function openCourseModal(id) {
    const c = courses.find(x => x.id === id);
    if (!c) return;
    
    const discount = c.originalPrice ? Math.round(((c.originalPrice - c.price) / c.originalPrice) * 100) : 0;
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="modal-header">
            <h3>${c.title}</h3>
            <button onclick="closeProductModal()"><i class="fas fa-xmark"></i></button>
        </div>
        <img class="modal-img" src="${c.image}" alt="${c.title}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(c.title)}'">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <div class="stars" style="display:flex;gap:2px;">${starsHTML(c.rating)}</div>
            <span style="font-size:12px;color:#666;">${c.rating} (${c.reviews} reviews) • ${c.students} students</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span style="font-size:24px;font-weight:900;background:linear-gradient(135deg,#7000ff,#00d4ff);-webkit-background-clip:text;background-clip:text;color:transparent;">UGX ${c.price.toLocaleString()}</span>
            ${c.originalPrice ? `<span style="font-size:14px;color:#555;text-decoration:line-through;">UGX ${c.originalPrice.toLocaleString()}</span>` : ''}
            ${discount > 0 ? `<span style="background:rgba(239,68,68,0.15);color:#f87171;font-size:12px;font-weight:700;padding:3px 10px;border-radius:6px;">-${discount}%</span>` : ''}
        </div>
        <p style="color:#888;font-size:13px;line-height:1.6;margin-bottom:16px;">${c.description}</p>
        <div class="modal-details">
            <div class="detail-item"><div class="label">Instructor</div><div class="value">${c.instructor}</div></div>
            <div class="detail-item"><div class="label">Lessons</div><div class="value">${c.lessons} lessons</div></div>
            <div class="detail-item"><div class="label">Duration</div><div class="value">${c.duration}</div></div>
            <div class="detail-item"><div class="label">Level</div><div class="value">${c.level}</div></div>
        </div>
        <div class="modal-actions">
            <button class="btn-add-modal" onclick="showToast('<i class=\\'fas fa-check-circle\\' style=\\'color:#4ade80\\'></i> Course added! Contact us on WhatsApp to enroll.'); closeProductModal();"><i class="fas fa-graduation-cap"></i> Enroll Now</button>
            <a class="btn-wa-modal" href="https://wa.me/256775374095?text=Hi! I want to enroll in: ${encodeURIComponent(c.title)} (UGX ${c.price.toLocaleString()})" target="_blank"><i class="fab fa-whatsapp"></i></a>
        </div>`;
    document.getElementById('product-modal').classList.add('open');
}

// ===== RENDER SELLERS =====
function renderSellers() {
    const list = document.getElementById('seller-list');
    if (!list) return;
    
    const sorted = [...sellers].sort((a, b) => a.rank - b.rank);
    list.innerHTML = sorted.map(s => {
        const tierClass = s.tier === 'diamond' ? 'diamond' : s.tier === 'platinum' ? 'platinum' : 'gold';
        const waNum = '256775374095';
        return `
        <div class="seller-card">
            <div class="rank-badge ${tierClass}"><i class="fas fa-crown"></i></div>
            <img src="${s.avatar}" alt="${s.name}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'">
            <div class="seller-info">
                <div class="name-row">
                    <span class="name">${s.name}</span>
                    ${s.verified ? '<span class="verified"><i class="fas fa-badge-check"></i> Verified</span>' : ''}
                </div>
                <div class="location"><i class="fas fa-location-dot"></i> ${s.location} • ${s.specialty}</div>
                <div class="stats">
                    <span class="stat"><i class="fas fa-star" style="color:#fbbf24"></i> ${s.rating}</span>
                    <span class="stat"><i class="fas fa-fire" style="color:var(--empire)"></i> ${s.sales} sales</span>
                    <span class="stat"><i class="fas fa-bolt" style="color:#4ade80"></i> ${s.deliveryTime}</span>
                </div>
            </div>
            <a href="https://wa.me/${waNum}?text=Hi ${s.name}! I'm interested in your products on Rattle Empire" class="btn-contact" target="_blank"><i class="fab fa-whatsapp"></i> Contact</a>
        </div>`;
    }).join('');
}

// ===== CATEGORY & SORT =====
function setCategory(cat) {
    currentCategory = cat;
    renderCategories();
    renderProducts();
    scrollToSection('products-section');
}

function sortProducts(val) {
    currentSort = val;
    renderProducts();
}

function filterProducts(query) {
    const q = query.toLowerCase();
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.seller.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    grid.innerHTML = filtered.map((p, i) => productCardHTML(p, i)).join('');
}

// ===== CART =====
function addToCart(product) {
    const existing = cart.find(c => c.id === product.id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    saveCart();
    updateCartUI();
    showToast(`<i class="fas fa-check-circle" style="color:#4ade80"></i> ${product.name} added to cart!`);
}

function removeFromCart(id) { 
    cart = cart.filter(c => c.id !== id); 
    saveCart(); 
    updateCartUI(); 
}

function updateQuantity(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) { 
        item.quantity += delta; 
        if (item.quantity <= 0) removeFromCart(id); 
        else { saveCart(); updateCartUI(); } 
    }
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    const count = cart.reduce((s, c) => s + c.quantity, 0);
    const totalPrice = cart.reduce((s, c) => s + c.price * c.quantity, 0);
    
    if (countEl) {
        countEl.textContent = count;
        countEl.style.display = count > 0 ? 'flex' : 'none';
    }
    if (totalEl) totalEl.textContent = `UGX ${totalPrice.toLocaleString()}`;
    
    if (!itemsEl) return;
    
    if (cart.length === 0) {
        itemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-cart-shopping" style="font-size:32px;color:#333;display:block;margin-bottom:12px;"></i>Your cart is empty</div>';
        if (checkoutBtn) checkoutBtn.href = '#';
        return;
    }
    
    itemsEl.innerHTML = cart.map(c => `
        <div class="cart-item">
            <img src="${c.image}" alt="${c.name}">
            <div class="cart-item-info">
                <div class="item-name">${c.name}</div>
                <div class="item-price">UGX ${c.price.toLocaleString()}</div>
                <div class="qty-row">
                    <button onclick="updateQuantity(${c.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span>${c.quantity}</span>
                    <button onclick="updateQuantity(${c.id}, 1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${c.id})"><i class="fas fa-trash"></i></button>
        </div>`).join('');
    
    const msg = cart.map(c => `${c.name} x${c.quantity} = UGX ${(c.price * c.quantity).toLocaleString()}`).join('%0a');
    if (checkoutBtn) checkoutBtn.href = `https://wa.me/256775374095?text=Hi! I'd like to order:%0a${msg}%0a%0aTotal: UGX ${totalPrice.toLocaleString()}`;
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

// ===== MODAL =====
function openProductModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="modal-header">
            <h3>${p.name}</h3>
            <button onclick="closeProductModal()"><i class="fas fa-xmark"></i></button>
        </div>
        <img class="modal-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(p.name)}'">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <div class="stars" style="display:flex;gap:2px;">${starsHTML(p.rating)}</div>
            <span style="font-size:12px;color:#666;">${p.rating} (${p.reviews} reviews) • ${p.sold} sold</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span style="font-size:24px;font-weight:900;background:linear-gradient(135deg,#7000ff,#00d4ff);-webkit-background-clip:text;background-clip:text;color:transparent;">UGX ${p.price.toLocaleString()}</span>
            ${p.originalPrice ? `<span style="font-size:14px;color:#555;text-decoration:line-through;">UGX ${p.originalPrice.toLocaleString()}</span>` : ''}
            ${discount > 0 ? `<span style="background:rgba(239,68,68,0.15);color:#f87171;font-size:12px;font-weight:700;padding:3px 10px;border-radius:6px;">-${discount}%</span>` : ''}
        </div>
        <p style="color:#888;font-size:13px;line-height:1.6;margin-bottom:16px;">${p.description}</p>
        <div class="modal-details">
            <div class="detail-item"><div class="label">Delivery</div><div class="value">${p.delivery === 'instant' ? '⚡ Instant' : '🚀 Fast'}</div></div>
            <div class="detail-item"><div class="label">Warranty</div><div class="value">${p.warranty === 'lifetime' ? '♾️ Lifetime' : 'Standard'}</div></div>
            <div class="detail-item"><div class="label">Seller</div><div class="value">${p.seller}</div></div>
            <div class="detail-item"><div class="label">Category</div><div class="value" style="text-transform:capitalize;">${p.category}</div></div>
        </div>
        <div class="modal-actions">
            <button class="btn-add-modal" onclick="addToCart(products.find(x=>x.id===${p.id})); closeProductModal();"><i class="fas fa-cart-plus"></i> Add to Cart</button>
            <a class="btn-wa-modal" href="https://wa.me/256775374095?text=Hi! I want to buy: ${encodeURIComponent(p.name)} (UGX ${p.price.toLocaleString()})" target="_blank"><i class="fab fa-whatsapp"></i></a>
        </div>`;
    document.getElementById('product-modal').classList.add('open');
}

function closeProductModal(e) {
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    if (e && e.target && e.target !== modal) return;
    modal.classList.remove('open');
}

// ===== SIDEBAR TOGGLE =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
        closeSidebar();
        const cartDrawer = document.getElementById('cart-drawer');
        if (cartDrawer) cartDrawer.classList.remove('open');
    }
});

function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.classList.add('sidebar-open');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.classList.remove('sidebar-open');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) closeSidebar();
    else openSidebar();
}

// ===== SCROLL =====
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }
    setTimeout(() => closeSidebar(), 350);
}

function updateActiveNav() {
    const navSectionMap = {
        'hero': ['hero'],
        'products-section': ['products-section'],
        'courses-section': ['courses-section'],
        'sellers': ['sellers'],
        'contact': ['contact', 'affiliate']
    };
    const sections = Object.keys(navSectionMap);
    const scrollY = window.scrollY + 200;
    let current = 'hero';
    for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            if (top <= scrollY) current = id;
        }
    }
    const activeIds = new Set(navSectionMap[current] || ['hero']);
    document.querySelectorAll('.sidebar-nav a').forEach(a => {
        const onclick = a.getAttribute('onclick') || '';
        const match = [...activeIds].some(id => onclick.includes("'" + id + "'"));
        a.classList.toggle('active', match);
    });
}

let navTicking = false;
window.addEventListener('scroll', () => {
    if (!navTicking) {
        requestAnimationFrame(() => { updateActiveNav(); navTicking = false; });
        navTicking = true;
    }
}, { passive: true });

// ===== TOAST =====
function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== NOTIFICATION ENGINE =====
const notifNames = ["Sarah K.", "Brian T.", "Grace M.", "Daniel O.", "Faith N.", "Michael J.", "Patricia A.", "John D.", "Esther W.", "David L."];
const notifLocations = ["Kampala", "Entebbe", "Jinja", "Gulu", "Mbarara", "Kira", "Wakiso"];
const notifProducts = products.map(p => p.name);

const reviewTexts = [
    "ChatGPT Plus delivered instantly! Works perfectly 🔥",
    "Got my Netflix account in 2 minutes. Amazing service!",
    "Claude Pro is incredible. Best AI investment I've made!",
    "Midjourney account working flawlessly. Creating amazing art!",
    "Spotify Premium for a whole year at this price? Unreal!",
];

const orderTexts = ["just purchased", "ordered", "bought", "got"];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickTime() {
    const mins = Math.floor(Math.random() * 59) + 1;
    return mins < 2 ? 'just now' : `${mins} min ago`;
}

function spawnNotification() {
    const area = document.getElementById('notification-area');
    if (!area) return;
    
    const types = ['review', 'order'];
    const type = pick(types);
    const name = pick(notifNames);
    const loc = pick(notifLocations);
    const product = pick(notifProducts);
    const time = pickTime();
    
    let icon, iconClass, title, text;
    
    if (type === 'review') {
        icon = 'fa-star'; iconClass = 'review';
        title = `${name} left a 5-star review`;
        text = pick(reviewTexts);
    } else {
        icon = 'fa-bag-shopping'; iconClass = 'order';
        title = `${name} ${pick(orderTexts)} ${product}`;
        text = `📍 ${loc} • ${time}`;
    }
    
    const notif = document.createElement('div');
    notif.className = 'notification-popup';
    notif.innerHTML = `
        <div class="notif-icon ${iconClass}"><i class="fas ${icon}"></i></div>
        <div class="notif-body">
            <div class="notif-title">${title}</div>
            <div class="notif-text">${text}</div>
            <div class="notif-time">${time}</div>
        </div>
        <button class="notif-close" onclick="this.parentElement.remove()"><i class="fas fa-xmark"></i></button>`;
    
    area.appendChild(notif);
    
    const all = area.querySelectorAll('.notification-popup');
    if (all.length > 3) all[0].remove();
    
    setTimeout(() => {
        if (notif.parentNode) {
            notif.classList.add('removing');
            setTimeout(() => notif.remove(), 400);
        }
    }, 6000);
}

function startNotificationEngine() {
    setTimeout(() => spawnNotification(), 3000);
    function scheduleNext() {
        const delay = Math.floor(Math.random() * 15000) + 10000;
        setTimeout(() => {
            spawnNotification();
            scheduleNext();
        }, delay);
    }
    scheduleNext();
}

// ===== v6.0 — APP-STYLE UPGRADE =====

// Extra categories for the row
categories.push(
    { id:"ai-tools", name:"AI Tools", emoji:"🧠", color:"from-violet-600 to-purple-600", icon:"fa-wand-magic-sparkles", image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=150&fit=crop" },
    { id:"productivity", name:"Productivity", emoji:"📝", color:"from-teal-600 to-cyan-600", icon:"fa-list-check", image:"https://images.unsplash.com/photo-1455390582262-044cdead3037?w=200&h=150&fit=crop" }
);

// ===== CATEGORY ROW =====
function renderCategoryRow() {
    const row = document.getElementById('cat-row');
    if (!row) return;
    row.innerHTML = categories.map(c => {
        const count = c.id === 'all' ? products.length : products.filter(p => p.category === c.id).length;
        return `<div class="cat-row-card ${currentCategory === c.id ? 'active' : ''}" onclick="setCategory('${c.id}')">
            <span class="crc-emoji">${c.emoji}</span>
            <span class="crc-name">${c.name}</span>
            <span class="crc-count">${count} items</span>
        </div>`;
    }).join('');
}

// ===== FEATURED (hand-picked top 4) =====
function renderFeatured() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    const feats = [...products].sort((a, b) => (b.rating * b.sold) - (a.rating * a.sold)).slice(0, 4);
    grid.innerHTML = feats.map((p, i) => productCardHTML(p, i)).join('');
}

// ===== QUICK DEALS (biggest discounts) =====
function renderQuickDeals() {
    const grid = document.getElementById('quick-deals-grid');
    if (!grid) return;
    const deals = [...products]
        .map(p => ({ ...p, disc: p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0 }))
        .sort((a, b) => b.disc - a.disc).slice(0, 6);
    grid.innerHTML = deals.map((p, i) => productCardHTML(p, i)).join('');
}

// ===== HOT DEALS (best sellers, horizontal) =====
function renderHotDeals() {
    const row = document.getElementById('hot-deals-row');
    if (!row) return;
    const hot = [...products].sort((a, b) => b.sold - a.sold).slice(0, 8);
    row.innerHTML = hot.map((p, i) => productCardHTML(p, i)).join('');
}

// ===== TRENDING CHIP SEARCH =====
function trendSearch(q) {
    const input = document.getElementById('search-input');
    if (input) { input.value = q; filterProducts(q); }
    scrollToSection('products-section');
}

// ===== BOTTOM NAV =====
function bnGo(tab) {
    document.querySelectorAll('.bn-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    if (tab === 'home') scrollToSection('hero');
    if (tab === 'shop') scrollToSection('categories-section');
    if (tab === 'community') scrollToSection('community');
}

function openAccountSheet() {
    document.getElementById('account-sheet').classList.add('open');
    document.getElementById('sheet-overlay').classList.add('open');
}
function closeAccountSheet() {
    document.getElementById('account-sheet').classList.remove('open');
    document.getElementById('sheet-overlay').classList.remove('open');
}

// Sync cart badge on bottom nav (patch updateCartUI)
function syncBnCart() {
    const badge = document.getElementById('bn-cart-badge');
    if (!badge) return;
    const count = cart.reduce((s, c) => s + c.quantity, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
}
const _origUpdateCartUI = updateCartUI;
updateCartUI = function () { _origUpdateCartUI(); syncBnCart(); };

// Keep category row active state in sync (patch setCategory)
const _origSetCategory = setCategory;
setCategory = function (cat) { _origSetCategory(cat); renderCategoryRow(); };

// Bottom nav scroll-spy
window.addEventListener('scroll', () => {
    const comm = document.getElementById('community');
    let tab = window.scrollY < 300 ? 'home' : 'shop';
    if (comm && comm.getBoundingClientRect().top < window.innerHeight / 2) tab = 'community';
    document.querySelectorAll('.bn-btn').forEach(b => {
        if (['home', 'shop', 'community'].includes(b.dataset.tab))
            b.classList.toggle('active', b.dataset.tab === tab);
    });
}, { passive: true });

// ===== STATS COUNT-UP =====
function initCountUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('[data-count]');
                counters.forEach(counter => {
                    const target = parseFloat(counter.dataset.count);
                    const isFloat = target % 1 !== 0;
                    let current = 0;
                    const increment = target / 40;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = isFloat ? current.toFixed(1) : Math.floor(current) + (target >= 100 ? '+' : '');
                    }, 40);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.stats-row').forEach(el => observer.observe(el));
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;
    
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    const hoverElements = document.querySelectorAll('a, button, .product-card, .course-card, .value-card, .stat-card, .cat-thumb');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    
    document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
}

// ===== DARK/LIGHT MODE =====
function toggleMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('mode-icon');
    const isLight = document.body.classList.contains('light-mode');
    if (icon) icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function initMode() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.body.classList.add('light-mode');
        const icon = document.getElementById('mode-icon');
        if (icon) icon.className = 'fas fa-sun';
    }
}

// ===== TOP PICKS =====
function renderTopPick() {
    const container = document.getElementById('top-pick-card');
    if (!container) return;
    
    // Get the featured product (highest rating + sales)
    const topPick = [...products].sort((a, b) => (b.rating * b.sold) - (a.rating * a.sold))[0];
    const discount = topPick.originalPrice ? Math.round(((topPick.originalPrice - topPick.price) / topPick.originalPrice) * 100) : 0;
    
    container.innerHTML = `
        <div class="pick-image">
            <img src="${topPick.image}" alt="${topPick.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(topPick.name)}'">
            <span class="pick-badge"><i class="fas fa-fire"></i> Today's Pick</span>
        </div>
        <div class="pick-content">
            <span class="pick-tag"><i class="fas fa-bolt"></i> Instant Delivery</span>
            <h3>${topPick.name}</h3>
            <p class="pick-desc">${topPick.description}</p>
            <div class="pick-meta">
                <div class="meta-item"><i class="fas fa-star"></i> ${topPick.rating} (${topPick.reviews} reviews)</div>
                <div class="meta-item"><i class="fas fa-box"></i> ${topPick.sold} sold</div>
                <div class="meta-item"><i class="fas fa-shield-halved"></i> Lifetime Warranty</div>
            </div>
            <div class="pick-price">
                UGX ${topPick.price.toLocaleString()}
                ${topPick.originalPrice ? `<span class="original">UGX ${topPick.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="pick-actions">
                <button class="btn-slide-primary" onclick="addToCart(products.find(x=>x.id===${topPick.id}))"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                <a href="https://wa.me/256775374095?text=Hi! I want: ${encodeURIComponent(topPick.name)} (UGX ${topPick.price.toLocaleString()})" class="btn-slide-outline" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
        </div>`;
}

// ===== RECENTLY ADDED =====
function renderRecentlyAdded() {
    const grid = document.getElementById('recently-added-grid');
    if (!grid) return;
    
    // Get the 4 newest products (by ID descending)
    const recent = [...products].sort((a, b) => b.id - a.id).slice(0, 4);
    grid.innerHTML = recent.map((p, i) => productCardHTML(p, i)).join('');
}

// ===== COMMUNITY REQUESTS =====
const communityRequests = [
    { id: 1, user: "Grace M.", location: "Kampala", text: "Looking for ChatGPT Plus with GPT-4 Turbo access. Need it for my research work.", time: "2 hours ago", replies: 5, avatar: "#7000ff", whatsapp: "256775123456" },
    { id: 2, user: "Daniel O.", location: "Entebbe", text: "Anyone selling Midjourney accounts with fast mode? I'm a designer and need it for client work.", time: "4 hours ago", replies: 3, avatar: "#00d4ff", whatsapp: "256775234567" },
    { id: 3, user: "Faith N.", location: "Kampala", text: "Need Netflix Premium 4K with 5 screens for family sharing. Looking for long-term subscription.", time: "6 hours ago", replies: 8, avatar: "#fbbf24", whatsapp: "256775345678" },
    { id: 4, user: "Brian T.", location: "Jinja", text: "Looking for TikTok Monetization course. Want to learn how to grow and earn from my account.", time: "8 hours ago", replies: 4, avatar: "#4ade80", whatsapp: "256775456789" },
    { id: 5, user: "Esther W.", location: "Kampala", text: "Anyone have Claude Pro accounts? Need it for coding and research. Prefer 3+ months subscription.", time: "12 hours ago", replies: 6, avatar: "#f472b6", whatsapp: "256775567890" },
];

function renderCommunity() {
    const container = document.getElementById('community-requests');
    if (!container) return;
    
    container.innerHTML = communityRequests.map(r => `
        <div class="community-request-card">
            <div class="request-header">
                <div class="request-user">
                    <div class="request-avatar" style="background:${r.avatar}">${r.user.charAt(0)}</div>
                    <div class="request-user-info">
                        <div class="name">${r.user}</div>
                        <div class="location"><i class="fas fa-map-marker-alt"></i> ${r.location}</div>
                    </div>
                </div>
                <div class="request-time">${r.time}</div>
            </div>
            <div class="request-text">${r.text}</div>
            <div class="request-footer">
                <div class="request-stats">
                    <span class="stat"><i class="fas fa-comment"></i> ${r.replies} replies</span>
                    <span class="stat"><i class="fas fa-eye"></i> ${Math.floor(Math.random() * 50) + 20} views</span>
                </div>
                <a href="https://wa.me/${r.whatsapp}?text=Hi ${r.user}! I can help with your request: ${encodeURIComponent(r.text)}" class="btn-have-this" target="_blank">
                    <i class="fas fa-hand-holding-heart"></i> I have this
                </a>
            </div>
        </div>`).join('');
}

function openPostModal() {
    document.getElementById('post-modal').classList.add('open');
}

function closePostModal(e) {
    const modal = document.getElementById('post-modal');
    if (!modal) return;
    if (e && e.target && e.target !== modal) return;
    modal.classList.remove('open');
}

function submitPost() {
    const text = document.getElementById('post-text').value.trim();
    const location = document.getElementById('post-location').value;
    const whatsapp = document.getElementById('post-whatsapp').value.trim();
    
    if (!text) {
        showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Please describe what you need');
        return;
    }
    if (!whatsapp) {
        showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Please enter your WhatsApp number');
        return;
    }
    
    // Add to community requests
    communityRequests.unshift({
        id: Date.now(),
        user: "You",
        location: location,
        text: text,
        time: "just now",
        replies: 0,
        avatar: "#7000ff",
        whatsapp: whatsapp
    });
    
    // Clear form
    document.getElementById('post-text').value = '';
    document.getElementById('post-whatsapp').value = '';
    
    // Re-render and close modal
    renderCommunity();
    closePostModal();
    showToast('<i class="fas fa-check-circle" style="color:#4ade80"></i> Request posted! Sellers will contact you on WhatsApp.');
    
    // Scroll to community section
    scrollToSection('community');
}

// ===== ENHANCED SELLERS (with followers) =====
const enhancedSellers = sellers.map((s, i) => ({
    ...s,
    followers: Math.floor(Math.random() * 200) + 50,
    listings: Math.floor(Math.random() * 15) + 5
}));

function renderEnhancedSellers() {
    const list = document.getElementById('seller-list');
    if (!list) return;
    
    const sorted = [...enhancedSellers].sort((a, b) => a.rank - b.rank);
    list.innerHTML = sorted.map(s => {
        const tierClass = s.tier === 'diamond' ? 'diamond' : s.tier === 'platinum' ? 'platinum' : 'gold';
        const waNum = '256775374095';
        return `
        <div class="seller-card">
            <div class="rank-badge ${tierClass}"><i class="fas fa-crown"></i></div>
            <img src="${s.avatar}" alt="${s.name}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'">
            <div class="seller-info">
                <div class="name-row">
                    <span class="name">${s.name}</span>
                    ${s.verified ? '<span class="verified"><i class="fas fa-badge-check"></i> Verified</span>' : ''}
                </div>
                <div class="location"><i class="fas fa-location-dot"></i> ${s.location}</div>
                <div class="seller-stats">
                    <span class="stat"><i class="fas fa-star" style="color:#fbbf24"></i> ${s.rating}</span>
                    <span class="stat listings"><i class="fas fa-box"></i> ${s.listings} listings</span>
                    <span class="stat followers"><i class="fas fa-users"></i> ${s.followers} followers</span>
                </div>
            </div>
            <a href="https://wa.me/${waNum}?text=Hi ${s.name}! I'm interested in your products on Rattle Empire" class="btn-contact" target="_blank"><i class="fab fa-whatsapp"></i> Contact</a>
        </div>`;
    }).join('');
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
    initMode();
    renderCategories();
    renderProducts();
    renderCourses();
    renderSellers();
    updateCartUI();
    startCarousel();
    startNotificationEngine();
    initCountUp();
    initCustomCursor();
    updateActiveNav();
});
