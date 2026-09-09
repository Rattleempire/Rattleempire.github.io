"use strict";

(function () {
  const threadsEl = document.getElementById("communityThreads");
  const requestsEl = document.getElementById("communityRequests");
  const reviewersEl = document.getElementById("communityReviewers");
  const onlineEl = document.getElementById("communityOnline");

  if (!threadsEl && !requestsEl && !reviewersEl) return; // no sidebar on this page

  function esc(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : String(value);
    return div.innerHTML;
  }

  fetch("/data/community.json?v=" + Date.now())
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then(data => {
      if (onlineEl) onlineEl.textContent = "● " + (data.online || 0) + " online";

      if (threadsEl) {
        threadsEl.innerHTML = (data.threads || []).map(t => `
          <div class="thread">
            <div class="who">${esc(t.who)} <span>• ${esc(t.time)}</span></div>
            <p>${esc(t.text)}</p>
            ${t.stars ? '<div class="stars">' + "★".repeat(Math.min(5, t.stars)) + '</div>' : ""}
          </div>
        `).join("");
      }

      if (requestsEl) {
        requestsEl.innerHTML = (data.requests || []).map(r => `
          <div class="request-row">
            <span>${esc(r.text)}</span>
            <span class="replies">${esc(r.replies)} replies</span>
          </div>
        `).join("");
      }

      if (reviewersEl) {
        reviewersEl.innerHTML = (data.reviewers || []).map(r => `
          <div class="request-row">
            <span>${esc(r.name)}</span>
            <span class="replies">${esc(r.reviews)} reviews</span>
          </div>
        `).join("");
      }
    })
    .catch(() => {
      console.warn("Community feed not loaded — keeping static fallback.");
    });
})();
