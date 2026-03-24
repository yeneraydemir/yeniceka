// header.js (BEN sayfaları için)

document.addEventListener("DOMContentLoaded", () => {
  const LANGS = {
    tr: { code: "tr", base: "/" },
    en: { code: "en", base: "/en/" },
    ru: { code: "ru", base: "/ru/" },
    ar: { code: "ar", base: "/ar/" },
    ben: { code: "ben", base: "/ben/" }
  };

  const CURRENT_LANG = "ben";

  const PAGE_MAP = {
    home: {
      tr: "/",
      en: "/en/",
      ru: "/ru/",
      ar: "/ar/",
      ben: "/ben/"
    },
    about: {
      tr: "/hakkimizda",
      en: "/en/about-us",
      ru: "/ru/o-nas",
      ar: "/ar/من-نحن",
      ben: "/ben/আমাদের-সম্পর্কে"
    },
    gallery: {
      tr: "/galeri",
      en: "/en/gallery",
      ru: "/ru/galereya",
      ar: "/ar/المعرض",
      ben: "/ben/গ্যালারি"
    },
    blog: {
      tr: "/blog",
      en: "/en/blog",
      ru: "/ru/blog",
      ar: "/ar/المدونة",
      ben: "/ben/ব্লগ"
    },
    contact: {
      tr: "/iletisim",
      en: "/en/contact",
      ru: "/ru/kontakty",
      ar: "/ar/اتصل-بنا",
      ben: "/ben/যোগাযোগ"
    },
    refs: {
      tr: "/referanslar",
      en: "/en/references",
      ru: "/ru/referensy",
      ar: "/ar/المراجع",
      ben: "/ben/রেফারেন্স"
    },
    products: {
      tr: "/kurban-kesim-urunleri",
      en: "/en/sacrificial-slaughter-products",
      ru: "/ru/produkty-dlya-zaboya",
      ar: "/ar/منتجات-الذبح",
      ben: "/ben/কোরবানি-পণ্য"
    },
    product_cattle: {
      tr: "/buyukbas-kesim-ekipmanlari",
      en: "/en/cattle-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-krs",
      ar: "/ar/معدات-ذبح-الأبقار",
      ben: "/ben/গরু-জবাই-সরঞ্জাম"
    },
    product_small: {
      tr: "/kucukbas-kesim-ekipmanlari",
      en: "/en/small-ruminant-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-mrs",
      ar: "/ar/معدات-ذبح-الأغنام",
      ben: "/ben/ছোট-পশু-জবাই-সরঞ্জাম"
    },
    product_hygiene: {
      tr: "/kurban-kesim-hijyen-ekipmanlari",
      en: "/en/sacrificial-slaughter-hygiene-equipment",
      ru: "/ru/gigiyenicheskoe-oborudovanie",
      ar: "/ar/معدات-النظافة",
      ben: "/ben/স্বাস্থ্যবিধি-সরঞ্জাম"
    },
    product_deboning: {
      tr: "/kurban-kesim-parcalama-ekipmanlari",
      en: "/en/sacrificial-slaughter-deboning-equipment",
      ru: "/ru/obvalka-i-upakovka",
      ar: "/ar/معدات-التقطيع-والتغليف",
      ben: "/ben/কাটিং-ও-প্যাকেজিং"
    }
  };

  const urlFor = (pageKey, lang = CURRENT_LANG) => {
    const map = PAGE_MAP[pageKey];
    if (map && map[lang]) return map[lang];
    return LANGS[lang]?.base || "/";
  };

  const headerHTML = `
<header id="header" class="header d-flex align-items-center fixed-top">
  <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
    <a href="${urlFor("home")}" class="logo d-flex align-items-center me-auto me-xl-0">
      <img class="img-fluid" src="/assets/img/logo/ceka-bull.png" alt="Ceka Mezbaha Logo">
      <h5 class="logo-text">CEKA</h5>
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="${urlFor("home")}">হোম</a></li>
        <li><a href="${urlFor("about")}">আমাদের সম্পর্কে</a></li>
        <li class="dropdown">
          <a href="${urlFor("products")}" class="cursor-default">
            <span>পণ্য</span>
            <i class="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li><a href="${urlFor("product_cattle")}">গরু জবাই সরঞ্জাম</a></li>
            <li><a href="${urlFor("product_small")}">ছোট পশু জবাই সরঞ্জাম</a></li>
            <li><a href="${urlFor("product_hygiene")}">স্বাস্থ্যবিধি সরঞ্জাম</a></li>
            <li><a href="${urlFor("product_deboning")}">কাটিং ও প্যাকেজিং</a></li>
          </ul>
        </li>
        <li><a href="${urlFor("refs")}">রেফারেন্স</a></li>
        <li><a href="${urlFor("gallery")}">গ্যালারি</a></li>
        <li><a href="${urlFor("blog")}">ব্লগ</a></li>
        <li><a href="${urlFor("contact")}">যোগাযোগ</a></li>
      </ul>

      <i class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="মেনু খুলুন"></i>
    </nav>

    <div class="header-lang d-xl-flex align-items-center btn-getstarted">
      <button class="lang-btn" data-lang="tr" aria-label="Türkçe">
        <img src="/assets/img/logo/turk-bayragi.png" alt="Türkçe">
      </button>
      <button class="lang-btn" data-lang="en" aria-label="English">
        <img src="/assets/img/logo/ingiliz-bayragi.png" alt="English">
      </button>
      <button class="lang-btn" data-lang="ru" aria-label="Русский">
        <img src="/assets/img/logo/rus-bayragi.png" alt="Русский">
      </button>
      <button class="lang-btn" data-lang="ar" aria-label="العربية">
        <img src="/assets/img/logo/arabia.webp" alt="العربية">
      </button>
      <button class="lang-btn" data-lang="ben" aria-label="বাংলা">
        <img src="/assets/img/logo/banglades-bayragi.webp" alt="বাংলা">
      </button>
    </div>
  </div>
</header>`;

  if (!document.querySelector("header#header")) {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  const nav = document.querySelector("#navmenu");
  if (!nav) return;

  const navLinks = nav.querySelectorAll("ul li a[href]");
  const TOGGLE_SELECTOR = [".mobile-nav-toggle", "[data-mobile-toggle]"].join(",");
  const getAllToggles = () => Array.from(document.querySelectorAll(TOGGLE_SELECTOR));
  const isMobile = () => window.innerWidth < 1200;

  const setMobileIcon = (open) => {
    getAllToggles().forEach((btn) => {
      const iconEl = btn.matches("i.bi") ? btn : btn.querySelector("i.bi, i[class*='bi-']") || btn;
      iconEl.classList.remove("bi-list", "bi-x", "bi-x-lg");
      iconEl.classList.add(open ? "bi-x" : "bi-list");
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "মেনু বন্ধ করুন" : "মেনু খুলুন");
      btn.setAttribute("role", "button");
      if (!btn.hasAttribute("tabindex")) btn.setAttribute("tabindex", "0");
    });
  };

  const closeMenu = () => {
    nav.classList.remove("navmenu-open");
    document.body.classList.remove("mobile-nav-active");
    document.body.style.overflow = "";
    setMobileIcon(false);
  };

  const openMenu = () => {
    nav.classList.add("navmenu-open");
    document.body.classList.add("mobile-nav-active");
    document.body.style.overflow = "hidden";
    setMobileIcon(true);
  };

  getAllToggles().forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isMobile()) return;
      nav.classList.contains("navmenu-open") ? closeMenu() : openMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (!isMobile() && nav.classList.contains("navmenu-open")) closeMenu();
    setMobileIcon(nav.classList.contains("navmenu-open"));
  });

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

  function getLangUrl(targetLang) {
    return PAGE_MAP.home[targetLang] || LANGS[targetLang]?.base || "/";
  }

  document.querySelectorAll(".header-lang .lang-btn[data-lang]").forEach((btn) => {
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

  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      if (isMobile() && nav.classList.contains("navmenu-open")) {
        const isDropdownTrigger = !!a.closest("li.dropdown") && a.classList.contains("cursor-default");
        if (!isDropdownTrigger) closeMenu();
      }
    });
  });

  setMobileIcon(nav.classList.contains("navmenu-open"));
});
