/* ============================================================
   RATTLE EMPIRE — DEMO FORM HANDLER v3.0
   Any <form data-demo> shows a confirmation modal instead of
   navigating. Production backend will replace this later.
   ============================================================ */
"use strict";

(function () {
  document.querySelectorAll("form[data-demo]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const title = form.getAttribute("data-demo-title") || "Request received";
      const message = form.getAttribute("data-demo-message") ||
        "This form will connect to the secure backend in the production phase.";
      if (typeof openModal === "function") openModal(title, message);
      form.reset();
    });
  });
})();
