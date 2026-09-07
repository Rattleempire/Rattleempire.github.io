/* ============================================================
   RATTLE EMPIRE — CART PAGE LOGIC v3.0
   External file = allowed by CSP (inline scripts are blocked)
   ============================================================ */
"use strict";

(function () {
  const container = document.getElementById("cartItems");
  if (!container) return;

  let cart = JSON.parse(localStorage.getItem("rattle_cart") || "[]");

  function esc(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : String(value);
    return div.innerHTML;
  }

  function syncBadge() {
    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = cart.length;
  }

  function emptyMessage() {
    container.innerHTML = '<p style="color:var(--text-secondary);margin:0">Your cart is empty.</p>';
  }

  async function loadCartItems() {
    if (!cart.length) { emptyMessage(); return; }

    try {
      const res = await fetch("/data/products.json?v=" + Date.now());
      if (!res.ok) throw new Error(res.status);
      const products = await res.json();

      const grouped = {};
      cart.forEach(id => {
        const p = products.find(x => x.id === id) || { id: id, name: "Unknown product", price: 0 };
        if (grouped[id]) grouped[id].quantity += 1;
        else grouped[id] = Object.assign({}, p, { quantity: 1 });
      });

      const items = Object.values(grouped);
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

      let html = '<div style="display:flex;flex-direction:column;gap:4px">';
      items.forEach(i => {
        html += `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <strong>${esc(i.name)}</strong>
              <span style="color:var(--text-muted);font-size:12px;margin-left:10px">× ${i.quantity}</span>
            </div>
            <span style="font-weight:700">$${(i.price * i.quantity).toFixed(2)}</span>
          </div>`;
      });
      html += `
        <div style="display:flex;justify-content:space-between;padding-top:14px;font-size:18px;font-weight:800">
          <span>Total</span><span>$${total.toFixed(2)}</span>
        </div>
      </div>`;

      container.innerHTML = html;
    } catch (err) {
      container.innerHTML = `
        <p style="color:var(--text-secondary);margin:0">You have ${cart.length} item(s) in your cart.</p>
        <p style="color:var(--text-muted);font-size:12px;margin:6px 0 0">(Product details will appear when product data is loaded.)</p>`;
    }
  }

  const clearBtn = document.getElementById("clearCartBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      cart = [];
      localStorage.removeItem("rattle_cart");
      emptyMessage();
      syncBadge();
    });
  }

  syncBadge();
  loadCartItems();
})();
