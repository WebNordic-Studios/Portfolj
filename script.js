/**
 * WebNordic Studios — interaktivitet
 * Laddare, tema, navigation, scroll-reveal, slider, formulär
 */

(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;

  /* ----- Hjälp: vänta på DOM ----- */
  function onReady(fn) {
    if (doc.readyState === "loading") {
      doc.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  /* ----- 1) Sidladdare ----- */
  function initLoader() {
    var loader = doc.getElementById("page-loader");
    if (!loader) return;

    function hide() {
      loader.classList.add("is-hidden");
      loader.setAttribute("aria-hidden", "true");
    }

    window.addEventListener("load", function () {
      setTimeout(hide, 400);
    });

    setTimeout(hide, 2500);
  }

  /* ----- 2) Dark mode ----- */
  var THEME_KEY = "webnordic-theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }

  function initTheme() {
    var stored = getStoredTheme();
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || stored === "light") {
      applyTheme(stored);
    } else if (prefersDark) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }

    var btn = doc.getElementById("theme-toggle");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {}
    });
  }

  /* ----- 3) Mobilmeny ----- */
  function initNav() {
    var toggle = doc.querySelector(".nav__toggle");
    var menu = doc.getElementById("nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- 4) Smooth scroll med offset för sticky header ----- */
  var HEADER_OFFSET = 80;

  function scrollToHash(hash) {
    if (!hash || hash === "#") return;
    var target = doc.querySelector(hash);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function initSmoothScroll() {
    doc.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var href = anchor.getAttribute("href");
        if (!href || href === "#" || href.length < 2) return;
        if (!href.startsWith("#")) return;
        var el = doc.querySelector(href);
        if (!el) return;
        e.preventDefault();
        history.pushState(null, "", href);
        scrollToHash(href);
      });
    });

    if (window.location.hash) {
      setTimeout(function () {
        scrollToHash(window.location.hash);
      }, 100);
    }
  }

  /* ----- 5) Intersection Observer — fade-in ----- */
  function initReveal() {
    var nodes = doc.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  /* ----- 6) Testimonial-slider ----- */
  function initTestimonials() {
    var track = doc.getElementById("testimonial-track");
    var prev = doc.getElementById("testimonial-prev");
    var next = doc.getElementById("testimonial-next");
    var dotsRoot = doc.getElementById("testimonial-dots");
    if (!track || !prev || !next || !dotsRoot) return;

    var slides = track.querySelectorAll(".testimonial");
    var total = slides.length;
    var index = 0;
    var autoplayId = null;

    function go(i) {
      index = (i + total) % total;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dotsRoot.querySelectorAll(".testimonials__dot").forEach(function (dot, di) {
        dot.classList.toggle("is-active", di === index);
        dot.setAttribute("aria-selected", di === index ? "true" : "false");
      });
    }

    function buildDots() {
      dotsRoot.innerHTML = "";
      for (var i = 0; i < total; i++) {
        (function (j) {
          var dot = doc.createElement("button");
          dot.type = "button";
          dot.className = "testimonials__dot" + (j === 0 ? " is-active" : "");
          dot.setAttribute("aria-label", "Citat " + (j + 1));
          dot.setAttribute("role", "tab");
          dot.setAttribute("aria-selected", j === 0 ? "true" : "false");
          dot.addEventListener("click", function () {
            go(j);
            resetAutoplay();
          });
          dotsRoot.appendChild(dot);
        })(i);
      }
    }

    function resetAutoplay() {
      if (autoplayId) clearInterval(autoplayId);
      autoplayId = setInterval(function () {
        go(index + 1);
      }, 6000);
    }

    buildDots();
    go(0);
    resetAutoplay();

    prev.addEventListener("click", function () {
      go(index - 1);
      resetAutoplay();
    });
    next.addEventListener("click", function () {
      go(index + 1);
      resetAutoplay();
    });

    doc.addEventListener("visibilitychange", function () {
      if (doc.hidden) {
        if (autoplayId) clearInterval(autoplayId);
        autoplayId = null;
      } else {
        resetAutoplay();
      }
    });
  }

  /* ----- 7) Formulärvalidering + mailto ----- */
  function isValidEmail(value) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(value).trim());
  }

  function initContactForm() {
    var form = doc.getElementById("contact-form");
    if (!form) return;

    var nameInput = doc.getElementById("name");
    var emailInput = doc.getElementById("email");
    var messageInput = doc.getElementById("message");
    var success = doc.getElementById("form-success");

    function setError(id, msg) {
      var el = doc.getElementById(id);
      var field = id.replace("-error", "");
      var input = doc.getElementById(field);
      if (el) el.textContent = msg || "";
      if (input) input.classList.toggle("is-invalid", !!msg);
    }

    function clearErrors() {
      setError("name-error", "");
      setError("email-error", "");
      setError("message-error", "");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();
      if (success) {
        success.hidden = true;
      }

      var name = nameInput ? nameInput.value.trim() : "";
      var email = emailInput ? emailInput.value.trim() : "";
      var message = messageInput ? messageInput.value.trim() : "";
      var ok = true;

      if (!name) {
        setError("name-error", "Ange ditt namn.");
        ok = false;
      }
      if (!email) {
        setError("email-error", "Ange din e-postadress.");
        ok = false;
      } else if (!isValidEmail(email)) {
        setError("email-error", "Ange en giltig e-postadress.");
        ok = false;
      }
      if (!message) {
        setError("message-error", "Skriv ett kort meddelande.");
        ok = false;
      }

      if (!ok) return;

      var subject = encodeURIComponent("Förfrågan från " + name + " — WebNordic Studios");
      var body = encodeURIComponent(
        "Namn: " + name + "\nE-post: " + email + "\n\nMeddelande:\n" + message
      );
      var mailto = "mailto:webnordicstudios@gmail.com?subject=" + subject + "&body=" + body;

      try {
        window.location.href = mailto;
      } catch (err) {}

      if (success) {
        success.hidden = false;
        success.textContent =
          "Tack! Din e-postklient öppnas med meddelandet. Vi återkommer inom 24 timmar.";
      }
      form.reset();
    });
  }

  /* ----- 8) År i footer ----- */
  function initYear() {
    var y = doc.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  onReady(function () {
    initLoader();
    initTheme();
    initNav();
    initSmoothScroll();
    initReveal();
    initTestimonials();
    initContactForm();
    initYear();
  });
})();
