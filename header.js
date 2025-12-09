// Türkçe header.js
document.addEventListener("DOMContentLoaded", () => {
  /* ----------------- 0) DİL ve SAYFA HARİTASI ----------------- */
  const CURRENT_LANG = "tr";

  const LANGS = {
    tr: { code: "tr", base: "/" },
    en: { code: "en", base: "/en/" }
    // ileride: de: { code: "de", base: "/de/" } vb.
  };

  const LANG_CODES = Object.keys(LANGS);

  // Tek bir "pageKey" üzerinden tüm dillerin URL'lerini yönetiyoruz
  const PAGE_MAP = {
    home: {
      tr: "/",
      en: "/en/"
    },
    about: {
      tr: "/hakkimizda",
      en: "/en/about-us"
    },
    gallery: {
      tr: "/galeri",
      en: "/en/gallery"
    },
    blog: {
      tr: "/blog",
      en: "/en/blog"
    },
    contact: {
      tr: "/iletisim",
      en: "/en/contact"
    },
    refs: {
      tr: "/referanslar",
      en: "/en/references"
    },
    products: {
      tr: "/urunler",
      en: "/en/sacrificial-slaughter-products"
    },
    product_cattle: {
      tr: "/buyukbas-kesim-ekipmanlari",
      en: "/en/cattle-slaughter-equipment"
    },
    product_small: {
      tr: "/kucukbas-kesim-ekipmanlari",
      en: "/en/small-ruminant-slaughter-equipment"
    },
    product_hygiene: {
      tr: "/kurban-kesim-hijyen-ekipmanlari",
      en: "/en/sacrificial-slaughter-hygiene-equipment"
    },
    product_deboning: {
      tr: "/kurban-kesim-parcalama-ekipmanlari",
      en: "/en/sacrificial-slaughter-deboning-equipment"
    }
  };

  // slug (dosya adı) -> yukarıdaki PAGE_MAP key'i
  const SLUG_TO_KEY = {
    // ana sayfa
    index: "home",

    // ortak sayfalar
    hakkimizda: "about",
    "about-us": "about",

    galeri: "gallery",
    gallery: "gallery",

    blog: "blog",

    iletisim: "contact",
    contact: "contact",

    referanslar: "refs",
    references: "refs",

    urunler: "products",
    "sacrificial-slaughter-products": "products",

    // ürün alt sayfaları
    "buyukbas-kesim-ekipmanlari": "product_cattle",
    "cattle-slaughter-equipment": "product_cattle",

    "kucukbas-kesim-ekipmanlari": "product_small",
    "small-ruminant-slaughter-equipment": "product_small",

    "kurban-kesim-hijyen-ekipmanlari": "product_hygiene",
    "sacrificial-slaughter-hygiene-equipment": "product_hygiene",

    "kurban-kesim-parcalama-ekipmanlari": "product_deboning",
    "sacrificial-slaughter-deboning-equipment": "product_deboning"
  };

  // Path'ten slug üret (galeri, about-us, index vs.)
  const toSlug = (pathOrHref) => {
    try {
      const u = new URL(pathOrHref, location.href);
      const parts = u.pathname.split("/").filter(Boolean);
      let last = parts.pop();

      // /, /tr/, /en/ vb.
      if (!last) return "index";
      if (LANG_CODES.includes(last)) return "index";

      // /index.html, /en/index.html vb.
      if (/^index\.html?$/i.test(last)) return "index";

      last = last.replace(/\.html?$/i, "");
      return last || "index";
    } catch {
      const raw = String(pathOrHref).split("#")[0].split("?")[0];
      let seg = raw.split("/").filter(Boolean).pop() || "index";
      seg = seg.replace(/\.html?$/i, "");
      return seg || "index";
    }
  };

  const CURRENT_SLUG = toSlug(location.pathname);
  const isHome = CURRENT_SLUG === "index";

  /* ----------------- 1) HEADER HTML EKLE ----------------- */
  const headerHTML = `
<header id="header" class="header d-flex align-items-center fixed-top">
  <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

    <!-- LOGO -->
    <a href="/" class="logo d-flex align-items-center me-auto me-xl-0">
      <img class="img-fluid" src="/assets/img/logo/ceka-bull.png" alt="Ceka Mezbaha Logo">
      <h5 class="logo-text">CEKA</h5>
    </a>

    <!-- NAV -->
    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="/">Anasayfa</a></li>
        <li><a href="/hakkimizda">Hakkımızda</a></li>

        <!-- Ürünler dropdown -->
        <li class="dropdown">
          <a href="/urunler" class="cursor-default">
            <span>Ürünler</span>
            <i class="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li><a href="/buyukbas-kesim-ekipmanlari">Büyükbaş Kesim Ekipmanları</a></li>
            <li><a href="/kucukbas-kesim-ekipmanlari">Küçükbaş Kesim Ekipmanları</a></li>
            <li><a href="/kurban-kesim-hijyen-ekipmanlari">Hijyen Ekipmanları</a></li>
            <li><a href="/kurban-kesim-parcalama-ekipmanlari">Parçalama &amp; Paketleme</a></li>
          </ul>
        </li>
        <li><a href="/referanslar">Referanslar</a></li>
        <li><a href="/galeri">Galeri</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/iletisim">İletişim</a></li>
      </ul>
      <!-- Mobil menü ikonu -->
      <i class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="Menüyü aç"></i>
    </nav>

    <!-- DİL BUTONLARI -->
    <div class="header-lang d-xl-flex align-items-center btn-getstarted">
      <button class="lang-btn" data-lang="tr" aria-label="Türkçe">
        <img src="/assets/img/logo/turk-bayragi.png" alt="Türkçe">
      </button>
      <button class="lang-btn flag-gray" data-lang="en" aria-label="English">
        <img src="/assets/img/logo/ingiliz-bayragi.png" alt="English">
      </button>
    </div>

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
      btn.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
      btn.setAttribute("role", "button");
      if (!btn.hasAttribute("tabindex")) btn.setAttribute("tabindex", "0");
    });
  };

  const toggleMenu = (willOpen) => {
    nav.classList.toggle("navmenu-open", willOpen);
    document.body.classList.toggle("mobile-nav-active", willOpen);
    setMobileIcon(willOpen);
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(TOGGLE_SELECTOR);
    if (!btn) return;
    e.preventDefault();
    const willOpen = !nav.classList.contains("navmenu-open");
    toggleMenu(willOpen);
  });

  document.addEventListener("keydown", (e) => {
    const btn = e.target.closest(TOGGLE_SELECTOR);
    if (!btn) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const willOpen = !nav.classList.contains("navmenu-open");
      toggleMenu(willOpen);
    }
  });

  const mo = new MutationObserver(() => {
    setMobileIcon(nav.classList.contains("navmenu-open"));
  });
  mo.observe(document.body, { childList: true, subtree: true });

  setMobileIcon(nav.classList.contains("navmenu-open"));

  /* ----------------- 4) DROPDOWN (mobil + desktop) ----------------- */
  nav
    .querySelectorAll(".dropdown > a.cursor-default, .dropdown > a[href='#']")
    .forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        const isMobile = window.innerWidth < 1200;
        if (!isMobile) return;

        e.preventDefault();

        const parentLi = trigger.closest("li.dropdown");
        if (!parentLi) return;

        const submenu = parentLi.querySelector(":scope > ul");
        if (!submenu) return;

        const isOpen = submenu.classList.toggle("dropdown-active");

        const arrow = trigger.querySelector(".toggle-dropdown");
        if (arrow) {
          arrow.classList.toggle("is-open", isOpen);
        }
      });
    });

  /* ----------------- 5) NAV: aktif link (path'e göre) ----------------- */
  function setActiveByPath() {
    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) return;

      let linkSlug;
      if (href === "/" || href === "/en/") {
        linkSlug = "index";
      } else {
        linkSlug = toSlug(href);
      }

      const isActive =
        (linkSlug === "index" && isHome) || linkSlug === CURRENT_SLUG;

      a.classList.toggle("active", !!isActive);

      if (isActive) {
        const parentDrop = a.closest("li.dropdown");
        if (parentDrop) {
          parentDrop.classList.add("dropdown-active");
          const upper = parentDrop.closest("li.dropdown");
          if (upper) upper.classList.add("dropdown-active");
        }
      }
    });
  }

  /* ----------------- 6) SCROLLSPY (#anchor linkler) ----------------- */
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

  /* ----------------- 7) Anchor tıklaması ----------------- */
  navLinks.forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("#")) return;

    a.addEventListener("click", (e) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      if (nav.classList.contains("navmenu-open")) {
        toggleMenu(false);
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      navLinks.forEach((l) => l.classList.remove("active"));
      a.classList.add("active");
    });
  });

  /* ----------------- 8) DİL DEĞİŞTİRME ----------------- */
  function getLangUrl(targetLang) {
    const pageKey = SLUG_TO_KEY[CURRENT_SLUG] || "home";

    const map = PAGE_MAP[pageKey];
    if (map && map[targetLang]) return map[targetLang];

    const homeMap = PAGE_MAP.home;
    if (homeMap && homeMap[targetLang]) return homeMap[targetLang];

    const langCfg = LANGS[targetLang];
    return langCfg?.base || "/";
  }

  function setupLanguageSwitcher() {
    const container = document.querySelector(".header-lang");
    if (!container) return;

    const buttons = container.querySelectorAll(".lang-btn[data-lang]");
    buttons.forEach((btn) => {
      const lang = btn.dataset.lang;
      if (!lang) return;

      const isActiveLang = lang === CURRENT_LANG;
      btn.classList.toggle("flag-gray", !isActiveLang);
      btn.setAttribute("aria-current", isActiveLang ? "true" : "false");

      btn.addEventListener("click", (e) => {
        if (lang === CURRENT_LANG) return;
        e.preventDefault();
        const targetUrl = getLangUrl(lang);
        window.location.href = targetUrl;
      });
    });
  }

  /* ----------------- 9) INIT ----------------- */
  setActiveByPath();
  setActiveByScroll();
  setupLanguageSwitcher();

  window.addEventListener("scroll", setActiveByScroll, { passive: true });
  window.addEventListener("popstate", () => {
    setActiveByPath();
    setActiveByScroll();
    if (nav.classList.contains("navmenu-open")) toggleMenu(false);
  });
});
