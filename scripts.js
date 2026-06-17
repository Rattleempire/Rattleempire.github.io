// ===== RATTLE EMPIRE v3.0 — scripts.js =====

// ===== PRODUCT DATA =====
const products = [
    { id:1, name:"iPhone X 256GB", price:850000, originalPrice:1200000, category:"electronics", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.8, reviews:12, sold:45, featured:true, image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" },
    { id:2, name:"HP EliteBook G3", price:1200000, originalPrice:1800000, category:"electronics", condition:"Very Good", seller:"Shawn", sellerLoc:"Entebbe", rating:4.6, reviews:8, sold:32, featured:true, image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop" },
    { id:3, name:'Samsung 4K TV 55"', price:1500000, originalPrice:2200000, category:"electronics", condition:"Good", seller:"Derrick", sellerLoc:"Kampala", rating:4.9, reviews:15, sold:28, featured:true, image:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop" },
    { id:5, name:"MacBook Pro 2019", price:2800000, originalPrice:4500000, category:"electronics", condition:"Very Good", seller:"Shawn", sellerLoc:"Entebbe", rating:4.5, reviews:10, sold:22, featured:false, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" },
    { id:6, name:"MacBook Pro 2019", price:2800000, originalPrice:4500000, category:"electronics", condition:"Very Good", seller:"Shawn", sellerLoc:"Entebbe", rating:4.5, reviews:10, sold:22, featured:false, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" },
    { id:8, name:"iPad Air 4", price:950000, originalPrice:1400000, category:"electronics", condition:"Excellent", seller:"Shawn", sellerLoc:"Entebbe", rating:4.7, reviews:9, sold:35, featured:true, image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop" },
    { id:10, name:"AirPods Pro", price:250000, originalPrice:450000, category:"electronics", condition:"Mint", seller:"Shawn", sellerLoc:"Entebbe", rating:4.9, reviews:14, sold:55, featured:true, image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop" },
    { id:13, name:"AirPods Pro 2nd Gen", price:350000, originalPrice:550000, category:"electronics", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.9, reviews:28, sold:120, featured:true, image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop" },
    { id:14, name:"Samsung Galaxy Buds2 Pro", price:180000, originalPrice:280000, category:"electronics", condition:"Like New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.8, reviews:16, sold:75, featured:true, image:"https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=300&fit=crop" },
    { id:15, name:"Apple Watch Series 9", price:1200000, originalPrice:1800000, category:"electronics", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.9, reviews:22, sold:65, featured:true, image:"https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=400&h=300&fit=crop" },
    { id:16, name:"Anker 20W Fast Charger", price:45000, originalPrice:75000, category:"electronics", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.7, reviews:35, sold:200, featured:true, image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop" },
    { id:17, name:"UGREEN USB-C Hub 7-in-1", price:120000, originalPrice:180000, category:"electronics", condition:"New", seller:"Derrick", sellerLoc:"Kampala", rating:4.6, reviews:18, sold:90, featured:false, image:"https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=300&fit=crop" },
    { id:18, name:"PopSockets Swappable", price:25000, originalPrice:45000, category:"electronics", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.5, reviews:42, sold:350, featured:true, image:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop" },
    { id:19, name:'Ring Light 10" with Tripod', price:65000, originalPrice:100000, category:"electronics", condition:"New", seller:"Derrick", sellerLoc:"Kampala", rating:4.7, reviews:25, sold:150, featured:true, image:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop" },
    { id:20, name:"Wireless Charger Pad", price:55000, originalPrice:90000, category:"electronics", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.6, reviews:30, sold:180, featured:true, image:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" },
    { id:21, name:"Phone Case Premium Set", price:35000, originalPrice:60000, category:"electronics", condition:"New", seller:"Derrick", sellerLoc:"Kampala", rating:4.4, reviews:55, sold:420, featured:true, image:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop" },
    { id:22, name:"Samsung 65W Super Fast Charger", price:150000, originalPrice:220000, category:"electronics", condition:"Excellent", seller:"Shawn", sellerLoc:"Entebbe", rating:4.8, reviews:12, sold:55, featured:false, image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop" },
    { id:23, name:"JBL Clip 4 Bluetooth Speaker", price:180000, originalPrice:280000, category:"electronics", condition:"Very Good", seller:"Derrick", sellerLoc:"Kampala", rating:4.7, reviews:20, sold:85, featured:true, image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop" },
    { id:24, name:"Anker PowerCore 26800mAh", price:160000, originalPrice:250000, category:"electronics", condition:"Excellent", seller:"Shawn", sellerLoc:"Entebbe", rating:4.9, reviews:38, sold:160, featured:true, image:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop" },
    { id:25, name:"Google Pixel Buds A-Series", price:95000, originalPrice:150000, category:"electronics", condition:"Like New", seller:"Derrick", sellerLoc:"Kampala", rating:4.5, reviews:11, sold:48, featured:false, image:"https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=300&fit=crop" },
    { id:26, name:"USB-C to Lightning Cable 2m", price:18000, originalPrice:30000, category:"electronics", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.3, reviews:60, sold:500, featured:true, image:"https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id:27, name:"Car Phone Mount Magnetic", price:40000, originalPrice:70000, category:"electronics", condition:"New", seller:"Derrick", sellerLoc:"Kampala", rating:4.6, reviews:28, sold:220, featured:true, image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=300&fit=crop" },
    { id:28, name:"Fitbit Charge 6 Fitness Band", price:420000, originalPrice:650000, category:"electronics", condition:"Very Good", seller:"Shawn", sellerLoc:"Entebbe", rating:4.7, reviews:15, sold:40, featured:false, image:"https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&h=300&fit=crop" },
    { id:29, name:"Sony WH-1000XM5 Headphones", price:1800000, originalPrice:2800000, category:"electronics", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.9, reviews:30, sold:95, featured:true, image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
    { id:30, name:"Selfie Stick with Remote", price:30000, originalPrice:55000, category:"electronics", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.4, reviews:22, sold:175, featured:true, image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop" },
    // Furniture Starter
    { id:4, name:"Modern Fabric Sofa", price:450000, originalPrice:750000, category:"furniture", tier:"starter", condition:"Excellent", seller:"Shawn", sellerLoc:"Entebbe", rating:4.7, reviews:14, sold:38, featured:true, image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
    { id:50, name:"Wooden Coffee Table", price:180000, originalPrice:320000, category:"furniture", tier:"starter", condition:"Like New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.5, reviews:10, sold:28, featured:true, image:"https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&h=300&fit=crop" },
    { id:51, name:"Ergonomic Office Chair", price:250000, originalPrice:420000, category:"furniture", tier:"starter", condition:"Very Good", seller:"Derrick", sellerLoc:"Kampala", rating:4.6, reviews:18, sold:45, featured:true, image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop" },
    { id:52, name:"Floating Wall Shelves (Set of 3)", price:120000, originalPrice:200000, category:"furniture", tier:"starter", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.4, reviews:22, sold:55, featured:true, image:"https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=400&h=300&fit=crop" },
    { id:53, name:"Minimalist Bed Frame", price:320000, originalPrice:520000, category:"furniture", tier:"starter", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.5, reviews:12, sold:30, featured:true, image:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop" },
    { id:54, name:"Round Dining Table", price:380000, originalPrice:600000, category:"furniture", tier:"starter", condition:"Very Good", seller:"Shawn", sellerLoc:"Entebbe", rating:4.6, reviews:8, sold:20, featured:true, image:"https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop" },
    { id:55, name:"Accent Armchair", price:220000, originalPrice:380000, category:"furniture", tier:"starter", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.7, reviews:15, sold:40, featured:true, image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop" },
    { id:56, name:"Storage Ottoman Bench", price:140000, originalPrice:240000, category:"furniture", tier:"starter", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.3, reviews:20, sold:48, featured:false, image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
    { id:7, name:"Gaming Chair Pro X", price:350000, originalPrice:600000, category:"furniture", tier:"starter", condition:"Very Good", seller:"Derrick", sellerLoc:"Kampala", rating:4.3, reviews:7, sold:20, featured:false, image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop" },
    // Furniture Elite
    { id:57, name:"Italian Leather Sectional", price:3200000, originalPrice:4800000, category:"furniture", tier:"elite", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:8, sold:12, featured:true, image:"https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=400&h=300&fit=crop" },
    { id:58, name:"Marble Top Dining Table", price:2800000, originalPrice:4200000, category:"furniture", tier:"elite", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.9, reviews:6, sold:8, featured:true, image:"https://images.unsplash.com/photo-1611486212557-88be5ff027dc?w=400&h=300&fit=crop" },
    { id:59, name:"Velvet Chaise Lounge", price:2100000, originalPrice:3500000, category:"furniture", tier:"elite", condition:"Mint", seller:"Shawn", sellerLoc:"Entebbe", rating:4.9, reviews:10, sold:15, featured:true, image:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop" },
    { id:60, name:"Solid Oak King Bed", price:2500000, originalPrice:3800000, category:"furniture", tier:"elite", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.8, reviews:7, sold:10, featured:true, image:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop" },
    { id:61, name:"Designer Bar Cabinet", price:1800000, originalPrice:2800000, category:"furniture", tier:"elite", condition:"Very Good", seller:"Shawn", sellerLoc:"Entebbe", rating:4.7, reviews:9, sold:14, featured:true, image:"https://images.unsplash.com/photo-1551298698-66b830a4d3d9?w=400&h=300&fit=crop" },
    { id:62, name:"Handcrafted Teak Desk", price:1500000, originalPrice:2400000, category:"furniture", tier:"elite", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:4.8, reviews:11, sold:18, featured:true, image:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop" },
    { id:63, name:"Modular Corner Sofa", price:3800000, originalPrice:5500000, category:"furniture", tier:"elite", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:5, sold:6, featured:true, image:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&fit=crop" },
    { id:64, name:"Crystal Chandelier Dining Set", price:4500000, originalPrice:7000000, category:"furniture", tier:"elite", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:4, sold:3, featured:true, image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop" },
    // Luxury Downtown
    { id:100, name:"Rolex Submariner", price:5500000, originalPrice:8000000, category:"luxury", tier:"downtown", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:14, sold:18, featured:true, image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop" },
    { id:101, name:"Louis Vuitton Keepall Bandoulière", price:4200000, originalPrice:6500000, category:"luxury", tier:"downtown", condition:"Excellent", seller:"Shawn", sellerLoc:"Entebbe", rating:4.9, reviews:10, sold:12, featured:true, image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" },
    { id:102, name:"Dior Sauvage EDP 100ml", price:680000, originalPrice:950000, category:"luxury", tier:"downtown", condition:"Brand New", seller:"Derrick", sellerLoc:"Kampala", rating:4.8, reviews:15, sold:25, featured:false, image:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop" },
    { id:103, name:"YSL Wallet Monogram", price:380000, originalPrice:550000, category:"luxury", tier:"downtown", condition:"Like New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.7, reviews:9, sold:14, featured:false, image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop" },
    { id:104, name:"Versace Silk Scarf", price:280000, originalPrice:450000, category:"luxury", tier:"downtown", condition:"New", seller:"Derrick", sellerLoc:"Kampala", rating:4.6, reviews:6, sold:8, featured:false, image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop" },
    { id:105, name:"Tudor Black Bay 58", price:6500000, originalPrice:9000000, category:"luxury", tier:"downtown", condition:"Excellent", seller:"Shawn", sellerLoc:"Entebbe", rating:4.9, reviews:6, sold:5, featured:true, image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop" },
    // Luxury Tycoon
    { id:110, name:"Patek Philippe Nautilus", price:18000000, originalPrice:28000000, category:"luxury", tier:"tycoon", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:3, sold:2, featured:true, image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop" },
    { id:111, name:"Birkin Bag Limited Edition", price:12000000, originalPrice:20000000, category:"luxury", tier:"tycoon", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:5, sold:3, featured:true, image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop" },
    { id:112, name:"Audemars Piguet Royal Oak", price:15000000, originalPrice:22000000, category:"luxury", tier:"tycoon", condition:"Excellent", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:4, sold:2, featured:true, image:"https://images.unsplash.com/photo-1627037558426-c2d07beda3af?w=400&h=300&fit=crop" },
    { id:113, name:"Gucci Dionysus GG Supreme", price:6800000, originalPrice:9500000, category:"luxury", tier:"tycoon", condition:"Excellent", seller:"Shawn", sellerLoc:"Entebbe", rating:4.9, reviews:7, sold:5, featured:true, image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop" },
    { id:114, name:"Cartier Love Bracelet 18K", price:9500000, originalPrice:15000000, category:"luxury", tier:"tycoon", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:3, sold:1, featured:true, image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop" },
    { id:115, name:"Hermès Kelly 28 Bag", price:22000000, originalPrice:32000000, category:"luxury", tier:"tycoon", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:2, sold:1, featured:true, image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop" },
    { id:116, name:"Tiffany & Co. Diamond Necklace", price:16000000, originalPrice:25000000, category:"luxury", tier:"tycoon", condition:"Mint", seller:"Derrick", sellerLoc:"Kampala", rating:5.0, reviews:2, sold:1, featured:true, image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop" },
    // Tigertec
    { id:12, name:"Tigertec Power Bank", price:85000, originalPrice:150000, category:"tigertec", condition:"New", seller:"Shawn", sellerLoc:"Entebbe", rating:4.8, reviews:20, sold:80, featured:true, image:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop" },
];

const academyResources = [
    { id:"sci-hub", name:"Sci-Hub", desc:"Free access to 88M+ research papers & books. No paywalls.", emoji:"🔬", color:"from-blue-600 to-indigo-700", url:"https://sci-hub.al", tag:"Research", image:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop" },
    { id:"justwatch", name:"JustWatch", desc:"Find where any movie or show streams. Netflix, Prime, Disney+ & more.", emoji:"🎬", color:"from-red-600 to-pink-600", url:"https://justwatch.com", tag:"Entertainment", image:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop" },
    { id:"elicit", name:"Elicit", desc:"AI research assistant. Summarize papers, find insights, extract data.", emoji:"🤖", color:"from-violet-600 to-purple-700", url:"https://elicit.com", tag:"AI Research", image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop" },
    { id:"annas", name:"Anna's Archive", desc:"Search engine for shadow libraries. 140M+ books & papers.", emoji:"📚", color:"from-amber-600 to-orange-600", url:"https://annasarchive.org", tag:"Library", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" },
    { id:"zlibrary", name:"Z-Library", desc:"World's largest ebook library. 12M+ books free to download.", emoji:"📖", color:"from-emerald-600 to-green-700", url:"https://z-lib.org", tag:"Ebooks", image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop" },
    { id:"coursera", name:"Coursera", desc:"Free courses from Stanford, Google, IBM & 300+ universities.", emoji:"🎓", color:"from-cyan-600 to-blue-600", url:"https://coursera.org", tag:"Courses", image:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop" },
    { id:"khan", name:"Khan Academy", desc:"Free world-class education for anyone, anywhere. Math, science, coding.", emoji:"🧠", color:"from-green-600 to-teal-600", url:"https://khanacademy.org", tag:"Education", image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop" },
    { id:"github", name:"GitHub", desc:"Open source code hosting. Explore millions of projects & learn.", emoji:"💻", color:"from-gray-700 to-gray-900", url:"https://github.com", tag:"Coding", image:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop" },
];

const academyCourses = [
    { id:"cyber-1", title:"Cybersecurity Fundamentals", desc:"Learn ethical hacking, network security, penetration testing & how to protect yourself online.", level:"Beginner", lessons:24, emoji:"🛡️", color:"from-red-500 to-orange-500" },
    { id:"cyber-2", title:"Advanced Penetration Testing", desc:"Master Kali Linux, Metasploit, social engineering & real-world red team techniques.", level:"Advanced", lessons:36, emoji:"🔓", color:"from-red-700 to-rose-600" },
    { id:"tiktok-1", title:"TikTok Monetization Mastery", desc:"Grow from 0 to 100K followers. Algorithm hacks, content strategy & brand deals.", level:"Beginner", lessons:18, emoji:"📱", color:"from-pink-500 to-rose-500" },
    { id:"tiktok-2", title:"TikTok Shop & Dropshipping", desc:"Build a TikTok Shop empire. Product sourcing, viral ads & conversion optimization.", level:"Intermediate", lessons:22, emoji:"🛒", color:"from-fuchsia-500 to-pink-500" },
    { id:"ai-1", title:"AI Tools & ChatGPT Mastery", desc:"10x your productivity with AI. Prompt engineering, automation & side hustles.", level:"Beginner", lessons:16, emoji:"🤖", color:"from-violet-500 to-purple-500" },
    { id:"code-1", title:"Web Development Bootcamp", desc:"HTML, CSS, JavaScript, React & Node.js. Build real projects from scratch.", level:"Beginner", lessons:48, emoji:"💻", color:"from-blue-500 to-cyan-500" },
    { id:"crypto-1", title:"Cryptocurrency & DeFi", desc:"Understand blockchain, trading strategies, DeFi protocols & NFT fundamentals.", level:"Intermediate", lessons:20, emoji:"₿", color:"from-yellow-500 to-amber-500" },
    { id:"osint-1", title:"OSINT & Digital Investigation", desc:"Open source intelligence gathering. Trace anyone, verify info & investigate like a pro.", level:"Intermediate", lessons:14, emoji:"🔍", color:"from-emerald-500 to-green-600" },
];

const sellers = [
    { name:"Derrick", location:"Kampala", rank:1, sales:150, rating:4.9, verified:true, specialty:"Electronics & Luxury" },
    { name:"Shawn", location:"Entebbe", rank:2, sales:120, rating:4.8, verified:true, specialty:"Electronics & Furniture" },
    { name:"Trevor", location:"Kampala", rank:3, sales:85, rating:4.7, verified:true, specialty:"CEO — Management" },
    { name:"Alexus", location:"Kampala", rank:4, sales:200, rating:4.9, verified:true, specialty:"CEO — MrGoViral SMM" },
    { name:"Becca", location:"Kampala", rank:5, sales:60, rating:4.6, verified:true, specialty:"Operations" },
];

const categories = [
    { id:"all", name:"All", emoji:"🔥", color:"from-purple-600 to-indigo-600", icon:"fa-border-all", image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop" },
    { id:"electronics", name:"Electronics", emoji:"📱", color:"from-blue-600 to-cyan-600", icon:"fa-mobile-screen", image:"https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=200&h=150&fit=crop" },
    { id:"furniture", name:"Furniture", emoji:"🛋️", color:"from-amber-600 to-orange-600", icon:"fa-couch", image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=150&fit=crop" },
    { id:"luxury", name:"Luxury", emoji:"💎", color:"from-yellow-500 to-amber-500", icon:"fa-gem", image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200&h=150&fit=crop" },
    { id:"academy", name:"Academy", emoji:"🎓", color:"from-green-600 to-emerald-600", icon:"fa-graduation-cap", image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=150&fit=crop" },
    { id:"tigertec", name:"Tigertec", emoji:"⚡", color:"from-violet-600 to-purple-600", icon:"fa-bolt", image:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=150&fit=crop" },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('rattle_cart') || '[]');
let currentCategory = 'all';
let currentSort = 'random';
let carouselIndex = 0;
let carouselInterval;

function saveCart() { localStorage.setItem('rattle_cart', JSON.stringify(cart)); }

// ===== INIT =====
// (init moved to bottom of file to include all new features)

// ===== CAROUSEL =====
function startCarousel() {
    carouselInterval = setInterval(() => {
        carouselMove(1);
    }, 6000);
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
    container.innerHTML = categories.map(c => {
        let count;
        if (c.id === 'all') count = products.length + academyResources.length + academyCourses.length;
        else if (c.id === 'academy') count = academyResources.length + academyCourses.length;
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
    const tierStarter = document.getElementById('tier-starter');
    const tierElite = document.getElementById('tier-elite');
    const tierDowntown = document.getElementById('tier-downtown');
    const tierTycoon = document.getElementById('tier-tycoon');
    const starterGrid = document.getElementById('starter-grid');
    const eliteGrid = document.getElementById('elite-grid');
    const downtownGrid = document.getElementById('downtown-grid');
    const tycoonGrid = document.getElementById('tycoon-grid');
    const allContainer = document.getElementById('all-grid-container');

    let filtered = currentCategory === 'all' ? [...products] : products.filter(p => p.category === currentCategory);

    if (currentSort === 'random') filtered = shuffle(filtered);
    else if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (currentSort === 'newest') filtered.sort((a, b) => b.id - a.id);

    const heading = document.getElementById('products-heading');
    if (currentCategory === 'all') {
        heading.innerHTML = '<i class="fas fa-fire"></i> 🎲 Fresh Picks';
    } else {
        const cat = categories.find(c => c.id === currentCategory);
        heading.innerHTML = `<i class="fas ${cat.icon}"></i> ${cat.emoji} ${cat.name}`;
    }

    const hasFurnitureTiers = filtered.some(p => p.tier === 'starter' || p.tier === 'elite');
    const hasLuxuryTiers = filtered.some(p => p.tier === 'downtown' || p.tier === 'tycoon');

    if (hasFurnitureTiers) {
        allContainer.style.display = 'none';
        tierDowntown.style.display = 'none';
        tierTycoon.style.display = 'none';
        const starters = filtered.filter(p => p.tier === 'starter');
        const elites = filtered.filter(p => p.tier === 'elite');
        if (starters.length > 0) { tierStarter.style.display = 'block'; starterGrid.innerHTML = starters.map((p,i) => cardHTML(p,i)).join(''); }
        else { tierStarter.style.display = 'none'; }
        if (elites.length > 0) { tierElite.style.display = 'block'; eliteGrid.innerHTML = eliteCardHTML(elites); }
        else { tierElite.style.display = 'none'; }
    } else if (hasLuxuryTiers) {
        allContainer.style.display = 'none';
        tierStarter.style.display = 'none';
        tierElite.style.display = 'none';
        const downtowns = filtered.filter(p => p.tier === 'downtown');
        const tycoons = filtered.filter(p => p.tier === 'tycoon');
        if (downtowns.length > 0) { tierDowntown.style.display = 'block'; downtownGrid.innerHTML = downtownCardHTML(downtowns); }
        else { tierDowntown.style.display = 'none'; }
        if (tycoons.length > 0) { tierTycoon.style.display = 'block'; tycoonGrid.innerHTML = tycoonCardHTML(tycoons); }
        else { tierTycoon.style.display = 'none'; }
    } else {
        tierStarter.style.display = 'none';
        tierElite.style.display = 'none';
        tierDowntown.style.display = 'none';
        tierTycoon.style.display = 'none';
        allContainer.style.display = 'block';
        grid.innerHTML = filtered.map((p,i) => cardHTML(p,i)).join('');
    }
}

function starsHTML(rating) {
    let html = '';
    for (let s = 1; s <= 5; s++) {
        html += `<i class="fas fa-star ${s <= Math.round(rating) ? '' : 'empty'}"></i>`;
    }
    return html;
}

function cardHTML(p, i) {
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    return `
    <div class="product-card" style="animation-delay:${i * 0.05}s">
        <div class="card-img" onclick="openProductModal(${p.id})">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(p.name)}'">
            ${discount > 0 ? `<span class="badge-discount">-${discount}%</span>` : ''}
            ${p.featured ? '<span class="badge-hot"><i class="fas fa-fire"></i> Hot</span>' : ''}
            <span class="condition-tag">${p.condition}</span>
        </div>
        <div class="card-body">
            <h3>${p.name}</h3>
            <div class="stars">${starsHTML(p.rating)}<span>(${p.reviews})</span></div>
            <div class="price-row">
                <span class="price">UGX ${p.price.toLocaleString()}</span>
                ${p.originalPrice ? `<span class="original">UGX ${p.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="meta"><i class="fas fa-location-dot"></i> ${p.sellerLoc} <span style="margin:0 4px">•</span> <i class="fas fa-user"></i> ${p.seller} <span style="margin:0 4px">•</span> <span class="sold-badge"><i class="fas fa-box"></i> ${p.sold} sold</span></div>
            <div class="card-actions">
                <button class="btn-add" onclick="addToCart(products.find(x=>x.id===${p.id}))"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                <a class="btn-wa" href="https://wa.me/256775374095?text=Hi! I'm interested in ${encodeURIComponent(p.name)} (UGX ${p.price.toLocaleString()})"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </div>`;
}

function eliteCardHTML(items) {
    return items.map((p,i) => {
        const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
        return `
        <div class="product-card" style="animation-delay:${i * 0.08}s;border-color:rgba(251,191,36,0.2)">
            <div class="card-img" onclick="openProductModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(p.name)}'">
                ${discount > 0 ? `<span class="badge-discount">-${discount}%</span>` : ''}
                <span class="badge-tier elite"><i class="fas fa-crown"></i> Elite</span>
                <span class="condition-tag">${p.condition}</span>
            </div>
            <div class="card-body">
                <h3>${p.name}</h3>
                <div class="stars">${starsHTML(p.rating)}<span>(${p.reviews})</span></div>
                <div class="price-row">
                    <span class="price" style="background:linear-gradient(135deg,#fbbf24,#d97706);-webkit-background-clip:text;background-clip:text;color:transparent;">UGX ${p.price.toLocaleString()}</span>
                    ${p.originalPrice ? `<span class="original">UGX ${p.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="meta"><i class="fas fa-location-dot"></i> ${p.sellerLoc} <span style="margin:0 4px">•</span> <i class="fas fa-user"></i> ${p.seller} <span style="margin:0 4px">•</span> <span class="sold-badge"><i class="fas fa-box"></i> ${p.sold} sold</span></div>
                <div class="card-actions">
                    <button class="btn-add" style="background:linear-gradient(135deg,#fbbf24,#d97706);color:#000;" onclick="addToCart(products.find(x=>x.id===${p.id}))"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    <a class="btn-wa" href="https://wa.me/256775374095?text=Hi! I'm interested in ${encodeURIComponent(p.name)}"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>`;
    }).join('');
}

function downtownCardHTML(items) {
    return items.map((p,i) => {
        const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
        return `
        <div class="product-card" style="animation-delay:${i * 0.06}s;border-color:rgba(6,182,212,0.2)">
            <div class="card-img" onclick="openProductModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(p.name)}'">
                ${discount > 0 ? `<span class="badge-discount">-${discount}%</span>` : ''}
                <span class="badge-tier downtown"><i class="fas fa-city"></i> Downtown</span>
                <span class="condition-tag">${p.condition}</span>
            </div>
            <div class="card-body">
                <h3>${p.name}</h3>
                <div class="stars">${starsHTML(p.rating)}<span>(${p.reviews})</span></div>
                <div class="price-row">
                    <span class="price" style="background:linear-gradient(135deg,#06b6d4,#3b82f6);-webkit-background-clip:text;background-clip:text;color:transparent;">UGX ${p.price.toLocaleString()}</span>
                    ${p.originalPrice ? `<span class="original">UGX ${p.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="meta"><i class="fas fa-location-dot"></i> ${p.sellerLoc} <span style="margin:0 4px">•</span> <i class="fas fa-user"></i> ${p.seller} <span style="margin:0 4px">•</span> <span class="sold-badge"><i class="fas fa-box"></i> ${p.sold} sold</span></div>
                <div class="card-actions">
                    <button class="btn-add" style="background:linear-gradient(135deg,#06b6d4,#3b82f6);" onclick="addToCart(products.find(x=>x.id===${p.id}))"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    <a class="btn-wa" href="https://wa.me/256775374095?text=Hi! I'm interested in ${encodeURIComponent(p.name)}"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>`;
    }).join('');
}

function tycoonCardHTML(items) {
    return items.map((p,i) => {
        const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
        return `
        <div class="product-card" style="animation-delay:${i * 0.08}s;border-color:rgba(251,191,36,0.3)">
            <div class="card-img" onclick="openProductModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/7000ff?text=${encodeURIComponent(p.name)}'">
                ${discount > 0 ? `<span class="badge-discount">-${discount}%</span>` : ''}
                <span class="badge-tier tycoon"><i class="fas fa-crown"></i> Tycoon</span>
                <span class="condition-tag">${p.condition}</span>
            </div>
            <div class="card-body">
                <h3>${p.name}</h3>
                <div class="stars">${starsHTML(p.rating)}<span>(${p.reviews})</span></div>
                <div class="price-row">
                    <span class="price" style="background:linear-gradient(135deg,#fbbf24,#d97706);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:20px;">UGX ${p.price.toLocaleString()}</span>
                    ${p.originalPrice ? `<span class="original">UGX ${p.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="meta"><i class="fas fa-location-dot"></i> ${p.sellerLoc} <span style="margin:0 4px">•</span> <i class="fas fa-user"></i> ${p.seller} <span style="margin:0 4px">•</span> <span class="sold-badge"><i class="fas fa-box"></i> ${p.sold} sold</span></div>
                <div class="card-actions">
                    <button class="btn-add" style="background:linear-gradient(135deg,#fbbf24,#d97706);color:#000;" onclick="addToCart(products.find(x=>x.id===${p.id}))"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    <a class="btn-wa" href="https://wa.me/256775374095?text=Hi! I'm interested in ${encodeURIComponent(p.name)}"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>`;
    }).join('');
}

// ===== ACADEMY =====
function renderAcademy() {
    const resourceGrid = document.getElementById('resource-grid');
    const courseGrid = document.getElementById('course-grid');

    resourceGrid.innerHTML = academyResources.map(r => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
            <div class="res-img">
                <img src="${r.image}" alt="${r.name}" loading="lazy" onerror="this.style.display='none'">
                <div class="res-emoji">${r.emoji}</div>
                <span class="res-tag">${r.tag}</span>
            </div>
            <div class="res-body">
                <h4>${r.name}</h4>
                <p>${r.desc}</p>
                <div class="explore-link">Explore <i class="fas fa-arrow-right"></i></div>
            </div>
        </a>`).join('');

    courseGrid.innerHTML = academyCourses.map(c => {
        const iconMap = {
            '🛡️': 'fa-shield-halved', '🔓': 'fa-lock-open', '📱': 'fa-mobile-screen',
            '🛒': 'fa-cart-shopping', '🤖': 'fa-robot', '💻': 'fa-code',
            '₿': 'fa-bitcoin-sign', '🔍': 'fa-magnifying-glass'
        };
        const colorMap = {
            'from-red-500 to-orange-500': '#ef4444,#f97316',
            'from-red-700 to-rose-600': '#b91c1c,#e11d48',
            'from-pink-500 to-rose-500': '#ec4899,#f43f5e',
            'from-fuchsia-500 to-pink-500': '#d946ef,#ec4899',
            'from-violet-500 to-purple-500': '#8b5cf6,#a855f7',
            'from-blue-500 to-cyan-500': '#3b82f6,#06b6d4',
            'from-yellow-500 to-amber-500': '#eab308,#f59e0b',
            'from-emerald-500 to-green-600': '#10b981,#059669'
        };
        const bgColor = colorMap[c.color] || '#7000ff,#00d4ff';
        const iconClass = iconMap[c.emoji] || 'fa-graduation-cap';
        const levelColor = c.level === 'Beginner' ? '#4ade80' : c.level === 'Advanced' ? '#f87171' : '#fbbf24';
        return `
        <div class="course-card">
            <div class="course-top">
                <div class="course-icon" style="background:linear-gradient(135deg,${bgColor});">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="course-title">
                    <h4>${c.title}</h4>
                    <span class="level" style="color:${levelColor};border-color:${levelColor}40;">${c.level} • ${c.lessons} lessons</span>
                </div>
            </div>
            <p class="course-desc">${c.desc}</p>
            <div class="course-footer">
                <span class="lessons"><i class="fas fa-book-open"></i> ${c.lessons} lessons</span>
                <span class="coming"><i class="fas fa-clock"></i> Coming Soon</span>
            </div>
        </div>`;
    }).join('');
}

function notifyMe() {
    const input = document.getElementById('notify-email');
    const toast = document.getElementById('notify-toast');
    if (!input.value.trim()) { showToast('Please enter your email or WhatsApp number'); return; }
    toast.style.display = 'block';
    input.value = '';
    showToast("✅ You're on the list! We'll notify you at launch.");
}

// ===== SELLERS =====
function renderSellers() {
    const list = document.getElementById('seller-list');
    const sorted = [...sellers].sort((a, b) => a.rank - b.rank);
    list.innerHTML = sorted.map(s => {
        const rankClass = s.rank === 1 ? 'r1' : s.rank === 2 ? 'r2' : s.rank === 3 ? 'r3' : 'r4';
        const waNum = s.name === 'Derrick' ? '256775374095' : s.name === 'Shawn' ? '256744341738' : s.name === 'Trevor' ? '256752937558' : s.name === 'Alexus' ? '256782832407' : '256703162884';
        return `
        <div class="seller-card">
            <div class="rank-badge ${rankClass}">#${s.rank}</div>
            <div class="seller-info">
                <div class="name-row">
                    <span class="name">${s.name}</span>
                    ${s.verified ? '<span class="verified"><i class="fas fa-badge-check"></i> Verified</span>' : ''}
                </div>
                <div class="location"><i class="fas fa-location-dot"></i> ${s.location} • ${s.specialty}</div>
                <div class="stats">
                    <span class="stat"><i class="fas fa-star" style="color:#fbbf24"></i> ${s.rating}</span>
                    <span class="stat"><i class="fas fa-fire" style="color:var(--empire)"></i> ${s.sales} sales</span>
                </div>
            </div>
            <a href="https://wa.me/${waNum}?text=Hi ${s.name}! I'm interested in your products on Rattle Empire" class="btn-contact"><i class="fab fa-whatsapp"></i> Contact</a>
        </div>`;
    }).join('');
}

// ===== CATEGORY & SORT =====
function setCategory(cat) {
    currentCategory = cat;
    renderCategories();
    renderProducts();
    const academySection = document.getElementById('academy');
    if (academySection) {
        if (cat === 'all' || cat === 'academy') academySection.style.display = 'block';
        else academySection.style.display = 'none';
    }
    // Scroll to products section (also closes sidebar on mobile via scrollToSection)
    scrollToSection('products-section');
}

function sortProducts(val) {
    currentSort = val;
    renderProducts();
}

function filterProducts(query) {
    const q = query.toLowerCase();
    const grid = document.getElementById('product-grid');
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.seller.toLowerCase().includes(q) ||
        p.sellerLoc.toLowerCase().includes(q)
    );
    grid.innerHTML = filtered.map((p, i) => cardHTML(p, i)).join('');
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

function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); updateCartUI(); }

function updateQuantity(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) { item.quantity += delta; if (item.quantity <= 0) removeFromCart(id); else { saveCart(); updateCartUI(); } }
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const count = cart.reduce((s, c) => s + c.quantity, 0);
    const totalPrice = cart.reduce((s, c) => s + c.price * c.quantity, 0);

    countEl.textContent = count;
    countEl.style.display = count > 0 ? 'flex' : 'none';
    totalEl.textContent = `UGX ${totalPrice.toLocaleString()}`;

    if (cart.length === 0) {
        itemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-cart-shopping" style="font-size:32px;color:#333;display:block;margin-bottom:12px;"></i>Your cart is empty</div>';
        checkoutBtn.href = '#';
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
    checkoutBtn.href = `https://wa.me/256752937558?text=Hi! I'd like to order:%0a${msg}%0a%0aTotal: UGX ${totalPrice.toLocaleString()}`;
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
        <div class="modal-details">
            <div class="detail-item"><div class="label">Condition</div><div class="value">${p.condition}</div></div>
            <div class="detail-item"><div class="label">Seller</div><div class="value">${p.seller}</div></div>
            <div class="detail-item"><div class="label">Location</div><div class="value">${p.sellerLoc}</div></div>
            <div class="detail-item"><div class="label">Category</div><div class="value" style="text-transform:capitalize;">${p.category}</div></div>
        </div>
        <div class="modal-actions">
            <button class="btn-add-modal" onclick="addToCart(products.find(x=>x.id===${p.id})); closeProductModal();"><i class="fas fa-cart-plus"></i> Add to Cart</button>
            <a class="btn-wa-modal" href="https://wa.me/256775374095?text=Hi! I'm interested in ${encodeURIComponent(p.name)} (UGX ${p.price.toLocaleString()})"><i class="fab fa-whatsapp"></i></a>
        </div>`;
    document.getElementById('product-modal').classList.add('open');
}

function closeProductModal(e) {
    // Accept both real events and programmatic calls
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    // If called from overlay click, only close if clicking the overlay itself
    if (e && e.target && e.target !== modal) return;
    modal.classList.remove('open');
}

// ===== SIDEBAR TOGGLE =====
// Close modals on Escape key
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
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('sidebar-open');
}
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('sidebar-open');
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) closeSidebar();
    else openSidebar();
}
// Close sidebar on overlay click
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) overlay.addEventListener('click', closeSidebar);
});

// ===== SCROLL =====
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }
    // Close sidebar AFTER scroll starts, with delay matching CSS transition (350ms)
    setTimeout(() => closeSidebar(), 350);
}

function showDebug(msg) {
    let dbg = document.getElementById('debug-toast');
    if (!dbg) {
        dbg = document.createElement('div');
        dbg.id = 'debug-toast';
        dbg.style.cssText = 'position:fixed;bottom:10px;left:10px;right:10px;z-index:99999;background:rgba(0,0,0,0.85);color:#0f0;font-size:12px;padding:8px 12px;border-radius:8px;font-family:monospace;max-height:60px;overflow:auto;';
        document.body.appendChild(dbg);
    }
    dbg.textContent = msg;
    dbg.style.display = 'block';
    clearTimeout(dbg._timeout);
    dbg._timeout = setTimeout(() => { dbg.style.display = 'none'; }, 5000);
}

function updateActiveNav(id) {
    document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
    const navSectionMap = {
        'hero': ['hero'],
        'products-section': ['products-section'],
        'sellers': ['sellers'],
        'academy': ['academy'],
        'contact': ['contact', 'affiliate']
    };
    for (const [sectionId, navIds] of Object.entries(navSectionMap)) {
        if (navIds.includes(id)) {
            // Find the nav link that scrolls to this section
            document.querySelectorAll('.sidebar-nav a').forEach(a => {
                if (a.getAttribute('onclick') && a.getAttribute('onclick').includes(`'${sectionId}'`)) {
                    a.classList.add('active');
                }
            });
            break;
        }
    }
}

// ===== ACTIVE NAV (IntersectionObserver — no scroll event) =====
const navSectionMap = {
    'hero': ['hero'],
    'products-section': ['products-section'],
    'academy': ['academy'],
    'sellers': ['sellers'],
    'contact': ['contact', 'affiliate']
};
function updateActiveNav() {
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
    // Build set of active section IDs (some nav items map to multiple sections)
    const activeIds = new Set(navSectionMap[current] || ['hero']);
    // Sidebar nav
    document.querySelectorAll('.sidebar-nav a').forEach(a => {
        const onclick = a.getAttribute('onclick') || '';
        const match = [...activeIds].some(id => onclick.includes("'" + id + "'"));
        a.classList.toggle('active', match);
    });
}
// Use rAF-throttled scroll for active nav (lighter than raw scroll)
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
const notifNames = [
    "Sarah K.", "Brian T.", "Grace M.", "Daniel O.", "Faith N.", "Michael J.",
    "Patricia A.", "John D.", "Esther W.", "David L.", "Martha C.", "Peter H.",
    "Joyce R.", "Samuel K.", "Diana F.", "Alex B.", "Catherine P.", "Frank I.",
    "Lillian G.", "Henry V.", "Irene S.", "Kevin Z.", "Monica Y.", "Oscar X.",
    "Rachel Q.", "Thomas U.", "Victoria E.", "William O.", "Zoe T.", "Chris M.",
    "Brenda N.", "Derrick S.", "Evelyn T.", "Felix O.", "Gloria P.", "Isaac R.",
    "Janet L.", "Kennedy M.", "Laura N.", "Martin O.", "Nancy P.", "Patrick Q."
];

const notifLocations = [
    "Kampala", "Entebbe", "Jinja", "Gulu", "Mbarara", "Kira", "Wakiso",
    "Mukono", "Kira Town", "Nsasa", "Kyanja", "Naalya", "Kireka", "Bweyogerere",
    "Kansanga", "Ntinda", "Kiwatule", "Naguru", "Kololo", "Bugolobi"
];

const notifProducts = products.map(p => p.name);

const reviewTexts = [
    "Just received my order! Amazing quality 🔥",
    "Fast delivery, exactly as described. 5 stars!",
    "Best marketplace in Uganda, hands down!",
    "The seller was super professional. Will buy again!",
    "Incredible value for money. Highly recommend!",
    "Package arrived in perfect condition. Thank you!",
    "This is my 3rd order and I'm still impressed!",
    "Quality is top-notch. Exceeded my expectations!",
    "Great communication from the seller. Smooth transaction!",
    "Love my new purchase! Already telling friends about Rattle Empire!",
    "Delivery was faster than expected. Well packaged!",
    "Authentic products, fair prices. What more could you want?",
    "The team at Rattle Empire really cares about customers!",
    "Found exactly what I was looking for. Great selection!",
    "Professional service from start to finish!"
];

const orderTexts = [
    "just placed an order for",
    "ordered",
    "purchased",
    "just bought",
    "placed an order for",
    "is buying",
    "just checked out with"
];

const deliveryTexts = [
    "Order delivered successfully to",
    "Package arrived safely in",
    "Delivery completed in",
    "Shipment received in",
    "Order fulfilled in"
];

const messageTexts = [
    "sent a message about",
    "inquired about",
    "asked for details on",
    "requested info about",
    "sent an offer for"
];

const ratingTexts = [
    "rated their purchase 5 stars",
    "gave a 5-star review",
    "left a glowing review",
    "rated 5/5 stars",
    "gave an excellent rating"
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickTime() {
    const mins = Math.floor(Math.random() * 59) + 1;
    const secs = Math.floor(Math.random() * 60);
    if (mins < 2) return `${secs} seconds ago`;
    return `${mins} min ago`;
}

function spawnNotification() {
    const area = document.getElementById('notification-area');
    if (!area) return;

    const types = ['review', 'order', 'delivery', 'message', 'rating'];
    const type = pick(types);
    const name = pick(notifNames);
    const loc = pick(notifLocations);
    const product = pick(notifProducts);
    const time = pickTime();

    let icon, iconClass, title, text;

    switch(type) {
        case 'review':
            icon = 'fa-star'; iconClass = 'review';
            title = `${name} left a review`;
            text = pick(reviewTexts);
            break;
        case 'order':
            icon = 'fa-bag-shopping'; iconClass = 'order';
            title = `${name} ${pick(orderTexts)} ${product}`;
            text = `📍 ${loc} • ${time}`;
            break;
        case 'delivery':
            icon = 'fa-truck-fast'; iconClass = 'delivery';
            title = pick(deliveryTexts) + ` ${loc}`;
            text = `${name} received their ${product}`;
            break;
        case 'message':
            icon = 'fa-comment-dots'; iconClass = 'message';
            title = `${name} ${pick(messageTexts)} ${product}`;
            text = `📍 ${loc} • ${time}`;
            break;
        case 'rating':
            icon = 'fa-star'; iconClass = 'rating';
            title = `${name} ${pick(ratingTexts)}`;
            text = `For: ${product} • 📍 ${loc}`;
            break;
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

    // Max 4 notifications at once
    const all = area.querySelectorAll('.notification-popup');
    if (all.length > 4) all[0].remove();

    // Auto-remove after 6s
    setTimeout(() => {
        if (notif.parentNode) {
            notif.classList.add('removing');
            setTimeout(() => notif.remove(), 400);
        }
    }, 6000);
}

function startNotificationEngine() {
    // First notification after 3 seconds
    setTimeout(() => spawnNotification(), 3000);
    // Then random intervals between 8-20 seconds
    function scheduleNext() {
        const delay = Math.floor(Math.random() * 12000) + 8000;
        setTimeout(() => {
            spawnNotification();
            scheduleNext();
        }, delay);
    }
    scheduleNext();
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));
}

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

// ===== TESTIMONIALS — PAGE FLIP BOOK =====
const reviewNames = [
    "Sarah K.", "Brian T.", "Grace M.", "Daniel O.", "Faith N.", "Michael J.", "Patricia A.", "John D.",
    "Esther W.", "David L.", "Martha C.", "Peter H.", "Joyce R.", "Samuel K.", "Diana F.", "Alex B.",
    "Catherine P.", "Frank I.", "Lillian G.", "Henry V.", "Irene S.", "Kevin Z.", "Monica Y.", "Oscar X.",
    "Rachel Q.", "Thomas U.", "Victoria E.", "William O.", "Zoe T.", "Chris M.", "Brenda N.", "Derrick S.",
    "Evelyn T.", "Felix O.", "Gloria P.", "Isaac R.", "Janet L.", "Kennedy M.", "Laura N.", "Martin O.",
    "Nancy P.", "Patrick Q."
];
const reviewRoles = [
    "Kampala", "Entebbe", "Jinja", "Gulu", "Mbarara", "Kira", "Wakiso", "Mukono",
    "Kira Town", "Nsasa", "Kyanja", "Naalya", "Kireka", "Bweyogerere", "Kansanga", "Ntinda",
    "Kiwatule", "Naguru", "Kololo", "Bugolobi", "Luzira", "Muyenga", "Kasubi", "Wandegeya",
    "Makerere", "Nakawa", "Kawempe", "Rubaga", "Makindye", "Bukoto", "Kisasi", "Lubowa",
    "Munyonyo", "Ggaba", "Kabojja", "Nansana", "Kira Town", "Entebbe", "Masaka", "Mbale",
    "Fort Portal", "Lira"
];
const testimonialTexts = [
    "Just received my iPhone X! Amazing quality and fast delivery. Rattle Empire is the real deal!",
    "Ordered a Samsung 4K TV, delivered the next day. The seller was super professional!",
    "Best marketplace in Uganda! Found exactly what I was looking for at a great price.",
    "MrGoViral SMM panel boosted my Instagram from 2K to 10K followers. The AI tools are insane!",
    "Quality products, fair prices, and excellent customer support. Rattle Empire never disappoints!",
    "I've ordered 3 times now and every experience has been smooth. WhatsApp checkout is so convenient!",
    "Found a beautiful Rolex Submariner at an incredible price. Authentic and certified. Love this!",
    "The affiliate program is amazing. Already earned my first commission. Easy to refer and earn!",
    "My MacBook Pro arrived in mint condition. Exactly as described. Highly recommend this platform!",
    "Fast delivery to Entebbe! The leather sofa set looks even better in person. 5 stars!",
    "Bought AirPods Pro for my daughter. She loves them! Great price compared to other shops.",
    "The HP EliteBook I ordered works perfectly. Saved me thousands compared to buying new.",
    "Rattle Empire made it so easy to find what I needed. The search feature is spot on!",
    "I was skeptical about buying luxury items online but the certification process gave me confidence.",
    "My iPad Air 4 arrived sealed and brand new. The seller communicated throughout. Thank you!",
    "The gaming chair I bought is so comfortable. My back pain is gone! Great investment.",
    "Ordered a dining table set for my new apartment. Delivery was free and setup was included!",
    "MrGoViral helped me grow my business page from 500 to 5K followers. Incredible results!",
    "The Anker power bank charges my phone 5 times on a single charge. Quality product!",
    "I love the Academy section! The free resources have helped me learn so much about tech.",
    "Bought a designer handbag for my wife's birthday. She was thrilled! Authentic and beautiful.",
    "The wireless charger pad works flawlessly. Fast charging and looks great on my desk.",
    "My Sony headphones sound amazing. Noise cancellation is top-notch. Worth every shilling!",
    "The verification process was smooth and secure. I felt safe sharing my information.",
    "I've referred 3 friends to the affiliate program and earned commission on all their purchases!",
    "The Apple Watch I bought tracks everything perfectly. Health features are incredible.",
    "Found a marble top dining table at half the price of other stores. Absolutely stunning!",
    "The customer support team resolved my issue within minutes. Very professional service!",
    "My JBL speaker is perfect for outdoor parties. Sound quality is amazing for the price!",
    "The floating wall shelves transformed my living room. Easy to install too!",
    "Bought a phone case premium set for the whole family. Great quality and fast shipping!",
    "The car phone mount is sturdy and holds my phone perfectly. No more dropping it while driving!",
    "My Fitbit fitness band helps me stay on track with health goals. Love the sleep tracking!",
    "The selfie stick with remote is perfect for group photos. Bluetooth connection is reliable!",
    "I love how Rattle Empire verifies every product. It gives me peace of mind when shopping.",
    "The velvet chaise lounge I bought is the centerpiece of my living room. Everyone compliments it!",
    "MrGoViral's TikTok growth service helped my business reach 50K views on my first viral video!",
    "The crystal chandelier dining set I ordered is absolutely breathtaking. Worth every penny!",
    "My Fitbit Charge 6 tracks everything perfectly. The battery life is incredible!",
    "The PopSockets set I bought for my kids is durable and fun. They love changing the designs!",
    "Rattle Empire's WhatsApp checkout is the smoothest online payment experience I've had in Uganda!",
    "The Italian leather sectional I ordered is the most comfortable sofa I've ever sat on!",
    "Bought a Samsung 65W super fast charger. Charges my phone from zero to full in 45 minutes!",
    "The solid oak king bed I ordered is beautifully crafted. My bedroom looks like a palace!",
    "Found a Gucci Dionysus bag at a fraction of the retail price. Authenticated and gorgeous!",
    "The MrGoViral YouTube growth service got my channel monetized in just 3 months!",
    "My Cartier Love Bracelet arrived in the original box with certificate. Stunning piece!",
    "The handcrafted teak desk is now my home office centerpiece. The craftsmanship is incredible!",
    "Bought a Tiffany diamond necklace for our anniversary. My wife couldn't believe the price!",
    "The modular corner sofa fits perfectly in my living room. Delivery team was so professional!",
    "MrGoViral's Instagram reposts feature helped me reach audiences I never thought possible!",
    "The Audemars Piguet Royal Oak I found here is a dream come true. Authenticated and perfect!",
    "My Hermès Kelly bag arrived with full documentation. I'm a customer for life!",
    "The bar cabinet I ordered stores all my bottles beautifully. My friends are all jealous!",
    "Found a Tudor Black Bay 58 at an unbeatable price. The seller was incredibly knowledgeable!",
    "The dining table with crystal chandelier transformed my entire home. Absolutely magnificent!"
];
const reviewColors = ["#00f0ff","#ff00ff","#00ff88","#ffaa00","#ff3366","#8833ff","#00ffcc","#ff6600","#33ccff","#ff0099","#66ff33","#cc00ff"];

// Fisher-Yates shuffle for unique ordering
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generateReviews() {
    // Shuffle all arrays to guarantee uniqueness
    const shuffledTexts = shuffleArray(testimonialTexts);
    const shuffledNames = shuffleArray(reviewNames);
    const shuffledRoles = shuffleArray(reviewRoles);
    const shuffledColors = shuffleArray(reviewColors);

    // Use ALL texts (54 unique reviews) — no repetition
    const count = shuffledTexts.length;
    const reviews = [];
    for (let i = 0; i < count; i++) {
        reviews.push({
            name: shuffledNames[i % shuffledNames.length] + (i >= shuffledNames.length ? " " + (Math.floor(i / shuffledNames.length) + 1) : ""),
            role: shuffledRoles[i % shuffledRoles.length],
            text: shuffledTexts[i], // Each text used exactly once
            stars: Math.random() > 0.08 ? 5 : 4,
            color: shuffledColors[i % shuffledColors.length]
        });
    }
    // Shuffle the final reviews array for random page order
    return shuffleArray(reviews);
}

let testimonials = [];
let currentTestimonial = 0;
let testimonialInterval;
let isFlipping = false;

function renderTestimonials() {
    testimonials = generateReviews();
    const track = document.getElementById('testimonial-track');
    if (!track) return;
    track.innerHTML = `
        <div class="testimonial-book" id="testimonial-book">
            <div class="book-page" id="testimonial-page">
                ${renderTestimonialCard(testimonials[0])}
            </div>
            <div class="book-controls">
                <button class="book-btn" onclick="flipTestimonial(-1)"><i class="fas fa-chevron-left"></i></button>
                <button class="book-btn" onclick="flipTestimonial(1)"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>`;
    startTestimonialAutoFlip();
}

function renderTestimonialCard(t) {
    return `
        <div class="stars">${'<i class="fas fa-star"></i>'.repeat(t.stars)}</div>
        <p class="quote">"${t.text}"</p>
        <div class="author">
            <div class="author-avatar" style="background:${t.color};">${t.name.charAt(0)}</div>
            <div class="author-info">
                <div class="author-name">${t.name}</div>
                <div class="author-role">${t.role}</div>
            </div>
        </div>`;
}

function flipTestimonial(dir) {
    if (isFlipping) return;
    const page = document.getElementById('testimonial-page');
    if (!page) return;

    isFlipping = true;
    const animClass = dir > 0 ? 'flip-forward' : 'flip-backward';
    page.classList.add(animClass);

    setTimeout(() => {
        currentTestimonial = (currentTestimonial + dir + testimonials.length) % testimonials.length;
        page.innerHTML = renderTestimonialCard(testimonials[currentTestimonial]);
        page.classList.remove(animClass);
        isFlipping = false;
    }, 600);

    startTestimonialAutoFlip();
}

function startTestimonialAutoFlip() {
    if (testimonialInterval) clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => flipTestimonial(1), 4000);
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

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .product-card, .value-card, .stat-card, .cat-thumb, .book-btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Click effect
    document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
}

// ===== PARALLAX SCROLLING =====
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.querySelectorAll('.parallax-bg').forEach(bg => {
            const speed = bg.dataset.speed || 0.3;
            bg.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }, { passive: true });
}

// ===== TEXT REVEAL / TYPING EFFECT =====
function initTextReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                el.textContent = '';
                el.classList.add('visible');

                // Split into characters and animate
                text.split('').forEach((char, i) => {
                    const span = document.createElement('span');
                    span.className = 'char';
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.transitionDelay = (i * 0.03) + 's';
                    el.appendChild(span);
                });

                // Add blinking cursor
                const cursor = document.createElement('span');
                cursor.className = 'typing-cursor';
                el.appendChild(cursor);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.text-reveal').forEach(el => observer.observe(el));
}

// ===== SCROLL REVEAL (enhanced) =====
function initScrollReveal() {
    // Only animate first 3 elements per section — rest appear instantly
    const sections = document.querySelectorAll('section, .stats-row, .value-section, .testimonial-section');
    sections.forEach(section => {
        const children = section.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
        children.forEach((el, i) => {
            if (i < 3) {
                el.classList.add('animate'); // Only first 3 get animation
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });

    document.querySelectorAll('.scroll-reveal.animate').forEach(el => observer.observe(el));
}

// ===== DARK/LIGHT MODE TOGGLE =====
function toggleMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('mode-icon');
    const isLight = document.body.classList.contains('light-mode');
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
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

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
    initMode();
    renderCategories();
    renderProducts();
    renderAcademy();
    renderSellers();
    renderTestimonials();
    updateCartUI();
    startCarousel();
    startNotificationEngine();
    initScrollAnimations();
    initScrollReveal();
    initCountUp();
    initCustomCursor();
    initParallax();
    initTextReveal();
    updateActiveNav();
});
