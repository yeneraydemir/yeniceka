// header.js (AR sayfaları için, BEN destekli)

document.addEventListener("DOMContentLoaded", () => {
  const LANGS = {
    tr: { code: "tr", base: "/" },
    en: { code: "en", base: "/en/" },
    ru: { code: "ru", base: "/ru/" },
    ar: { code: "ar", base: "/ar/" },
    ben: { code: "ben", base: "/ben/" }
  };

  const CURRENT_LANG = "ar";

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
      ar: "/ar/من-نحن"
    },
    gallery: {
      tr: "/galeri",
      en: "/en/gallery",
      ru: "/ru/galereya",
      ar: "/ar/المعرض"
    },
    blog: {
      tr: "/blog",
      en: "/en/blog",
      ru: "/ru/blog",
      ar: "/ar/المدونة"
    },
    contact: {
      tr: "/iletisim",
      en: "/en/contact",
      ru: "/ru/kontakty",
      ar: "/ar/اتصل-بنا"
    },
    refs: {
      tr: "/referanslar",
      en: "/en/references",
      ru: "/ru/referensy",
      ar: "/ar/المراجع"
    },
    products: {
      tr: "/kurban-kesim-urunleri",
      en: "/en/sacrificial-slaughter-products",
      ru: "/ru/produkty-dlya-zaboya",
      ar: "/ar/منتجات-الذبح"
    },
    product_cattle: {
      tr: "/buyukbas-kesim-ekipmanlari",
      en: "/en/cattle-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-krs",
      ar: "/ar/معدات-ذبح-الأبقار"
    },
    product_small: {
      tr: "/kucukbas-kesim-ekipmanlari",
      en: "/en/small-ruminant-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-mrs",
      ar: "/ar/معدات-ذبح-الأغنام"
    },
    product_hygiene: {
      tr: "/kurban-kesim-hijyen-ekipmanlari",
      en: "/en/sacrificial-slaughter-hygiene-equipment",
      ru: "/ru/gigiyenicheskoe-oborudovanie",
      ar: "/ar/معدات-النظافة"
    },
    product_deboning: {
      tr: "/kurban-kesim-parcalama-ekipmanlari",
      en: "/en/sacrificial-slaughter-deboning-equipment",
      ru: "/ru/obvalka-i-upakovka",
      ar: "/ar/معدات-التقطيع-والتغليف"
    }
  };

  const urlFor = (pageKey, lang = CURRENT_LANG) => {
    const map = PAGE_MAP[pageKey];
    if (map && map[lang]) return map[lang];
    return LANGS[lang]?.base || "/";
  };

  const t = (trText, enText, ruText, arText, benText) => {
    if (CURRENT_LANG === "en") return enText ?? trText;
    if (CURRENT_LANG === "ru") return ruText ?? trText;
    if (CURRENT_LANG === "ar") return arText ?? trText;
    if (CURRENT_LANG === "ben") return benText ?? trText;
    return trText;
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
        <li><a href="${urlFor("home")}">${t("", "", "", "الصفحة الرئيسية")}</a></li>
        <li><a href="${urlFor("about")}">${t("", "", "", "من نحن")}</a></li>
        <li class="dropdown">
          <a href="${urlFor("products")}" class="cursor-default">
            <span>${t("", "", "", "المنتجات")}</span>
            <i class="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li><a href="${urlFor("product_cattle")}">${t("", "", "", "معدات ذبح الأبقار")}</a></li>
            <li><a href="${urlFor("product_small")}">${t("", "", "", "معدات ذبح الأغنام")}</a></li>
            <li><a href="${urlFor("product_hygiene")}">${t("", "", "", "معدات النظافة")}</a></li>
            <li><a href="${urlFor("product_deboning")}">${t("", "", "", "التقطيع والتغليف")}</a></li>
          </ul>
        </li>
        <li><a href="${urlFor("refs")}">${t("", "", "", "المراجع")}</a></li>
        <li><a href="${urlFor("gallery")}">${t("", "", "", "المعرض")}</a></li>
        <li><a href="${urlFor("blog")}">Blog</a></li>
        <li><a href="${urlFor("contact")}">${t("", "", "", "اتصل بنا")}</a></li>
      </ul>

      <i class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="${t("", "", "", "افتح القائمة")}"></i>
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
        <span class="lang-code">AR</span>
      </button>
      <button class="lang-btn" data-lang="ben" aria-label="বাংলা">
        <span class="lang-code">BN</span>
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
      btn.setAttribute("aria-label", open ? "أغلق القائمة" : "افتح القائمة");
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

  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      if (isMobile() && nav.classList.contains("navmenu-open")) {
        const isDropdownTrigger = !!a.closest("li.dropdown") && a.classList.contains("cursor-default");
        if (!isDropdownTrigger) closeMenu();
      }
    });
  });

  setMobileIcon(nav.classList.contains("navmenu-open"));
  setupLanguageSwitcher();
});
