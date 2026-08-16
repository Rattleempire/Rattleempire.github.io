const ALERT_URL = "https://re-hook-8842.piratevillain99.workers.dev";
const ALERT_SECRET = "RE-9f3kZq-X7mW-2026";

const DEVICE = {
    isMobile: /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth < 1024,
    isTouch: 'ontouchstart' in window,
    saveData: !!(navigator.connection && (navigator.connection.saveData || /(^|\b)2g/.test(navigator.connection.effectiveType || ''))),
    lowPower: (navigator.hardwareConcurrency || 8) <= 4
};
document.body.classList.add(DEVICE.isMobile ? 'device-mobile' : 'device-desktop');
if (DEVICE.saveData || (DEVICE.isMobile && DEVICE.lowPower)) document.body.classList.add('perf-lite');

const categories = [
    { id: "all", name: "All Products", emoji: "🔥", icon: "fa-border-all" },
    { id: "chatgpt", name: "ChatGPT", emoji: "🤖", icon: "fa-robot" },
    { id: "claude", name: "Claude", emoji: "🧠", icon: "fa-brain" },
    { id: "gemini", name: "Gemini", emoji: "✨", icon: "fa-gem" },
    { id: "netflix", name: "Netflix", emoji: "🎬", icon: "fa-film" },
    { id: "spotify", name: "Spotify", emoji: "🎵", icon: "fa-music" },
    { id: "youtube", name: "YouTube", emoji: "📺", icon: "fa-youtube" },
    { id: "midjourney", name: "Midjourney", emoji: "🎨", icon: "fa-wand-magic-sparkles" },
    { id: "developer", name: "Developer", emoji: "💻", icon: "fa-code" },
    { id: "creative", name: "Creative", emoji: "🎨", icon: "fa-palette" },
    { id: "ai-tools", name: "AI Tools", emoji: "🧠", icon: "fa-wand-magic-sparkles" },
    { id: "productivity", name: "Productivity", emoji: "📝", icon: "fa-list-check" }
];

const products = [
    { id: 1, name: "ChatGPT Plus (1 Month)", price: 45000, originalPrice: 80000, category: "chatgpt", seller: "Trevor Labs", sellerLoc: "Kampala", rating: 4.9, reviews: 128, sold: 342, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=225&fit=crop", description: "Full ChatGPT Plus with GPT-4, DALL-E, voice mode & priority access." },
    { id: 2, name: "ChatGPT Plus (3 Months)", price: 120000, originalPrice: 240000, category: "chatgpt", seller: "Trevor Labs", sellerLoc: "Kampala", rating: 4.9, reviews: 89, sold: 156, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=225&fit=crop", description: "3 months of ChatGPT Plus. Save 50%." },
    { id: 3, name: "ChatGPT Plus (1 Year)", price: 420000, originalPrice: 960000, category: "chatgpt", seller: "Trevor Labs", sellerLoc: "Kampala", rating: 5.0, reviews: 45, sold: 78, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=225&fit=crop", description: "Full year of ChatGPT Plus. Best value." },
    { id: 4, name: "Claude Pro (1 Month)", price: 55000, originalPrice: 90000, category: "claude", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.8, reviews: 67, sold: 189, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=225&fit=crop", description: "Claude Pro with 200K context & Claude 3 Opus." },
    { id: 5, name: "Claude Pro (3 Months)", price: 150000, originalPrice: 270000, category: "claude", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.9, reviews: 42, sold: 95, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=225&fit=crop", description: "3 months of Claude Pro." },
    { id: 6, name: "Netflix Premium 4K (1 Month)", price: 25000, originalPrice: 50000, category: "netflix", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.7, reviews: 234, sold: 567, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=225&fit=crop", description: "Netflix Premium 4K with 4 screens." },
    { id: 7, name: "Netflix Premium 4K (3 Months)", price: 65000, originalPrice: 150000, category: "netflix", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.8, reviews: 156, sold: 389, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=225&fit=crop", description: "3 months Netflix 4K. Save 57%." },
    { id: 8, name: "Spotify Premium (1 Month)", price: 18000, originalPrice: 35000, category: "spotify", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.6, reviews: 189, sold: 423, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1611339555312-e607c835872e?w=300&h=225&fit=crop", description: "Ad-free Spotify Premium." },
    { id: 9, name: "YouTube Premium (1 Month)", price: 22000, originalPrice: 40000, category: "youtube", seller: "StreamHub", sellerLoc: "Kampala", rating: 4.7, reviews: 145, sold: 312, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=225&fit=crop", description: "YouTube Premium - ad-free + YT Music." },
    { id: 10, name: "Midjourney Basic (1 Month)", price: 35000, originalPrice: 60000, category: "midjourney", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.8, reviews: 78, sold: 167, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1633419461250-d1d1a3d1d1d1?w=300&h=225&fit=crop", description: "Midjourney Basic - 200 generations/month." },
    { id: 11, name: "Midjourney Standard (1 Month)", price: 85000, originalPrice: 150000, category: "midjourney", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.9, reviews: 56, sold: 98, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1633419461250-d1d1a3d1d1d1?w=300&h=225&fit=crop", description: "900 generations + relax mode." },
    { id: 12, name: "Adobe Creative Cloud (1 Month)", price: 180000, originalPrice: 350000, category: "creative", seller: "Creative Pro", sellerLoc: "Kampala", rating: 4.7, reviews: 34, sold: 67, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=225&fit=crop", description: "Full Adobe CC suite - 20+ apps." },
    { id: 13, name: "GitHub Copilot (1 Month)", price: 40000, originalPrice: 70000, category: "developer", seller: "DevTools Pro", sellerLoc: "Kampala", rating: 4.8, reviews: 89, sold: 145, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=300&h=225&fit=crop", description: "AI pair programmer. Writes code as you type." },
    { id: 14, name: "Cursor Pro (1 Month)", price: 55000, originalPrice: 95000, category: "developer", seller: "DevTools Pro", sellerLoc: "Kampala", rating: 4.9, reviews: 45, sold: 78, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=300&h=225&fit=crop", description: "AI-first code editor. 10x your speed." },
    { id: 15, name: "Notion Plus (1 Year)", price: 95000, originalPrice: 180000, category: "productivity", seller: "Productivity Hub", sellerLoc: "Entebbe", rating: 4.6, reviews: 67, sold: 123, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1611224923853-80b05380f1d5?w=300&h=225&fit=crop", description: "Unlimited uploads, 30-day history." },
    { id: 16, name: "Grammarly Premium (1 Year)", price: 75000, originalPrice: 150000, category: "productivity", seller: "Productivity Hub", sellerLoc: "Entebbe", rating: 4.7, reviews: 89, sold: 167, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1455390582262-044cdead3037?w=300&h=225&fit=crop", description: "Advanced suggestions & plagiarism checker." },
    { id: 17, name: "Perplexity Pro (1 Month)", price: 45000, originalPrice: 80000, category: "ai-tools", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.8, reviews: 34, sold: 56, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=225&fit=crop", description: "Unlimited pro searches, GPT-4 access." },
    { id: 18, name: "Runway ML (1 Month)", price: 65000, originalPrice: 120000, category: "creative", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.7, reviews: 28, sold: 45, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=225&fit=crop", description: "AI video generation, 100+ tools." },
    { id: 19, name: "ElevenLabs (1 Month)", price: 55000, originalPrice: 100000, category: "ai-tools", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.8, reviews: 45, sold: 78, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=225&fit=crop", description: "AI voice generation in 29 languages." },
    { id: 20, name: "Canva Pro (1 Year)", price: 85000, originalPrice: 170000, category: "creative", seller: "Creative Pro", sellerLoc: "Kampala", rating: 4.6, reviews: 123, sold: 234, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=225&fit=crop", description: "Unlimited templates, 100GB storage." },
    { id: 21, name: "Gemini Advanced (1 Month)", price: 50000, originalPrice: 90000, category: "gemini", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.8, reviews: 56, sold: 134, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=225&fit=crop", description: "Gemini Advanced - 1M token context." },
    { id: 22, name: "Grok Premium (1 Month)", price: 55000, originalPrice: 95000, category: "ai-tools", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.7, reviews: 34, sold: 67, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=225&fit=crop", description: "X AI Grok Premium." },
    { id: 23, name: "Suno AI Pro (1 Month)", price: 40000, originalPrice: 70000, category: "creative", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.7, reviews: 28, sold: 54, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=225&fit=crop", description: "Suno Pro - full songs with vocals." },
    { id: 24, name: "Leonardo AI (1 Month)", price: 45000, originalPrice: 80000, category: "midjourney", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.6, reviews: 22, sold: 41, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1633419461250-d1d1a3d1d1d1?w=300&h=225&fit=crop", description: "Game-ready art, 8500 tokens/month." },
    { id: 25, name: "CapCut Pro (1 Month)", price: 25000, originalPrice: 45000, category: "creative", seller: "Creative Pro", sellerLoc: "Kampala", rating: 4.8, reviews: 89, sold: 210, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=225&fit=crop", description: "CapCut Pro - premium effects, no watermark." },
    { id: 26, name: "Discord Nitro (1 Month)", price: 35000, originalPrice: 60000, category: "productivity", seller: "Productivity Hub", sellerLoc: "Entebbe", rating: 4.6, reviews: 45, sold: 98, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=300&h=225&fit=crop", description: "HD streaming, custom emoji anywhere." },
    { id: 27, name: "Telegram Premium (1 Year)", price: 65000, originalPrice: 120000, category: "productivity", seller: "Productivity Hub", sellerLoc: "Entebbe", rating: 4.7, reviews: 67, sold: 145, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=225&fit=crop", description: "4GB uploads, faster downloads, no ads." },
    { id: 28, name: "Zoom Pro (1 Month)", price: 50000, originalPrice: 90000, category: "productivity", seller: "Productivity Hub", sellerLoc: "Entebbe", rating: 4.5, reviews: 18, sold: 32, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=225&fit=crop", description: "30h meetings, cloud recording." },
    { id: 29, name: "Google One 2TB (1 Month)", price: 40000, originalPrice: 70000, category: "productivity", seller: "DevTools Pro", sellerLoc: "Kampala", rating: 4.7, reviews: 31, sold: 76, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=225&fit=crop", description: "2TB cloud storage." },
    { id: 30, name: "iCloud+ 200GB (1 Month)", price: 30000, originalPrice: 55000, category: "productivity", seller: "DevTools Pro", sellerLoc: "Kampala", rating: 4.6, reviews: 26, sold: 64, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=225&fit=crop", description: "iCloud+ 200GB with Private Relay." },
    { id: 31, name: "Perplexity Pro (1 Year)", price: 420000, originalPrice: 720000, category: "ai-tools", seller: "AI Masters", sellerLoc: "Kampala", rating: 4.9, reviews: 41, sold: 58, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=225&fit=crop", description: "Full year Perplexity Pro." },
    { id: 32, name: "ElevenLabs Creator (1 Month)", price: 85000, originalPrice: 150000, category: "ai-tools", seller: "AI Creators", sellerLoc: "Kampala", rating: 4.8, reviews: 33, sold: 47, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=225&fit=crop", description: "100k credits, voice cloning." },
    { id: 33, name: "Adobe CC Single App (1 Month)", price: 95000, originalPrice: 170000, category: "creative", seller: "Creative Pro", sellerLoc: "Kampala", rating: 4.6, reviews: 21, sold: 38, featured: false, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=225&fit=crop", description: "Pick one Adobe app." },
    { id: 34, name: "ChatGPT Team Seat (1 Month)", price: 95000, originalPrice: 160000, category: "chatgpt", seller: "Trevor Labs", sellerLoc: "Kampala", rating: 4.9, reviews: 19, sold: 27, featured: true, warranty: "lifetime", delivery: "instant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=225&fit=crop", description: "Higher GPT-4 limits, workspace features." }
];

const courses = [
    { id: "course-1", title: "Master ChatGPT & AI Tools", instructor: "Alexus M.", category: "AI & Automation", level: "Beginner", lessons: 24, duration: "8 hours", rating: 4.9, reviews: 234, students: 1245, price: 75000, originalPrice: 150000, bestseller: true, emoji: "🤖", brand: "openai.com", description: "Master ChatGPT, Claude, Midjourney & 20+ tools." },
    { id: "course-2", title: "TikTok Monetization Mastery", instructor: "Derrick K.", category: "Social Media", level: "Intermediate", lessons: 32, duration: "12 hours", rating: 4.8, reviews: 189, students: 892, price: 95000, originalPrice: 200000, bestseller: true, emoji: "📱", brand: "tiktok.com", description: "0 to 100K followers. Algorithm & brand deals." },
    { id: "course-3", title: "Full Stack Web Development", instructor: "Trevor Labs", category: "Programming", level: "Beginner", lessons: 64, duration: "40 hours", rating: 4.9, reviews: 156, students: 567, price: 150000, originalPrice: 300000, bestseller: true, emoji: "💻", brand: "github.com", description: "HTML, CSS, JS, React, Node.js. 5 real projects." },
    { id: "course-4", title: "Cybersecurity & Ethical Hacking", instructor: "Security Pro", category: "Cybersecurity", level: "Intermediate", lessons: 48, duration: "30 hours", rating: 4.8, reviews: 123, students: 445, price: 120000, originalPrice: 250000, bestseller: false, emoji: "🛡️", brand: "cisco.com", description: "Network security, pen-testing, Kali Linux." },
    { id: "course-5", title: "Cryptocurrency & DeFi Trading", instructor: "Crypto Master", category: "Finance", level: "Advanced", lessons: 36, duration: "18 hours", rating: 4.7, reviews: 98, students: 334, price: 95000, originalPrice: 200000, bestseller: false, emoji: "₿", brand: "coinbase.com", description: "Blockchain, trading strategies, DeFi & NFTs." },
    { id: "course-6", title: "Instagram Growth & Branding", instructor: "Social Pro", category: "Social Media", level: "Beginner", lessons: 28, duration: "10 hours", rating: 4.8, reviews: 167, students: 723, price: 65000, originalPrice: 140000, bestseller: true, emoji: "📸", brand: "instagram.com", description: "Build a 6-figure Instagram brand." },
    { id: "course-7", title: "YouTube Automation & SEO", instructor: "Video Master", category: "Social Media", level: "Intermediate", lessons: 40, duration: "20 hours", rating: 4.9, reviews: 145, students: 512, price: 85000, originalPrice: 180000, bestseller: true, emoji: "🎬", brand: "youtube.com", description: "Faceless YouTube channels. AI scripts & SEO." },
    { id: "course-8", title: "Dropshipping & E-Commerce", instructor: "Business Pro", category: "Business", level: "Beginner", lessons: 36, duration: "15 hours", rating: 4.7, reviews: 112, students: 389, price: 75000, originalPrice: 160000, bestseller: false, emoji: "🛒", brand: "shopify.com", description: "6-figure dropshipping store. Shopify & FB ads." },
    { id: "course-9", title: "Python for Data Science", instructor: "Data Pro", category: "Programming", level: "Intermediate", lessons: 52, duration: "25 hours", rating: 4.8, reviews: 89, students: 267, price: 95000, originalPrice: 200000, bestseller: false, emoji: "🐍", brand: "python.org", description: "Python, Pandas, NumPy, ML fundamentals." },
    { id: "course-10", title: "Freelancing & Remote Work", instructor: "Career Pro", category: "Business", level: "Beginner", lessons: 24, duration: "8 hours", rating: 4.9, reviews: 198, students: 845, price: 55000, originalPrice: 120000, bestseller: true, emoji: "💼", brand: "upwork.com", description: "Land $50-100/hr gigs. Upwork & Fiverr mastery." }
];

const sellers = [
    { name: "Trevor Labs", location: "Kampala", rank: 1, tier: "diamond", sales: 420, rating: 4.98, verified: true, specialty: "AI Accounts & Developer Tools", deliveryTime: "2 min", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { name: "AI Masters", location: "Kampala", rank: 2, tier: "diamond", sales: 385, rating: 4.95, verified: true, specialty: "Claude, Perplexity & AI Research", deliveryTime: "3 min", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "StreamHub", location: "Entebbe", rank: 3, tier: "platinum", sales: 1267, rating: 4.85, verified: true, specialty: "Netflix, Spotify, YouTube, Disney+", deliveryTime: "5 min", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "AI Creators", location: "Kampala", rank: 4, tier: "platinum", sales: 388, rating: 4.88, verified: true, specialty: "Midjourney, Runway, ElevenLabs", deliveryTime: "3 min", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" },
    { name: "Creative Pro", location: "Kampala", rank: 5, tier: "gold", sales: 301, rating: 4.75, verified: true, specialty: "Adobe CC, Canva & Design Tools", deliveryTime: "5 min", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face" },
    { name: "DevTools Pro", location: "Kampala", rank: 6, tier: "gold", sales: 223, rating: 4.82, verified: true, specialty: "GitHub Copilot, Cursor & Dev Tools", deliveryTime: "4 min", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
    { name: "Productivity Hub", location: "Entebbe", rank: 7, tier: "gold", sales: 290, rating: 4.72, verified: true, specialty: "Notion, Grammarly & Productivity", deliveryTime: "5 min", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
    { name: "MrGoViral SMM", location: "Kampala", rank: 8, tier: "diamond", sales: 892, rating: 4.92, verified: true, specialty: "Social Media Growth & Marketing", deliveryTime: "Instant", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" }
];

const CUSTOMER_DB = {
    "256775123456": { name: "Sarah K.", joined: "Mar 2026", orders: [ { id: "RE-1042", item: "ChatGPT Plus (1 Month)", price: 45000, date: "2026-07-14", status: "Delivered" }, { id: "RE-0921", item: "Netflix Premium 4K", price: 25000, date: "2026-06-30", status: "Delivered" } ] },
    "256775234567": { name: "Daniel O.", joined: "May 2026", orders: [ { id: "RE-1187", item: "Midjourney Standard", price: 85000, date: "2026-08-02", status: "Delivered" } ] }
};

const communityRequests = [
    { id: 1, user: "Grace M.", location: "Kampala", text: "Looking for ChatGPT Plus with GPT-4 Turbo access.", time: "2 hours ago", replies: 5, avatar: "#0ea5e9", whatsapp: "256775123456" },
    { id: 2, user: "Daniel O.", location: "Entebbe", text: "Anyone selling Midjourney accounts with fast mode?", time: "4 hours ago", replies: 3, avatar: "#22d3ee", whatsapp: "256775234567" },
    { id: 3, user: "Faith N.", location: "Kampala", text: "Need Netflix Premium 4K with 5 screens for family sharing.", time: "6 hours ago", replies: 8, avatar: "#fbbf24", whatsapp: "256775345678" },
    { id: 4, user: "Brian T.", location: "Jinja", text: "Looking for TikTok Monetization course.", time: "8 hours ago", replies: 4, avatar: "#4ade80", whatsapp: "256775456789" },
    { id: 5, user: "Esther W.", location: "Kampala", text: "Anyone have Claude Pro accounts? Prefer 3+ months.", time: "12 hours ago", replies: 6, avatar: "#38bdf8", whatsapp: "256775567890" }
];

const testimonials = [
    { name: "Sarah K.", role: "Kampala", text: "Just received my ChatGPT Plus! Amazing quality and fast delivery. Rattle Empire is the real deal!", stars: 5, color: "#22d3ee" },
    { name: "Brian T.", role: "Entebbe", text: "Best marketplace in Uganda! Found exactly what I was looking for at a great price.", stars: 5, color: "#0ea5e9" },
    { name: "Grace M.", role: "Jinja", text: "Quality products, fair prices, and excellent customer support. Never disappoints!", stars: 5, color: "#4ade80" },
    { name: "Daniel O.", role: "Kampala", text: "I've ordered 3 times now and every experience has been smooth. WhatsApp checkout is so convenient!", stars: 5, color: "#fbbf24" },
    { name: "Faith N.", role: "Gulu", text: "Midjourney account working flawlessly. Creating amazing art for my clients every day.", stars: 5, color: "#0284c7" }
];

const notifNames = ["Sarah K.", "Brian T.", "Grace M.", "Daniel O.", "Faith N.", "Michael J.", "Patricia A.", "John D.", "Esther W.", "David L."];
const notifLocations = ["Kampala", "Entebbe", "Jinja", "Gulu", "Mbarara", "Kira", "Wakiso"];
const reviewTexts = [
    "ChatGPT Plus delivered instantly! Works perfectly 🔥",
    "Got my Netflix account in 2 minutes. Amazing service!",
    "Claude Pro is incredible. Best AI investment I've made!",
    "Midjourney account working flawlessly. Creating amazing art!",
    "Spotify Premium for a whole year at this price? Unreal!"
];
const orderTexts = ["just purchased", "ordered", "bought", "got"];

let cart = JSON.parse(localStorage.getItem('rattle_cart') || '[]');
let currentCategory = 'all';
let currentSort = 'popular';
let carouselIndex = 0;
let testimonialInterval = null;
let currentTestimonial = 0;
let isFlipping = false;

function saveCart() { localStorage.setItem('rattle_cart', JSON.stringify(cart)); }
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function pickTime() { const m = Math.floor(Math.random() * 59) + 1; return m < 2 ? 'just now' : m + ' min ago'; }
function getUsers() { return JSON.parse(localStorage.getItem('re_users') || '{}'); }
function getSession() { const p = localStorage.getItem('re_session'); if (!p) return null; const u = getUsers()[p] || CUSTOMER_DB[p]; return u ? Object.assign({ phone: p }, u) : null; }
function getMyPosts() { return JSON.parse(localStorage.getItem('re_myposts') || '[]'); }
function saveMyPosts(p) { localStorage.setItem('re_myposts', JSON.stringify(p)); }

function optImg(u) { return (u && u.indexOf('images.unsplash.com') > -1) ? u + '&q=60&fm=webp&auto=format' : u; }
function brandDomain(p) {
    const n = (p.name || '').toLowerCase();
    const map = [
        ['chatgpt', 'openai.com'], ['claude', 'anthropic.com'], ['gemini', 'google.com'], ['grok', 'x.ai'],
        ['netflix', 'netflix.com'], ['spotify', 'spotify.com'], ['youtube', 'youtube.com'],
        ['midjourney', 'midjourney.com'], ['adobe', 'adobe.com'], ['canva', 'canva.com'],
        ['copilot', 'github.com'], ['cursor', 'cursor.com'], ['notion', 'notion.so'],
        ['grammarly', 'grammarly.com'], ['perplexity', 'perplexity.ai'], ['runway', 'runwayml.com'],
        ['elevenlabs', 'elevenlabs.io'], ['suno', 'suno.com'], ['leonardo', 'leonardo.ai'],
        ['capcut', 'capcut.com'], ['discord', 'discord.com'], ['telegram', 'telegram.org'],
        ['zoom', 'zoom.us'], ['icloud', 'apple.com'], ['google one', 'google.com']
    ];
    for (let i = 0; i < map.length; i++) if (n.indexOf(map[i][0]) > -1) return map[i][1];
    const cat = { chatgpt: 'openai.com', claude: 'anthropic.com', gemini: 'google.com', netflix: 'netflix.com', spotify: 'spotify.com', youtube: 'youtube.com', midjourney: 'midjourney.com', 'ai-tools': 'perplexity.ai', creative: 'canva.com', developer: 'github.com', productivity: 'notion.so' };
    return cat[p.category] || 'openai.com';
}
function logoURL(d) { return 'https://www.google.com/s2/favicons?domain=' + d + '&sz=128'; }

function starsHTML(rating) {
    let h = '';
    for (let s = 1; s <= 5; s++) h += '<i class="fas fa-star ' + (s <= Math.round(rating) ? '' : 'empty') + '"></i>';
    return h;
}

function subzeroSplash(targetEl) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const splash = document.createElement('div');
    splash.style.cssText = `
        position: fixed; left: ${rect.left + rect.width / 2}px; top: ${rect.top + rect.height / 2}px;
        width: 20px; height: 20px; background: radial-gradient(circle, #22d3ee, transparent);
        border-radius: 50%; pointer-events: none; z-index: 9999;
        transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 0 20px #22d3ee;
    `;
    document.body.appendChild(splash);
    
    const cartIcon = document.querySelector('.top-actions button[title="Cart"]') || document.getElementById('cart-count');
    const cartRect = cartIcon ? cartIcon.getBoundingClientRect() : { left: window.innerWidth - 50, top: 20 };
    
    requestAnimationFrame(() => {
        splash.style.left = `${cartRect.left}px`;
        splash.style.top = `${cartRect.top}px`;
        splash.style.width = '5px';
        splash.style.height = '5px';
        splash.style.opacity = '0';
    });
    
    setTimeout(() => splash.remove(), 600);
}

function trapFocus(element) {
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])');
    if (focusableEls.length === 0) return;
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    
    element.addEventListener('keydown', function(e) {
        let isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
        if (!isTabPressed) return;
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableEl) { lastFocusableEl.focus(); e.preventDefault(); }
        } else {
            if (document.activeElement === lastFocusableEl) { firstFocusableEl.focus(); e.preventDefault(); }
        }
    });
    setTimeout(() => firstFocusableEl.focus(), 50);
}

function tgSend(text) {
    if (!ALERT_URL) return;
    fetch(ALERT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    }).catch(() => {});
}

function testAlert() {
    tgSend('🧪 <b>TEST</b> — Rattle Empire alert pipeline working!');
    showToast('📤 Test sent — check Telegram');
}

function showToast(msg) {
    const c = document.getElementById('toast-container');
    if (!c) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = msg;
    c.appendChild(t);
    setTimeout(() => { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }, 2500);
}

function productCardHTML(p, i) {
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const emoji = (categories.find(c => c.id === p.category) || {}).emoji || '⚡';
    return '<div class="product-card" style="animation-delay:' + (i * 0.05) + 's">' +
        '<div class="card-img brand" onclick="openProductModal(' + p.id + ')">' +
        '<img src="' + logoURL(brandDomain(p)) + '" alt="' + p.name + '" loading="lazy" decoding="async" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="brand-fallback">' + emoji + '</div>' +
        (discount > 0 ? '<span class="badge-discount">-' + discount + '%</span>' : '') +
        (p.warranty === 'lifetime' ? '<span class="badge-lifetime"><i class="fas fa-shield-halved"></i> Lifetime</span>' : '') +
        '<span class="badge-verified"><i class="fas fa-badge-check"></i> Verified</span>' +
        '</div>' +
        '<div class="card-body">' +
        '<h3>' + p.name + '</h3>' +
        '<div class="stars">' + starsHTML(p.rating) + '<span>(' + p.reviews + ')</span></div>' +
        '<div class="price-row"><span class="price">UGX ' + p.price.toLocaleString() + '</span>' +
        (p.originalPrice ? '<span class="original">UGX ' + p.originalPrice.toLocaleString() + '</span>' : '') + '</div>' +
        '<div class="meta"><i class="fas fa-bolt"></i> ' + (p.delivery === 'instant' ? 'Instant' : 'Fast') + ' Delivery<span style="margin:0 4px">•</span><span class="sold-badge"><i class="fas fa-box"></i> ' + p.sold + ' sold</span></div>' +
        '<div class="card-actions">' +
        `<button class="btn-add" onclick="addToCart(products.find(x=>x.id===${p.id}), this)"><i class="fas fa-cart-plus"></i> Add to Cart</button>` +
        '<a class="btn-wa" href="https://wa.me/256775374095?text=Hi! I want to buy: ' + encodeURIComponent(p.name) + ' (UGX ' + p.price.toLocaleString() + ')" target="_blank"><i class="fab fa-whatsapp"></i></a>' +
        '</div></div></div>';
}

function renderCategoryRow() {
    const row = document.getElementById('cat-row');
    if (!row) return;
    row.innerHTML = categories.map(c => {
        const count = c.id === 'all' ? products.length : products.filter(p => p.category === c.id).length;
        return '<div class="cat-row-card ' + (currentCategory === c.id ? 'active' : '') + '" onclick="setCategory(\'' + c.id + '\')">' +
            '<span class="crc-emoji">' + c.emoji + '</span><span class="crc-name">' + c.name + '</span><span class="crc-count">' + count + ' items</span></div>';
    }).join('');
}

function renderFeatured() {
    const g = document.getElementById('featured-grid');
    if (!g) return;
    g.innerHTML = products.slice().sort((a, b) => (b.rating * b.sold) - (a.rating * a.sold)).slice(0, 4).map((p, i) => productCardHTML(p, i)).join('');
}

function renderFlashSale() {
    const r = document.getElementById('flash-row');
    if (!r) return;
    r.innerHTML = products.slice().map(p => Object.assign({}, p, { disc: p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0 })).sort((a, b) => b.disc - a.disc).slice(0, 6).map((p, i) => productCardHTML(p, i)).join('');
}

function renderQuickDeals() {
    const g = document.getElementById('quick-deals-grid');
    if (!g) return;
    g.innerHTML = products.slice().map(p => Object.assign({}, p, { disc: p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0 })).sort((a, b) => b.disc - a.disc).slice(0, 6).map((p, i) => productCardHTML(p, i)).join('');
}

function renderHotDeals() {
    const r = document.getElementById('hot-deals-row');
    if (!r) return;
    r.innerHTML = products.slice().sort((a, b) => b.sold - a.sold).slice(0, 8).map((p, i) => productCardHTML(p, i)).join('');
}

function renderProducts() {
    const g = document.getElementById('product-grid');
    if (!g) return;
    let f = currentCategory === 'all' ? products.slice() : products.filter(p => p.category === currentCategory);
    if (currentSort === 'popular') f.sort((a, b) => b.sold - a.sold);
    else if (currentSort === 'price-low') f.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') f.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') f.sort((a, b) => b.rating - a.rating);
    const h = document.getElementById('products-heading');
    if (h) {
        if (currentCategory === 'all') h.innerHTML = '<i class="fas fa-crown"></i> Premium Accounts';
        else { const c = categories.find(x => x.id === currentCategory); h.innerHTML = '<i class="fas ' + c.icon + '"></i> ' + c.emoji + ' ' + c.name; }
    }
    g.innerHTML = f.map((p, i) => productCardHTML(p, i)).join('');
}

function renderCourses() {
    const g = document.getElementById('course-grid');
    if (!g) return;
    g.innerHTML = courses.map(c => {
        return '<div class="course-card" onclick="openCourseModal(\'' + c.id + '\')">' +
            '<div class="course-img">' +
            '<img class="logo" src="' + logoURL(c.brand || 'openai.com') + '" alt="' + c.title + '" loading="lazy" decoding="async" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
            '<div class="brand-fallback">' + c.emoji + '</div>' +
            (c.bestseller ? '<span class="badge-bestseller">🔥 Bestseller</span>' : '') +
            '</div>' +
            '<div class="course-body">' +
            '<div class="course-category">' + c.category + '</div>' +
            '<h4>' + c.title + '</h4>' +
            '<div class="course-instructor"><i class="fas fa-user"></i> ' + c.instructor + '</div>' +
            '<div class="course-meta"><span><i class="fas fa-book"></i> ' + c.lessons + ' lessons</span><span><i class="fas fa-clock"></i> ' + c.duration + '</span><span><i class="fas fa-signal"></i> ' + c.level + '</span></div>' +
            '<div class="course-footer"><div class="course-price">UGX ' + c.price.toLocaleString() + (c.originalPrice ? '<span class="original">UGX ' + c.originalPrice.toLocaleString() + '</span>' : '') + '</div>' +
            '<div class="course-rating"><i class="fas fa-star"></i> ' + c.rating + ' (' + c.reviews + ')</div></div>' +
            '</div></div>';
    }).join('');
}

function renderEnhancedSellers() {
    const l = document.getElementById('seller-list');
    if (!l) return;
    const enriched = sellers.map((s, i) => Object.assign({}, s, { followers: 50 + i * 23, listings: 5 + i * 2 }));
    l.innerHTML = enriched.slice().sort((a, b) => a.rank - b.rank).map(s =>
        '<div class="seller-card">' +
        '<div class="rank-badge ' + s.tier + '"><i class="fas fa-crown"></i></div>' +
        '<img src="' + optImg(s.avatar) + '" alt="' + s.name + '" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" loading="lazy" decoding="async" onerror="this.style.display=\'none\'">' +
        '<div class="seller-info"><div class="name-row"><span class="name">' + s.name + '</span>' +
        (s.verified ? '<span class="verified"><i class="fas fa-badge-check"></i> Verified</span>' : '') + '</div>' +
        '<div class="location"><i class="fas fa-location-dot"></i> ' + s.location + '</div>' +
        '<div class="seller-stats"><span class="stat"><i class="fas fa-star" style="color:#fbbf24"></i> ' + s.rating + '</span>' +
        '<span class="stat"><i class="fas fa-box"></i> ' + s.listings + ' listings</span>' +
        '<span class="stat"><i class="fas fa-users"></i> ' + s.followers + ' followers</span></div></div>' +
        '<a href="https://wa.me/256775374095?text=Hi ' + s.name + '! I\'m interested in your products" class="btn-contact" target="_blank"><i class="fab fa-whatsapp"></i> Contact</a></div>'
    ).join('');
}

function renderCommunity() {
    const c = document.getElementById('community-requests');
    if (!c) return;
    const all = getMyPosts().map(p => Object.assign({}, p, { mine: true })).concat(communityRequests.filter(r => !r.mine));
    c.innerHTML = all.slice(0, 8).map(r =>
        '<div class="community-request-card" data-post-id="' + r.id + '"' + (r.mine ? ' style="border-color:rgba(34,211,238,0.35)"' : '') + '>' +
        '<div class="request-header"><div class="request-user"><div class="request-avatar" style="background:' + r.avatar + '">' + r.user.charAt(0) + '</div>' +
        '<div class="request-user-info"><div class="name">' + r.user + (r.mine ? ' <span style="color:#4ade80;font-size:10px">(you)</span>' : '') + '</div>' +
        '<div class="location"><i class="fas fa-map-marker-alt"></i> ' + r.location + '</div></div></div>' +
        '<div class="request-time">' + r.time + '</div></div>' +
        '<div class="request-text">' + r.text + '</div>' +
        '<div class="request-footer"><div class="request-stats"><span class="stat"><i class="fas fa-comment"></i> ' + r.replies + ' replies</span></div>' +
        '<a href="https://wa.me/' + r.whatsapp + '?text=Hi! I can help with: ' + encodeURIComponent(r.text) + '" class="btn-have-this" target="_blank"><i class="fas fa-hand-holding-heart"></i> I have this</a></div></div>'
    ).join('');
}

function renderTestimonialCard(t) {
    return '<div class="stars">' + '<i class="fas fa-star"></i>'.repeat(t.stars) + '</div>' +
        '<p class="quote">"' + t.text + '"</p>' +
        '<div class="author"><div class="author-avatar" style="background:' + t.color + '">' + t.name.charAt(0) + '</div>' +
        '<div class="author-info"><div class="author-name">' + t.name + '</div><div class="author-role">' + t.role + '</div></div></div>';
}
function renderTestimonials() {
    const t = document.getElementById('testimonial-track');
    if (!t) return;
    t.innerHTML = '<div class="testimonial-book"><div class="book-page" id="testimonial-page">' + renderTestimonialCard(testimonials[0]) + '</div>' +
        '<div class="book-controls"><button class="book-btn" onclick="flipTestimonial(-1)"><i class="fas fa-chevron-left"></i></button>' +
        '<button class="book-btn" onclick="flipTestimonial(1)"><i class="fas fa-chevron-right"></i></button></div></div>';
    startTestimonialAutoFlip();
}
function flipTestimonial(dir) {
    if (isFlipping) return;
    const page = document.getElementById('testimonial-page');
    if (!page) return;
    isFlipping = true;
    page.classList.add(dir > 0 ? 'flip-forward' : 'flip-backward');
    setTimeout(() => {
        currentTestimonial = (currentTestimonial + dir + testimonials.length) % testimonials.length;
        page.innerHTML = renderTestimonialCard(testimonials[currentTestimonial]);
        page.classList.remove('flip-forward', 'flip-backward');
        isFlipping = false;
    }, 600);
    startTestimonialAutoFlip();
}
function startTestimonialAutoFlip() {
    if (testimonialInterval) clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => { if (!document.hidden) flipTestimonial(1); }, 35000);
}

function renderAccountSheet() {
    const box = document.getElementById('account-sheet-content');
    if (!box) return;
    const s = getSession();
    if (!s) {
        box.innerHTML = '<div class="acct-profile"><div class="acct-avatar"><i class="fas fa-user"></i></div><div class="acct-name">Guest</div><div class="acct-meta">Sign in to see orders & saved details</div></div>' +
            '<button class="sheet-item" onclick="closeAccountSheet(); openLogin();"><i style="background:rgba(34,211,238,0.15);color:#22d3ee;"><i class="fas fa-right-to-bracket"></i></i> Sign In / Create Account</button>' +
            '<button class="sheet-item" onclick="closeAccountSheet(); openSellerApp();"><i style="background:rgba(251,191,36,0.15);color:#fbbf24;"><i class="fas fa-store"></i></i> Become a Seller</button>' +
            '<button class="sheet-item" onclick="toggleMode()"><i style="background:rgba(14,165,233,0.15);color:#0ea5e9;"><i class="fas fa-moon"></i></i> Dark / Light Mode</button>';
    } else {
        const orders = s.orders || [];
        box.innerHTML = '<div class="acct-profile"><div class="acct-avatar">' + s.name.charAt(0) + '</div><div class="acct-name">' + s.name + '</div><div class="acct-meta">Customer since ' + s.joined + ' • ' + orders.length + ' order' + (orders.length === 1 ? '' : 's') + '</div></div>' +
            '<div class="acct-section-title">Order History</div>' +
            (orders.length ? orders.map(o => '<div class="order-row"><span>' + o.item + '</span><span class="o-price">UGX ' + o.price.toLocaleString() + '</span><span class="o-status">' + o.status + '</span></div>').join('') : '<div class="order-row" style="color:#666">No orders yet.</div>') +
            '<div class="acct-section-title">Account</div>' +
            '<button class="sheet-item" onclick="toggleMode()"><i style="background:rgba(14,165,233,0.15);color:#0ea5e9;"><i class="fas fa-moon"></i></i> Dark / Light Mode</button>' +
            '<button class="sheet-item" onclick="closeAccountSheet(); openSellerApp();"><i style="background:rgba(251,191,36,0.15);color:#fbbf24;"><i class="fas fa-store"></i></i> Become a Seller</button>' +
            '<button class="sheet-item" onclick="testAlert()"><i style="background:rgba(34,211,238,0.15);color:#22d3ee;"><i class="fas fa-flask"></i></i> Test Telegram Alerts</button>' +
            '<button class="sheet-item" onclick="logout()"><i style="background:rgba(239,68,68,0.15);color:#ef4444;"><i class="fas fa-right-from-bracket"></i></i> Sign Out</button>';
    }
}

function setCategory(cat) {
    currentCategory = cat;
    renderCategoryRow();
    renderProducts();
    scrollToSection('products-section');
}
function sortProducts(v) { currentSort = v; renderProducts(); }
function filterProducts(q) {
    q = q.toLowerCase();
    const g = document.getElementById('product-grid');
    if (!g) return;
    g.innerHTML = products.filter(p => p.name.toLowerCase().indexOf(q) > -1 || p.category.indexOf(q) > -1 || p.seller.toLowerCase().indexOf(q) > -1 || p.description.toLowerCase().indexOf(q) > -1).map((p, i) => productCardHTML(p, i)).join('');
}
let _searchTimer;
function debouncedSearch(q) {
    const secretCmd = q.trim().toLowerCase();
    if (secretCmd === 'admin' || secretCmd === 'ops' || secretCmd === 'rattle') {
        document.getElementById('search-input').value = ''; // Clear the box
        window.location.href = 'https://dark-firefly-adc3.piratevillain99.workers.dev/';
        return;
    }
    
    clearTimeout(_searchTimer);
    _searchTimer = setTimeout(() => filterProducts(q), 200);
}
function trendSearch(q) { const i = document.getElementById('search-input'); if (i) { i.value = q; filterProducts(q); } scrollToSection('products-section'); }

function addToCart(p, btnEl) {
    const e = cart.find(c => c.id === p.id);
    if (e) e.quantity++;
    else cart.push(Object.assign({}, p, { quantity: 1 }));
    saveCart(); updateCartUI();
    subzeroSplash(btnEl);
    showToast('<i class="fas fa-check-circle" style="color:#4ade80"></i> ' + p.name + ' added to cart!');
}
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); updateCartUI(); }
function updateQuantity(id, d) {
    const i = cart.find(c => c.id === id);
    if (!i) return;
    i.quantity += d;
    if (i.quantity <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); }
}
function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const count = cart.reduce((s, c) => s + c.quantity, 0);
    const total = cart.reduce((s, c) => s + c.price * c.quantity, 0);
    if (countEl) { countEl.textContent = count; countEl.style.display = count > 0 ? 'flex' : 'none'; }
    if (totalEl) totalEl.textContent = 'UGX ' + total.toLocaleString();
    const badge = document.getElementById('bn-cart-badge');
    if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }
    if (!itemsEl) return;
    if (cart.length === 0) { itemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-cart-shopping" style="font-size:32px;color:#333;display:block;margin-bottom:12px;"></i>Your cart is empty</div>'; return; }
    itemsEl.innerHTML = cart.map(c =>
        '<div class="cart-item"><img src="' + optImg(c.image) + '" alt="' + c.name + '">' +
        '<div class="cart-item-info"><div class="item-name">' + c.name + '</div><div class="item-price">UGX ' + c.price.toLocaleString() + '</div>' +
        '<div class="qty-row"><button onclick="updateQuantity(' + c.id + ', -1)"><i class="fas fa-minus"></i></button><span>' + c.quantity + '</span><button onclick="updateQuantity(' + c.id + ', 1)"><i class="fas fa-plus"></i></button></div></div>' +
        '<button class="btn-remove" onclick="removeFromCart(' + c.id + ')"><i class="fas fa-trash"></i></button></div>'
    ).join('');
    const btn = document.getElementById('checkout-btn');
    if (btn) btn.href = 'https://wa.me/256775374095?text=Hi! I\'d like to order:%0a' + cart.map(c => c.name + ' x' + c.quantity + ' = UGX ' + (c.price * c.quantity).toLocaleString()).join('%0a') + '%0a%0aTotal: UGX ' + total.toLocaleString();
}
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    if (drawer.classList.contains('open')) trapFocus(drawer);
}

function openProductModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const emoji = (categories.find(c => c.id === p.category) || {}).emoji || '⚡';
    document.getElementById('modal-content').innerHTML =
        '<div class="modal-header"><h3>' + p.name + '</h3><button onclick="closeProductModal()"><i class="fas fa-xmark"></i></button></div>' +
        '<div class="modal-brand"><img src="' + logoURL(brandDomain(p)) + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="brand-fallback" style="position:static;font-size:52px">' + emoji + '</div></div>' +
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><div class="stars" style="display:flex;gap:2px;">' + starsHTML(p.rating) + '</div><span style="font-size:12px;color:#666;">' + p.rating + ' (' + p.reviews + ' reviews) • ' + p.sold + ' sold</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;"><span style="font-size:24px;font-weight:900;background:linear-gradient(135deg,#0284c7,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent;">UGX ' + p.price.toLocaleString() + '</span>' +
        (p.originalPrice ? '<span style="font-size:14px;color:#555;text-decoration:line-through;">UGX ' + p.originalPrice.toLocaleString() + '</span>' : '') +
        (discount > 0 ? '<span style="background:rgba(239,68,68,0.15);color:#f87171;font-size:12px;font-weight:700;padding:3px 10px;border-radius:6px;">-' + discount + '%</span>' : '') + '</div>' +
        '<p style="color:#888;font-size:13px;line-height:1.6;margin-bottom:16px;">' + p.description + '</p>' +
        '<div class="modal-details"><div class="detail-item"><div class="label">Delivery</div><div class="value">⚡ Instant</div></div>' +
        '<div class="detail-item"><div class="label">Warranty</div><div class="value">♾️ Lifetime</div></div>' +
        '<div class="detail-item"><div class="label">Seller</div><div class="value">' + p.seller + '</div></div>' +
        '<div class="detail-item"><div class="label">Category</div><div class="value" style="text-transform:capitalize;">' + p.category + '</div></div></div>' +
        '<div class="modal-actions"><button class="btn-add-modal" onclick="addToCart(products.find(x=>x.id===' + p.id + '), this); closeProductModal();"><i class="fas fa-cart-plus"></i> Add to Cart</button>' +
        '<a class="btn-wa-modal" href="https://wa.me/256775374095?text=Hi! I want to buy: ' + encodeURIComponent(p.name) + '" target="_blank"><i class="fab fa-whatsapp"></i></a></div>';
    const modal = document.getElementById('product-modal');
    modal.classList.add('open');
    trapFocus(modal.querySelector('.modal-box'));
}
function closeProductModal(e) {
    const m = document.getElementById('product-modal');
    if (!m || (e && e.target && e.target !== m)) return;
    m.classList.remove('open');
}
function openCourseModal(id) {
    const c = courses.find(x => x.id === id);
    if (!c) return;
    const discount = c.originalPrice ? Math.round(((c.originalPrice - c.price) / c.originalPrice) * 100) : 0;
    document.getElementById('modal-content').innerHTML =
        '<div class="modal-header"><h3>' + c.title + '</h3><button onclick="closeProductModal()"><i class="fas fa-xmark"></i></button></div>' +
        '<div class="modal-brand"><img src="' + logoURL(c.brand || 'openai.com') + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="brand-fallback" style="position:static;font-size:52px">' + c.emoji + '</div></div>' +
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><div class="stars" style="display:flex;gap:2px;">' + starsHTML(c.rating) + '</div><span style="font-size:12px;color:#666;">' + c.rating + ' (' + c.reviews + ' reviews) • ' + c.students + ' students</span></div>' +
        '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;"><span style="font-size:24px;font-weight:900;background:linear-gradient(135deg,#0284c7,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent;">UGX ' + c.price.toLocaleString() + '</span>' +
        (c.originalPrice ? '<span style="font-size:14px;color:#555;text-decoration:line-through;">UGX ' + c.originalPrice.toLocaleString() + '</span>' : '') +
        (discount > 0 ? '<span style="background:rgba(239,68,68,0.15);color:#f87171;font-size:12px;font-weight:700;padding:3px 10px;border-radius:6px;">-' + discount + '%</span>' : '') + '</div>' +
        '<p style="color:#888;font-size:13px;line-height:1.6;margin-bottom:16px;">' + c.description + '</p>' +
        '<div class="modal-details"><div class="detail-item"><div class="label">Instructor</div><div class="value">' + c.instructor + '</div></div>' +
        '<div class="detail-item"><div class="label">Lessons</div><div class="value">' + c.lessons + '</div></div>' +
        '<div class="detail-item"><div class="label">Duration</div><div class="value">' + c.duration + '</div></div>' +
        '<div class="detail-item"><div class="label">Level</div><div class="value">' + c.level + '</div></div></div>' +
        '<div class="modal-actions"><button class="btn-add-modal" onclick="showToast(\'<i class=\\\'fas fa-check-circle\\\' style=\\\'color:#4ade80\\\'></i> Contact us on WhatsApp to enroll.\'); closeProductModal();"><i class="fas fa-graduation-cap"></i> Enroll Now</button>' +
        '<a class="btn-wa-modal" href="https://wa.me/256775374095?text=Hi! I want to enroll in: ' + encodeURIComponent(c.title) + '" target="_blank"><i class="fab fa-whatsapp"></i></a></div>';
    const modal = document.getElementById('product-modal');
    modal.classList.add('open');
    trapFocus(modal.querySelector('.modal-box'));
}

function openPostModal() { 
    const modal = document.getElementById('post-modal');
    modal.classList.add('open'); 
    trapFocus(modal.querySelector('.modal-box'));
}
function closePostModal(e) { const m = document.getElementById('post-modal'); if (!m || (e && e.target && e.target !== m)) return; m.classList.remove('open'); }
function submitPost() {
    const text = document.getElementById('post-text').value.trim();
    const loc = document.getElementById('post-location').value;
    const wa = document.getElementById('post-whatsapp').value.trim();
    if (!text || !wa) { showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Fill all fields'); return; }
    const post = { id: Date.now(), user: (getSession() ? getSession().name : 'You'), location: loc, text, time: 'just now', replies: 0, avatar: '#22d3ee', whatsapp: wa, mine: true };
    const posts = getMyPosts(); posts.unshift(post); saveMyPosts(posts);
    communityRequests.unshift(post);
    document.getElementById('post-text').value = '';
    document.getElementById('post-whatsapp').value = '';
    renderCommunity(); closePostModal();
    showToast('<i class="fas fa-check-circle" style="color:#4ade80"></i> Request posted live!');
    tgSend('💬 <b>NEW COMMUNITY REQUEST</b>\n📍 ' + loc + '\n📞 ' + wa + '\n📝 ' + text);
    const seller = pick(sellers);
    setTimeout(() => {
        post.replies++; renderCommunity();
        showToast('<i class="fas fa-comment-dots" style="color:#4ade80"></i> 💬 ' + seller.name + ' replied to YOUR request');
    }, 15000 + Math.random() * 25000);
}

function openLogin() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('open');
    trapFocus(modal.querySelector('.modal-box'));
    const s = getSession();
    if (s) { document.getElementById('login-phone').value = s.phone; const ng = document.getElementById('login-name-group'); if (ng) ng.style.display = 'none'; }
}
function closeLogin(e) { const m = document.getElementById('login-modal'); if (!m || (e && e.target && e.target !== m)) return; m.classList.remove('open'); }
function loginSubmit() {
    const phone = document.getElementById('login-phone').value.trim();
    if (!phone) { showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Enter your WhatsApp number'); return; }
    const users = getUsers();
    let user = users[phone] || CUSTOMER_DB[phone];
    const before = getSession();
    if (!user) {
        const name = document.getElementById('login-name').value.trim();
        if (!name) { showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Enter your name to create account'); return; }
        user = { name, joined: "Aug 2026", orders: [] };
        users[phone] = user; localStorage.setItem('re_users', JSON.stringify(users));
        showToast('<i class="fas fa-check-circle" style="color:#4ade80"></i> Account created — welcome!');
    } else {
        showToast('<i class="fas fa-check-circle" style="color:#4ade80"></i> Welcome back, ' + user.name + '!');
    }
    localStorage.setItem('re_session', phone);
    closeLogin(); renderAccountSheet();
    const after = getSession();
    if (after && (!before || before.phone !== after.phone)) tgSend('👤 <b>CUSTOMER SIGNED IN</b>\n' + after.name + ' • ' + after.phone + '\n ' + (after.orders ? after.orders.length : 0) + ' past order(s)');
}
function logout() { localStorage.removeItem('re_session'); renderAccountSheet(); showToast('<i class="fas fa-right-from-bracket" style="color:#888"></i> Signed out'); }

function openAccountSheet() { renderAccountSheet(); document.getElementById('account-sheet').classList.add('open'); document.getElementById('sheet-overlay').classList.add('open'); }
function closeAccountSheet() { document.getElementById('account-sheet').classList.remove('open'); document.getElementById('sheet-overlay').classList.remove('open'); }

function openSellerApp() { 
    const modal = document.getElementById('seller-modal');
    modal.classList.add('open'); 
    trapFocus(modal.querySelector('.modal-box'));
}
function closeSellerApp(e) { const m = document.getElementById('seller-modal'); if (!m || (e && e.target && e.target !== m)) return; m.classList.remove('open'); }
function submitSellerApp() {
    const name = document.getElementById('sa-name').value.trim();
    const phone = document.getElementById('sa-phone').value.trim();
    const loc = document.getElementById('sa-location').value;
    const cat = document.getElementById('sa-category').value;
    const store = document.getElementById('sa-store').value.trim();
    const exp = document.getElementById('sa-exp').value.trim();
    if (!name || !phone || !exp) { showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Fill name, WhatsApp & experience'); return; }
    const apps = JSON.parse(localStorage.getItem('re_seller_apps') || '[]');
    apps.unshift({ name, phone, loc, cat, store, exp, date: new Date().toISOString().slice(0, 10) });
    localStorage.setItem('re_seller_apps', JSON.stringify(apps));
    tgSend('🏪 <b>SELLER APPLICATION</b>\n👤 ' + name + ' • ' + phone + '\n📍 ' + loc + ' • ' + cat + '\n🏬 ' + (store || '—') + '\n📝 ' + exp);
    closeSellerApp();
    showToast('<i class="fas fa-check-circle" style="color:#4ade80"></i> Application received! We reply within 24h.');
    window.open('https://wa.me/256775374095?text=🏪 SELLER APPLICATION%0a👤 ' + encodeURIComponent(name) + ' • ' + phone + '%0a📍 ' + loc + ' • ' + cat + '%0a%0a' + encodeURIComponent(exp), '_blank');
}

function setCoStep(n) { [1, 2, 3].forEach(i => { const el = document.getElementById('cos-' + i); if (el) el.classList.toggle('active', i <= n); }); }
function startCheckout() {
    if (cart.length === 0) { showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Your cart is empty'); return; }
    const s = getSession();
    if (s) { const n = document.getElementById('co-name'); if (n) n.value = s.name; const p = document.getElementById('co-phone'); if (p) p.value = s.phone; }
    document.getElementById('cart-items').style.display = 'none';
    document.getElementById('cart-footer').style.display = 'none';
    document.getElementById('co-success').style.display = 'none';
    document.getElementById('co-details').style.display = 'block';
    setCoStep(2);
}
function confirmOrder() {
    const name = document.getElementById('co-name').value.trim();
    const phone = document.getElementById('co-phone').value.trim();
    const payment = document.getElementById('co-payment').value;
    const delivery = document.getElementById('co-delivery').value;
    if (!name || !phone) { showToast('<i class="fas fa-exclamation-circle" style="color:#f87171"></i> Enter name & WhatsApp number'); return; }
    const orderId = 'RE-' + String(Date.now()).slice(-6);
    const total = cart.reduce((s, c) => s + c.price * c.quantity, 0);
    const users = getUsers();
    if (!users[phone]) users[phone] = { name, joined: "Aug 2026", orders: [] };
    users[phone].orders = users[phone].orders || [];
    cart.forEach(c => users[phone].orders.unshift({ id: orderId, item: c.name, price: c.price * c.quantity, date: new Date().toISOString().slice(0, 10), status: "Processing" }));
    localStorage.setItem('re_users', JSON.stringify(users));
    localStorage.setItem('re_session', phone);
    document.getElementById('co-order-id').textContent = 'Order ' + orderId + ' • ' + payment;
    document.getElementById('co-summary').textContent = cart.reduce((s, c) => s + c.quantity, 0) + ' item(s) • UGX ' + total.toLocaleString() + ' • Deliver via ' + delivery;
    document.getElementById('co-wa-link').href = 'https://wa.me/256775374095?text=🛒 NEW ORDER ' + orderId + '%0a👤 ' + encodeURIComponent(name) + ' (' + phone + ')%0a💳 ' + payment + ' • 📦 ' + delivery + '%0a%0a' + cart.map(c => '• ' + c.name + ' x' + c.quantity + ' = UGX ' + (c.price * c.quantity).toLocaleString()).join('%0a') + '%0a%0aTOTAL: UGX ' + total.toLocaleString();
    document.getElementById('co-details').style.display = 'none';
    document.getElementById('co-success').style.display = 'block';
    setCoStep(3);
    tgSend('🛒 <b>NEW ORDER ' + orderId + '</b>\n👤 ' + name + ' • ' + phone + '\n💳 ' + payment + ' • 📦 ' + delivery + '\n💰 TOTAL: UGX ' + total.toLocaleString());
    cart = []; saveCart(); updateCartUI();
}
function resetCheckout() {
    document.getElementById('co-success').style.display = 'none';
    document.getElementById('co-details').style.display = 'none';
    document.getElementById('cart-items').style.display = 'block';
    document.getElementById('cart-footer').style.display = 'block';
    setCoStep(1);
    toggleCart();
}

function initCoinHero() {
    const track = document.getElementById('carousel-track');
    if (!track || track.parentElement.classList.contains('coin-wrap')) return;
    const wrap = document.createElement('div');
    wrap.className = 'coin-wrap';
    track.parentNode.insertBefore(wrap, track);
    wrap.appendChild(track);
}
function coinFlipTo(idx) {
    const wrap = document.querySelector('.coin-wrap');
    const track = document.getElementById('carousel-track');
    if (!track) return;
    if (!wrap) { carouselIndex = idx; track.style.transform = 'translateX(-' + (idx * 100) + '%)'; return; }
    wrap.classList.add('out');
    setTimeout(() => {
        carouselIndex = idx;
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        wrap.classList.remove('out');
        wrap.classList.add('in');
        setTimeout(() => wrap.classList.remove('in'), 420);
    }, 330);
}
function startHeroEngine() { setInterval(() => { if (!document.hidden) coinFlipTo((carouselIndex + 1) % 3); }, 6000); }

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    setTimeout(() => { const sb = document.getElementById('sidebar'); if (sb && sb.classList.contains('open')) { sb.classList.remove('open'); document.getElementById('sidebar-overlay').classList.remove('open'); document.body.classList.remove('sidebar-open'); } }, 350);
}
function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebar-overlay');
    if (!sb) return;
    if (sb.classList.contains('open')) { sb.classList.remove('open'); ov.classList.remove('open'); document.body.classList.remove('sidebar-open'); }
    else { sb.classList.add('open'); ov.classList.add('open'); document.body.classList.add('sidebar-open'); }
}
function toggleMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('mode-icon');
    const isLight = document.body.classList.contains('light-mode');
    if (icon) icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
function initMode() {
    if (localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); const icon = document.getElementById('mode-icon'); if (icon) icon.className = 'fas fa-sun'; }
}
function bnGo(tab) {
    document.querySelectorAll('.bn-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    if (tab === 'home') scrollToSection('hero');
    if (tab === 'community') scrollToSection('community');
}

function spawnNotification() {
    const area = document.getElementById('notification-area');
    if (!area || document.hidden) return;
    const type = pick(['review', 'order']);
    const name = pick(notifNames);
    const loc = pick(notifLocations);
    const product = pick(products).name;
    const time = pickTime();
    let icon, iconClass, title, text;
    if (type === 'review') { icon = 'fa-star'; iconClass = 'review'; title = name + ' left a 5-star review'; text = pick(reviewTexts); }
    else { icon = 'fa-bag-shopping'; iconClass = 'order'; title = name + ' ' + pick(orderTexts) + ' ' + product; text = '📍 ' + loc + ' • ' + time; }
    const n = document.createElement('div');
    n.className = 'notification-popup';
    n.innerHTML = '<div class="notif-icon ' + iconClass + '"><i class="fas ' + icon + '"></i></div><div class="notif-body"><div class="notif-title">' + title + '</div><div class="notif-text">' + text + '</div><div class="notif-time">' + time + '</div></div><button class="notif-close" onclick="this.parentElement.remove()"><i class="fas fa-xmark"></i></button>';
    area.appendChild(n);
    if (area.querySelectorAll('.notification-popup').length > 3) area.querySelector('.notification-popup').remove();
    setTimeout(() => { if (n.parentNode) { n.classList.add('removing'); setTimeout(() => n.remove(), 400); } }, 6000);
}
function startNotificationEngine() {
    setTimeout(() => spawnNotification(), 3000);
    (function loop() { setTimeout(() => { spawnNotification(); loop(); }, Math.floor(Math.random() * 15000) + 10000); })();
}
function spawnVisitor() {
    const area = document.getElementById('notification-area');
    if (!area || document.hidden) return;
    const n = document.createElement('div');
    n.className = 'notification-popup';
    n.innerHTML = '<div class="notif-icon message"><i class="fas fa-eye"></i></div><div class="notif-body"><div class="notif-title">' + pick(notifNames) + ' is viewing</div><div class="notif-text">' + pick(products).name + '</div><div class="notif-time">just now • ' + pick(notifLocations) + '</div></div><button class="notif-close" onclick="this.parentElement.remove()"><i class="fas fa-xmark"></i></button>';
    area.appendChild(n);
    setTimeout(() => { n.classList.add('removing'); setTimeout(() => n.remove(), 400); }, 5000);
}
function startVisitorEngine() {
    (function loop() { setTimeout(() => { spawnVisitor(); loop(); }, (DEVICE.isMobile ? 35000 : 18000) + Math.random() * 20000); })();
}
function visitorPing() {
    if (sessionStorage.getItem('re_visited')) return;
    sessionStorage.setItem('re_visited', '1');
    setTimeout(() => tgSend('👀 <b>NEW VISITOR</b>\n📱 ' + (DEVICE.isMobile ? 'Mobile' : 'Desktop') + ' • ' + (navigator.language || 'en') + '\n🔗 From: ' + (document.referrer || 'Direct') + '\n🕒 ' + new Date().toLocaleString()), 1500);
}

function initCountUp() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('[data-count]').forEach(counter => {
                const target = parseFloat(counter.dataset.count);
                const isFloat = target % 1 !== 0;
                let current = 0;
                const inc = target / 40;
                const t = setInterval(() => {
                    current += inc;
                    if (current >= target) { current = target; clearInterval(t); }
                    counter.textContent = isFloat ? current.toFixed(1) : Math.floor(current) + (target >= 100 ? '+' : '');
                }, 40);
            });
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.stats-row').forEach(el => obs.observe(el));
}

function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function anim() {
        cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15;
        cursor.style.left = cx - 10 + 'px'; cursor.style.top = cy - 10 + 'px';
        requestAnimationFrame(anim);
    })();
    document.querySelectorAll('a, button, .product-card, .course-card, .value-card, .stat-card, .cat-row-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
}

function initCoursePreviews() {
    const grid = document.getElementById('course-grid');
    if (!grid || DEVICE.isTouch || DEVICE.saveData) return;
    grid.addEventListener('mouseenter', e => {
        const card = e.target.closest('.course-card');
        if (!card) return;
        const imgWrap = card.querySelector('.course-img');
        if (!imgWrap || imgWrap.querySelector('video')) return;
        const idx = Array.prototype.indexOf.call(grid.children, card);
        const v = document.createElement('video');
        v.src = ["https://cdn.pixabay.com/video/2022-06-24/121065-723121498_large.mp4", "https://cdn.pixabay.com/video/2021-08-04/83770-581058915_large.mp4", "https://cdn.pixabay.com/video/2020-08-12/47885-448212830_large.mp4"][idx % 3];
        v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
        imgWrap.appendChild(v);
    }, true);
    grid.addEventListener('mouseleave', e => {
        const card = e.target.closest('.course-card');
        if (!card) return;
        const v = card.querySelector('.course-img video');
        if (v) v.remove();
    }, true);
}

function startFlashCountdown() {
    const el = document.getElementById('flash-countdown');
    if (!el) return;
    const tick = () => {
        const now = new Date(), end = new Date(); end.setHours(23, 59, 59, 999);
        let s = Math.max(0, Math.floor((end - now) / 1000));
        el.textContent = String(Math.floor(s / 3600)).padStart(2, '0') + ':' + String(Math.floor(s % 3600 / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    };
    tick(); setInterval(tick, 1000);
}

function initRevealObserver() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
}

function applyCatalogOverrides() {
    const removed = JSON.parse(localStorage.getItem('re_removed') || '[]');
    const custom = JSON.parse(localStorage.getItem('re_custom') || '[]');
    if (removed.length) for (let i = products.length - 1; i >= 0; i--) if (removed.indexOf(products[i].id) > -1) products.splice(i, 1);
    custom.forEach(p => { if (!products.find(x => x.id === p.id)) products.push(p); });
}
applyCatalogOverrides();

(function rebuildNav() {
    const nav = document.getElementById('bottom-nav');
    if (!nav) return;
    nav.innerHTML = '<button class="bn-btn active" data-tab="home" onclick="bnGo(\'home\')"><span class="bn-icon"><i class="fas fa-home"></i></span>Home</button>' +
        '<button class="bn-btn" data-tab="community" onclick="bnGo(\'community\')"><span class="bn-icon"><i class="fas fa-comments"></i></span>Community</button>' +
        '<button class="bn-plus" onclick="openPostModal()" title="Post Request"><i class="fas fa-plus"></i></button>' +
        '<button class="bn-btn" data-tab="cart" onclick="toggleCart()"><span class="bn-icon"><i class="fas fa-cart-shopping"></i><span class="bn-badge" id="bn-cart-badge" style="display:none">0</span></span>Cart</button>' +
        '<button class="bn-btn" data-tab="account" onclick="openAccountSheet()"><span class="bn-icon"><i class="fas fa-user"></i></span>Account</button>';
})();

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12') e.preventDefault();
    if ((e.ctrlKey || e.metaKey) && ['u', 's', 'i', 'c'].indexOf(e.key.toLowerCase()) > -1) e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].indexOf(e.key.toLowerCase()) > -1) e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
    initMode();
    initCoinHero();
    initRevealObserver();
    renderCategoryRow();
    renderFeatured();
    renderFlashSale();
    renderProducts();
    updateCartUI();
    startHeroEngine();
    startFlashCountdown();
    
    const later = () => {
        renderQuickDeals();
        renderHotDeals();
        renderCourses();
        renderCommunity();
        renderEnhancedSellers();
        renderTestimonials();
        initCountUp();
        startNotificationEngine();
        startVisitorEngine();
        visitorPing();
        if (!DEVICE.isTouch && !DEVICE.saveData) initCustomCursor();
        initCoursePreviews();
    };
    
    if ('requestIdleCallback' in window) requestIdleCallback(later, { timeout: 1500 });
    else setTimeout(later, 400);
    
    fetch('catalog.json')
        .then(r => r.ok ? r.json() : null)
        .then(data => {
            if (data && Array.isArray(data)) {
                data.forEach(p => {
                    const idx = products.findIndex(x => x.id === p.id);
                    if (idx > -1) products[idx] = { ...products[idx], ...p };
                    else products.push(p);
                });
                renderProducts();
                renderFeatured();
            }
        })
        .catch(() => {});
});
