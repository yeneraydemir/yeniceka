// headers.js (TR + EN uyumlu, .html'li / .html'siz uyumlu)

document.addEventListener("DOMContentLoaded", () => {
  /* ----------------- 0) DİL ALGILAMA ----------------- */
  const detectLang = () => {
    const p = location.pathname;
    if (p === "/en" || p.startsWith("/en/")) return "en";
    return "tr";
  };

  const CURRENT_LANG = detectLang();

  const LANGS = {
    tr: { code: "tr", base: "/" },
    en: { code: "en", base: "/en/" }
  };

  const LANG_CODES = Object.keys(LANGS);

  /* ----------------- 1) SAYFA HARİTASI ----------------- */
  // Tek bir pageKey üzerinden TR/EN URL yönetimi
  const PAGE_MAP = {
    home: { tr: "/", en: "/en/" },

    about: { tr: "/hakkimizda", en: "/en/about-us" },
    gallery: { tr: "/galeri", en: "/en/gallery" },
    blog: { tr: "/blog", en: "/en/blog" },
    contact: { tr: "/iletisim", en: "/en/contact" },
    refs: { tr: "/referanslar", en: "/en/references" },

    // ürünler ana sayfası
    products: { tr: "/kurban-kesim-urunleri", en: "/en/sacrificial-slaughter-products" },

    // ürün alt sayfaları
    product_cattle: { tr: "/buyukbas-kesim-ekipmanlari", en: "/en/cattle-slaughter-equipment" },
    product_small: { tr: "/kucukbas-kesim-ekipmanlari", en: "/en/small-ruminant-slaughter-equipment" },
    product_hygiene: { tr: "/kurban-kesim-hijyen-ekipmanlari", en: "/en/sacrificial-slaughter-hygiene-equipment" },
    product_deboning: { tr: "/kurban-kesim-parcalama-ekipmanlari", en: "/en/sacrificial-slaughter-deboning-equipment" }
  };

  // slug (dosya adı) -> PAGE_MAP key
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

    // ürünler ana sayfası (KRİTİK: eksikti)
    "kurban-kesim-urunleri": "products",
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

  /* ----------------- 2) PATH -> SLUG ----------------- */
  const toSlug = (pathOrHref) => {
    try {
      const u = new URL(pathOrHref, location.href);
      const parts = u.pathname.split("/").filter(Boolean);
      let last = parts.pop();

      // /, /en/, /tr/ vb.
      if (!last) return "index";
      if (LANG_CODES.includes(last)) return "index";

      // /index.html, /en/index.html vb.
      if (/^index\.html?$/i.test(last)) return "index";

      // .html / .htm kaldır
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

  const urlFor = (pageKey, lang = CURRENT_LANG) => {
    const map = PAGE_MAP[pageKey];
    if (map && map[lang]) return map[lang];
    return LANGS[lang]?.base || "/";
  };

  const t = (trText, enText) => (CURRENT_LANG === "en" ? enText : trText);

  /* ----------------- 3) HEADER HTML EKLE ----------------- */
  const headerHTML = `
<header id="header" class="header d-flex align-items-center fixed-top">
  <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

    <!-- LOGO -->
    <a href="${urlFor("home")}" class="logo d-flex align-items-center me-auto me-xl-0">
      <img class="img-fluid" src="/assets/img/logo/ceka-bull.png" alt="Ceka Mezbaha Logo">
      <h5 class="logo-text">CEKA</h5>
    </a>

    <!-- NAV -->
    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="${urlFor("home")}">${t("Anasayfa", "Home")}</a></li>
        <li><a href="${urlFor("about")}">${t("Hakkımızda", "About")}</a></li>

        <!-- Ürünler dropdown -->
        <li class="dropdown">
          <a href="${urlFor("products")}" class="cursor-default">
            <span>${t("Ürünler", "Products")}</span>
            <i class="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li><a href="${urlFor("product_cattle")}">${t("Büyükbaş Kesim Ekipmanları", "Cattle Slaughter Equipment")}</a></li>
            <li><a href="${urlFor("product_small")}">${t("Küçükbaş Kesim Ekipmanları", "Small Ruminant Equipment")}</a></li>
            <li><a href="${urlFor("product_hygiene")}">${t("Hijyen Ekipmanları", "Hygiene Equipment")}</a></li>
            <li><a href="${urlFor("product_deboning")}">${t("Parçalama &amp; Paketleme", "Deboning &amp; Packaging")}</a></li>
          </ul>
        </li>

        <li><a href="${urlFor("refs")}">${t("Referanslar", "References")}</a></li>
        <li><a href="${urlFor("gallery")}">${t("Galeri", "Gallery")}</a></li>
        <li><a href="${urlFor("blog")}">Blog</a></li>
        <li><a href="${urlFor("contact")}">${t("İletişim", "Contact")}</a></li>
      </ul>

      <!-- Mobil menü ikonu -->
      <i class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="${t("Menüyü aç", "Open menu")}"></i>
    </nav>

    <!-- DİL BUTONLARI -->
    <div class="header-lang d-xl-flex align-items-center btn-getstarted">
      <button class="lang-btn" data-lang="tr" aria-label="Türkçe">
        <img src="/assets/img/logo/turk-bayragi.png" alt="Türkçe">
      </button>
      <button class="lang-btn" data-lang="en" aria-label="English">
        <img src="/assets/img/logo/ingiliz-bayragi.png" alt="English">
      </button>
    </div>

  </div>
</header>`;

  if (!document.querySelector("header#header")) {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  /* ----------------- 4) SEÇİCİLER ----------------- */
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

  const getAllToggles = () => Array.from(document.querySelectorAll(TOGGLE_SELECTOR));

  /* ----------------- 5) MOBİL MENÜ ----------------- */
  const isMobile = () => window.innerWidth < 1200;

  const setMobileIcon = (open) => {
    getAllToggles().forEach((btn) => {
      const iconEl = btn.matches("i.bi")
        ? btn
        : btn.querySelector("i.bi, i[class*='bi-']") || btn;

      iconEl.classList.remove("bi-list", "bi-x", "bi-x-lg");
      iconEl.classList.add(open ? "bi-x" : "bi-list");

      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? t("Menüyü kapat", "Close menu") : t("Menüyü aç", "Open menu"));
      btn.setAttribute("role", "button");
      if (!btn.hasAttribute("tabindex")) btn.setAttribute("tabindex", "0");
    });
  };

  const openMenu = () => {
    nav.classList.add("navmenu-open");
    document.body.classList.add("mobile-nav-active");
    setMobileIcon(true);
  };

  const closeMenu = () => {
    nav.classList.remove("navmenu-open");
    document.body.classList.remove("mobile-nav-active");
    setMobileIcon(false);

    // mobilde açılmış dropdownları da kapat
    nav.querySelectorAll("li.dropdown.dropdown-active").forEach((li) => li.classList.remove("dropdown-active"));
    nav.querySelectorAll("li.dropdown > ul.dropdown-active").forEach((ul) => ul.classList.remove("dropdown-active"));
  };

  const toggleMenu = () => {
    const open = nav.classList.contains("navmenu-open");
    open ? closeMenu() : openMenu();
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(TOGGLE_SELECTOR);
    if (!btn) return;
    e.preventDefault();
    toggleMenu();
  });

  document.addEventListener("keydown", (e) => {
    const btn = e.target.closest(TOGGLE_SELECTOR);
    if (!btn) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });

  // menü açıkken, nav dışına tıklayınca kapat
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("navmenu-open")) return;
    if (!isMobile()) return;

    const insideNav = e.target.closest("#navmenu");
    const insideHeader = e.target.closest("#header");
    const isToggle = e.target.closest(TOGGLE_SELECTOR);

    if (!insideNav && insideHeader && !isToggle) {
      // header alanında ama menü dışına tıkladı -> kapat
      closeMenu();
    }
  });

  // desktop'a geçince menüyü kapat
  window.addEventListener("resize", () => {
    if (!isMobile() && nav.classList.contains("navmenu-open")) closeMenu();
    setMobileIcon(nav.classList.contains("navmenu-open"));
  });

  setMobileIcon(nav.classList.contains("navmenu-open"));

  /* ----------------- 6) DROPDOWN (mobil) ----------------- */
  nav.querySelectorAll(".dropdown > a.cursor-default, .dropdown > a[href='#']").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      if (!isMobile()) return;

      e.preventDefault();

      const parentLi = trigger.closest("li.dropdown");
      if (!parentLi) return;

      const submenu = parentLi.querySelector(":scope > ul");
      if (!submenu) return;

      const willOpen = !parentLi.classList.contains("dropdown-active");

      parentLi.classList.toggle("dropdown-active", willOpen);
      submenu.classList.toggle("dropdown-active", willOpen);

      const arrow = trigger.querySelector(".toggle-dropdown");
      if (arrow) arrow.classList.toggle("is-open", willOpen);
    });
  });

  /* ----------------- 7) NAV: aktif link (path'e göre) ----------------- */
  function setActiveByPath() {
    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) return;

      const linkSlug = (href === "/" || href === "/en/") ? "index" : toSlug(href);

      const isActive = (linkSlug === "index" && isHome) || linkSlug === CURRENT_SLUG;
      a.classList.toggle("active", !!isActive);

      if (isActive) {
        const parentDrop = a.closest("li.dropdown");
        if (parentDrop) {
          parentDrop.classList.add("dropdown-active");
          const submenu = parentDrop.querySelector(":scope > ul");
          if (submenu) submenu.classList.add("dropdown-active");
        }
      }
    });
  }

  /* ----------------- 8) SCROLLSPY (#anchor linkler) ----------------- */
  const HEADER_OFFSET = 100;

  function setActiveByScroll() {
    const anchorLinks = Array.from(navLinks).filter((a) => (a.getAttribute("href") || "").startsWith("#"));
    if (anchorLinks.length === 0) return;

    let found = false;
    const y = window.pageYOffset;

    sections.forEach((sec) => {
      const top = sec.offsetTop - HEADER_OFFSET;
      const bottom = top + sec.offsetHeight;
      if (y >= top && y < bottom) {
        const id = sec.id;
        anchorLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
        found = true;
      }
    });

    if (!found) anchorLinks.forEach((a) => a.classList.remove("active"));
  }

  /* ----------------- 9) Anchor tıklaması ----------------- */
  navLinks.forEach((a) => {
    const href = a.getAttribute("href") || "";

    // mobil menü açıkken normal linke tıklanınca kapat
    a.addEventListener("click", () => {
      if (isMobile() && nav.classList.contains("navmenu-open")) {
        // dropdown trigger değilse kapat
        const isDropdownTrigger = !!a.closest("li.dropdown") && a.classList.contains("cursor-default");
        if (!isDropdownTrigger) closeMenu();
      }
    });

    if (!href.startsWith("#")) return;

    a.addEventListener("click", (e) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      if (nav.classList.contains("navmenu-open")) closeMenu();

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      navLinks.forEach((l) => l.classList.remove("active"));
      a.classList.add("active");
    });
  });

  /* ----------------- 10) DİL DEĞİŞTİRME ----------------- */
  function getLangUrl(targetLang) {
    const pageKey = SLUG_TO_KEY[CURRENT_SLUG] || "home";

    const map = PAGE_MAP[pageKey];
    if (map && map[targetLang]) return map[targetLang];

    // fallback
    return LANGS[targetLang]?.base || "/";
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
        window.location.href = getLangUrl(lang);
      });
    });
  }

  /* ----------------- 11) INIT ----------------- */
  setActiveByPath();
  setActiveByScroll();
  setupLanguageSwitcher();

  window.addEventListener("scroll", setActiveByScroll, { passive: true });

  window.addEventListener("popstate", () => {
    setActiveByPath();
    setActiveByScroll();
    if (nav.classList.contains("navmenu-open")) closeMenu();
  });
});
