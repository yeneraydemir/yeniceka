// /assets/js/header.js
document.addEventListener("DOMContentLoaded", () => {
  /* ----------------- 1) Insert header ----------------- */
  const headerHTML = `
<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <!-- LOGO -->
      <a href="/en/" class="logo d-flex align-items-center me-auto me-xl-0">
        <img class="img-fluid" src="../assets/img/logo/ceka-bull.png" alt="Ceka Abattoir Logo">
        <h5 class="logo-text">CEKA</h5>
      </a>

      <!-- NAV -->
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="/en/">Home</a></li>
          <li><a href="about-us.html">About Us</a></li>

          <!-- Products dropdown -->
          <li class="dropdown">
            <a href="sacrificial-slaughter-products.html" class="cursor-default">
              <span>Products</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="cattle-slaughter-equipment.html">Cattle Slaughter Equipment</a></li>
              <li><a href="small-ruminant-slaughter-equipment.html">Small Ruminant Equipment</a></li>
              <li><a href="sacrificial-slaughter-hygiene-equipment.html">Hygiene Equipment</a></li>
              <li><a href="sacrificial-slaughter-deboning-equipment.html">Deboning & Packing</a></li>
            </ul>
          </li>

          <li><a href="references.html">References</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>

        <!-- Mobile menu icon -->
        <i class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="Toggle menu"></i>
      </nav>


      <div class="header-lang d-xl-flex align-items-center btn-getstarted">
        <button class="lang-btn" aria-label="Switch language to Turkish">
          <img src="../assets/img/logo/turk-bayragi.png" alt="Turkish Flag">
        </button>
        <button class="lang-btn flag-gray" aria-label="You are viewing English">
          <img src="../assets/img/logo/ingiliz-bayragi.png" alt="UK Flag">
        </button>

      </div>

    </div>
  </header>

    </div>
  </header>`;

  if (!document.querySelector("header#header")) {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  /* ----------------- 2) SEÇİCİLER ----------------- */
  const nav = document.querySelector("#navmenu");
  if (!nav) return;

  const navLinks = nav.querySelectorAll("ul li a[href]");
  const sections = document.querySelectorAll("section[id]");

  // Mobil menüyü açıp kapatan buton/ikon seçicileri
  const TOGGLE_SELECTOR = [
    ".mobile-nav-toggle",
    ".mobile-nav-close",
    ".navmenu-close",
    ".menu-close",
    ".navmenu .close",
    "[data-mobile-toggle]"
  ].join(",");

  const getAllToggles = () =>
    Array.from(document.querySelectorAll(TOGGLE_SELECTOR));

  /* ----------------- 3) MOBİL MENÜ ----------------- */
  const setMobileIcon = (open) => {
    getAllToggles().forEach((btn) => {
      const iconEl = btn.matches("i.bi")
        ? btn
        : btn.querySelector("i.bi, i[class*='bi-']") || btn;

      iconEl.classList.remove("bi-list", "bi-x", "bi-x-lg");
      iconEl.classList.add(open ? "bi-x" : "bi-list");

      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      btn.setAttribute("role", "button");
      if (!btn.hasAttribute("tabindex")) btn.setAttribute("tabindex", "0");
    });
  };

  const toggleMenu = (willOpen) => {
    // OxyHorse mantığı + CSS ile uyum için:
    nav.classList.toggle("navmenu-open", willOpen);
    document.body.classList.toggle("mobile-nav-active", willOpen); // <<< ÖNEMLİ: CSS bunu bekliyor
    setMobileIcon(willOpen);
  };

  // Tıklama ile aç/kapat
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(TOGGLE_SELECTOR);
    if (!btn) return;
    e.preventDefault();
    const willOpen = !nav.classList.contains("navmenu-open");
    toggleMenu(willOpen);
  });

  // Klavye (Enter / Space) ile aç/kapat
  document.addEventListener("keydown", (e) => {
    const btn = e.target.closest(TOGGLE_SELECTOR);
    if (!btn) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const willOpen = !nav.classList.contains("navmenu-open");
      toggleMenu(willOpen);
    }
  });

  // Sonradan eklenen ikonlar için senkron
  const mo = new MutationObserver(() => {
    setMobileIcon(nav.classList.contains("navmenu-open"));
  });
  mo.observe(document.body, { childList: true, subtree: true });

  setMobileIcon(nav.classList.contains("navmenu-open"));

/* ----------------- 4) DROPDOWN (mobil + desktop) ----------------- */
nav.querySelectorAll(".dropdown > a.cursor-default, .dropdown > a[href='#']").forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const isMobile = window.innerWidth < 1200;
    if (!isMobile) return; // desktop'ta hover ile çalışsın

    e.preventDefault();

    const parentLi = trigger.closest("li.dropdown");
    if (!parentLi) return;

    const submenu = parentLi.querySelector(":scope > ul");
    if (!submenu) return;

    // Alt menüyü aç/kapat
    const isOpen = submenu.classList.toggle("dropdown-active");

    // Oku döndür
    const arrow = trigger.querySelector(".toggle-dropdown");
    if (arrow) {
      arrow.classList.toggle("is-open", isOpen);
    }
  });
});

  /* ----------------- 5) YARDIMCI: path/slug normalize ----------------- */
  const toSlug = (pathOrHref) => {
    try {
      const u = new URL(pathOrHref, location.href);
      let seg = u.pathname.split("/").filter(Boolean).pop() || "index";
      seg = seg.replace(/\.html?$/i, "");
      return seg || "index";
    } catch {
      const raw = String(pathOrHref).split("#")[0].split("?")[0];
      let seg = raw.split("/").filter(Boolean).pop() || "index";
      seg = seg.replace(/\.html?$/i, "");
      return seg || "index";
    }
  };

  const CURRENT_SLUG = toSlug(location.pathname);
  const isHome = CURRENT_SLUG === "index";

  /* ----------------- 6) ÇOK SAYFA: aktif link ----------------- */
  function setActiveByPath() {
    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) return;

      const linkSlug = href === "/" ? "index" : toSlug(href);
      const isActive =
        (linkSlug === "index" && isHome) || linkSlug === CURRENT_SLUG;

      a.classList.toggle("active", !!isActive);
      if (isActive) {
        const parentDrop = a.closest("li.dropdown");
        parentDrop?.classList.add("dropdown-active");
        parentDrop?.closest("li.dropdown")?.classList.add("dropdown-active");
      }
    });
  }

  /* ----------------- 7) #anchor scrollspy (varsa) ----------------- */
  const HEADER_OFFSET = 100;
  function setActiveByScroll() {
    const anchorLinks = Array.from(navLinks).filter((a) =>
      (a.getAttribute("href") || "").startsWith("#")
    );
    if (anchorLinks.length === 0) return;

    let found = false;
    const y = window.pageYOffset;

    sections.forEach((sec) => {
      const top = sec.offsetTop - HEADER_OFFSET;
      const bottom = top + sec.offsetHeight;
      if (y >= top && y < bottom) {
        const id = sec.id;
        anchorLinks.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
        found = true;
      }
    });

    if (!found) {
      anchorLinks.forEach((a) => a.classList.remove("active"));
    }
  }

  /* ----------------- 8) Anchor tıklaması ----------------- */
  navLinks.forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("#")) return;

    a.addEventListener("click", (e) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      if (nav.classList.contains("navmenu-open")) {
        toggleMenu(false); // mobil menü açıksa kapat
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      navLinks.forEach((l) => l.classList.remove("active"));
      a.classList.add("active");
    });
  });

  /* ----------------- 9) İlk yükleme + olaylar ----------------- */
  setActiveByPath();
  setActiveByScroll();

  window.addEventListener("scroll", setActiveByScroll, { passive: true });
  window.addEventListener("popstate", () => {
    setActiveByPath();
    setActiveByScroll();
    if (nav.classList.contains("navmenu-open")) toggleMenu(false);
  });
});
