/* ============================================================
   RATTLE EMPIRE — COMMUNITY FEED v1.1
   Renders data/community.json into any container with the IDs.
   Containers may set data-limit="N" to show only N items.
   ============================================================ */
"use strict";

(function () {
  const threadsEl = document.getElementById("communityThreads");
  const requestsEl = document.getElementById("communityRequests");
  if (!threadsEl && !requestsEl) return;

  function esc(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : String(value);
    return div.innerHTML;
  }
  function limitOf(el, arr) {
    const n = parseInt(el.getAttribute("data-limit") || "0", 10);
    return n > 0 ? arr.slice(0, n) : arr;
  }

  fetch("/data/community.json?v=" + Date.now())
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then(data => {
      const onlineEl = document.getElementById("communityOnline");
      if (onlineEl) onlineEl.textContent = "● " + (data.online || 0) + " online";

      if (threadsEl) {
        threadsEl.innerHTML = limitOf(threadsEl, data.threads || []).map(t => `
          <div class="thread">
            <div class="who">${esc(t.who)} <span>• ${esc(t.time)}</span></div>
            <p>${esc(t.text)}</p>
            ${t.stars ? '<div class="stars">' + "★".repeat(Math.min(5, t.stars)) + '</div>' : ""}
          </div>`).join("");
      }

      if (requestsEl) {
        requestsEl.innerHTML = limitOf(requestsEl, data.requests || []).map(r => `
          <div class="request-row">
            <span>${esc(r.text)}</span>
            <span class="replies">${esc(r.replies)} replies</span>
          </div>`).join("");
      }
    })
    .catch(() => console.warn("Community feed not loaded — keeping static fallback."));
})();
