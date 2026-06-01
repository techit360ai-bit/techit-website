/* TECHIT Network — landing interactions
   No dependencies. Progressive enhancement: page is fully readable without JS. */
(function () {
  "use strict";

  /* ── Nav: solid background once scrolled ───────────────────── */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu toggle ────────────────────────────────────── */
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  var closeMenu = function () {
    mobile.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", function () {
    var open = mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // close the menu after tapping any link inside it
  mobile.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ── Scroll-reveal via IntersectionObserver ────────────────── */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just show everything
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ── Update footer year automatically (kept as 2026 fallback) ─ */
  // (Static 2026 in markup is fine; no dynamic date needed.)
})();
