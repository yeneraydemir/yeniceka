// header.js (TR + EN + RU + AR + BEN uyumlu, .html'li / .html'siz uyumlu)

document.addEventListener("DOMContentLoaded", () => {
  /* ----------------- 0) DİL ve SAYFA HARİTASI ----------------- */
  const LANGS = {
    tr: { code: "tr", base: "/" },
    en: { code: "en", base: "/en/" },
    ru: { code: "ru", base: "/ru/" },
    ar: { code: "ar", base: "/ar/" },
    ben: { code: "ben", base: "/ben/" }
  };

  const LANG_CODES = Object.keys(LANGS);

  // URL'den dili otomatik algıla: /en/... , /ru/... yoksa tr
  const detectLang = () => {
    const parts = location.pathname.split("/").filter(Boolean);
    const first = parts[0];
    if (first && LANG_CODES.includes(first)) return first;
    return "tr";
  };

  const CURRENT_LANG = detectLang();

  // Tek bir "pageKey" üzerinden tüm dillerin URL'lerini yönetiyoruz
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
      ar: "/ar/about-us",
      ben: "/ben/about-us"
    },
    gallery: {
      tr: "/galeri",
      en: "/en/gallery",
      ru: "/ru/galereya",
      ar: "/ar/gallery",
      ben: "/ben/gallery"
    },
    blog: {
      tr: "/blog",
      en: "/en/blog",
      ru: "/ru/blog",
      ar: "/ar/blog",
      ben: "/ben/blog"
    },
    contact: {
      tr: "/iletisim",
      en: "/en/contact",
      ru: "/ru/kontakty",
      ar: "/ar/contact",
      ben: "/ben/contact"
    },
    refs: {
      tr: "/referanslar",
      en: "/en/references",
      ru: "/ru/referensy",
      ar: "/ar/references",
      ben: "/ben/references"
    },
    products: {
      tr: "/kurban-kesim-urunleri",
      en: "/en/sacrificial-slaughter-products",
      ru: "/ru/produkty-dlya-zaboya",
      ar: "/ar/slaughter-products",
      ben: "/ben/slaughter-products"
    },
    product_cattle: {
      tr: "/buyukbas-kesim-ekipmanlari",
      en: "/en/cattle-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-krs",
      ar: "/ar/cattle-slaughter-equipment",
      ben: "/ben/cattle-slaughter-equipment"
    },
    product_small: {
      tr: "/kucukbas-kesim-ekipmanlari",
      en: "/en/small-ruminant-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-mrs",
      ar: "/ar/small-ruminant-slaughter-equipment",
      ben: "/ben/small-ruminant-slaughter-equipment"
    },
    product_hygiene: {
      tr: "/kurban-kesim-hijyen-ekipmanlari",
      en: "/en/sacrificial-slaughter-hygiene-equipment",
      ru: "/ru/gigiyenicheskoe-oborudovanie",
      ar: "/ar/hygiene-equipment",
      ben: "/ben/hygiene-equipment"
    },
    product_deboning: {
      tr: "/kurban-kesim-parcalama-ekipmanlari",
      en: "/en/sacrificial-slaughter-deboning-equipment",
      ru: "/ru/obvalka-i-upakovka",
      ar: "/ar/deboning-packaging",
      ben: "/ben/deboning-packaging"
    },
    article_systems: {
      tr: "/mezbaha-sistemleri-nedir",
      en: "/en/what-are-slaughterhouse-systems",
      ar: "/ar/slaughterhouse-systems",
      ben: "/ben/slaughterhouse-systems"
    },
    article_flow: {
      tr: "/kurban-kesim-hat-akis-plani",
      en: "/en/sacrificial-slaughter-line-flow-plan",
      ar: "/ar/slaughter-line-flow-plan",
      ben: "/ben/slaughter-line-flow-plan"
    },
    article_hygiene: {
      tr: "/kurban-doneminde-hijyen-bariyerleri",
      en: "/en/eid-slaughter-hygiene-barriers",
      ar: "/ar/eid-slaughter-hygiene-barriers",
      ben: "/ben/eid-slaughter-hygiene-barriers"
    },
    facility_small: {
      tr: "/kucuk-olcekli-mezbaha-tesisi",
      en: "/en/small-scale-slaughterhouse-facility"
    },
    facility_industrial: {
      tr: "/endustriyel-mezbaha-tesisi-kurulumu",
      en: "/en/industrial-slaughterhouse-facility",
      ru: "/ru/promyshlennaya-boynya"
    }
  };

  // slug (dosya adı) -> PAGE_MAP key'i
  const SLUG_TO_KEY = {
    index: "home",

    // TR
    hakkimizda: "about",
    galeri: "gallery",
    blog: "blog",
    iletisim: "contact",
    referanslar: "refs",
    "kurban-kesim-urunleri": "products",
    "buyukbas-kesim-ekipmanlari": "product_cattle",
    "kucukbas-kesim-ekipmanlari": "product_small",
    "kurban-kesim-hijyen-ekipmanlari": "product_hygiene",
    "kurban-kesim-parcalama-ekipmanlari": "product_deboning",
    "mezbaha-sistemleri-nedir": "article_systems",
    "kurban-kesim-hat-akis-plani": "article_flow",
    "kurban-doneminde-hijyen-bariyerleri": "article_hygiene",
    "kucuk-olcekli-mezbaha-tesisi": "facility_small",
    "endustriyel-mezbaha-tesisi-kurulumu": "facility_industrial",

    // EN
    "about-us": "about",
    gallery: "gallery",
    contact: "contact",
    references: "refs",
    "sacrificial-slaughter-products": "products",
    "slaughter-products": "products",
    "cattle-slaughter-equipment": "product_cattle",
    "small-ruminant-slaughter-equipment": "product_small",
    "sacrificial-slaughter-hygiene-equipment": "product_hygiene",
    "hygiene-equipment": "product_hygiene",
    "sacrificial-slaughter-deboning-equipment": "product_deboning",
    "deboning-packaging": "product_deboning",
    "what-are-slaughterhouse-systems": "article_systems",
    "slaughterhouse-systems": "article_systems",
    "sacrificial-slaughter-line-flow-plan": "article_flow",
    "slaughter-line-flow-plan": "article_flow",
    "eid-slaughter-hygiene-barriers": "article_hygiene",
    "small-scale-slaughterhouse-facility": "facility_small",
    "industrial-slaughterhouse-facility": "facility_industrial",

    // RU
    "o-nas": "about",
    "galereya": "gallery",
    "kontakty": "contact",
    "referensy": "refs",
    "produkty-dlya-zaboya": "products",
    "oborudovanie-dlya-zaboya-krs": "product_cattle",
    "oborudovanie-dlya-zaboya-mrs": "product_small",
    "gigiyenicheskoe-oborudovanie": "product_hygiene",
    "obvalka-i-upakovka": "product_deboning",
    "promyshlennaya-boynya": "facility_industrial",

    // AR
    "من-نحن": "about",
    "المعرض": "gallery",
    "المدونة": "blog",
    "اتصل-بنا": "contact",
    "المراجع": "refs",
    "منتجات-الذبح": "products",
    "معدات-ذبح-الأبقار": "product_cattle",
    "معدات-ذبح-الأغنام": "product_small",
    "معدات-النظافة": "product_hygiene",
    "معدات-التقطيع-والتغليف": "product_deboning",
    "ما-هي-أنظمة-المسالخ": "article_systems",
    "مخطط-تدفق-خط-الذبح": "article_flow",
    "حواجز-النظافة-في-موسم-الأضاحي": "article_hygiene",

    // BEN
    "আমাদের-সম্পর্কে": "about",
    "গ্যালারি": "gallery",
    "ব্লগ": "blog",
    "যোগাযোগ": "contact",
    "রেফারেন্স": "refs",
    "কোরবানি-পণ্য": "products",
    "গরু-জবাই-সরঞ্জাম": "product_cattle",
    "ছোট-পশু-জবাই-সরঞ্জাম": "product_small",
    "স্বাস্থ্যবিধি-সরঞ্জাম": "product_hygiene",
    "কাটিং-ও-প্যাকেজিং": "product_deboning",
    "স্লটারহাউস-সিস্টেম-কী": "article_systems",
    "জবাই-লাইন-ফ্লো-প্ল্যান": "article_flow",
    "কোরবানির-হাইজিন-ব্যারিয়ার": "article_hygiene"
  };

  /* ----------------- 1) Path'ten slug üret ----------------- */
  const toSlug = (pathOrHref) => {
    try {
      const u = new URL(pathOrHref, location.href);
      const parts = u.pathname.split("/").filter(Boolean);
      let last = decodeURIComponent(parts.pop() || "");

      // /, /en/, /ru/ vb.
      if (!last) return "index";
      if (LANG_CODES.includes(last)) return "index";

      // /index.html, /en/index.html vb.
      if (/^index\.html?$/i.test(last)) return "index";

      last = last.replace(/\.html?$/i, "");
      return last || "index";
    } catch {
      const raw = String(pathOrHref).split("#")[0].split("?")[0];
      let seg = decodeURIComponent(raw.split("/").filter(Boolean).pop() || "index");
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

  // 4 dil çeviri yardımcı fonksiyonu
  const t = (trText, enText, ruText, arText, benText) => {
    if (CURRENT_LANG === "en") return enText ?? trText;
    if (CURRENT_LANG === "ru") return ruText ?? trText;
    if (CURRENT_LANG === "ar") return arText ?? trText;
    if (CURRENT_LANG === "ben") return benText ?? trText;
    return trText;
  };

  /* ----------------- 2) HEADER HTML EKLE ----------------- */
  const headerHTML = `
<header id="header" class="header d-flex align-items-center fixed-top">
  <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

    <!-- LOGO -->
    <a href="${urlFor("home")}" class="logo d-flex align-items-center me-auto me-xl-0">
      <img class="img-fluid" src="/assets/img/logo/ceka-bull.png" alt="Ceka Mezbaha Sistemleri logosu" title="Ceka Mezbaha Sistemleri logosu">
      <h5 class="logo-text">CEKA</h5>
    </a>

    <!-- NAV -->
    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="${urlFor("home")}">${t("Anasayfa", "Home", "Главная", "الصفحة الرئيسية", "হোম")}</a></li>
        <li><a href="${urlFor("about")}">${t("Hakkımızda", "About", "О нас", "من نحن", "আমাদের সম্পর্কে")}</a></li>

        <!-- Ürünler dropdown -->
        <li class="dropdown">
          <a href="${urlFor("products")}" class="cursor-default">
            <span>${t("Ürünler", "Products", "Продукты", "المنتجات", "পণ্য")}</span>
            <i class="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li><a href="${urlFor("product_cattle")}">${t("Büyükbaş Kesim Ekipmanları", "Cattle Equipment", "Оборудование для КРС", "معدات ذبح الأبقار", "গরু জবাই সরঞ্জাম")}</a></li>
            <li><a href="${urlFor("product_small")}">${t("Küçükbaş Kesim Ekipmanları", "Small Ruminant Equipment", "Оборудование для МРС", "معدات ذبح الأغنام", "ছোট পশু জবাই সরঞ্জাম")}</a></li>
            <li><a href="${urlFor("product_hygiene")}">${t("Hijyen Ekipmanları", "Hygiene Equipment", "Гигиеническое оборудование", "معدات النظافة", "স্বাস্থ্যবিধি সরঞ্জাম")}</a></li>
            <li><a href="${urlFor("product_deboning")}">${t("Parçalama &amp; Paketleme", "Deboning &amp; Packaging", "Обвалка и упаковка", "التقطيع والتغليف", "কাটিং ও প্যাকেজিং")}</a></li>
          </ul>
        </li>

        <li><a href="${urlFor("refs")}">${t("Referanslar", "References", "Референсы", "المراجع", "রেফারেন্স")}</a></li>
        <li><a href="${urlFor("gallery")}">${t("Galeri", "Gallery", "Галерея", "المعرض", "গ্যালারি")}</a></li>
        <li><a href="${urlFor("blog")}">Blog</a></li>
        <li><a href="${urlFor("contact")}">${t("İletişim", "Contact", "Контакты", "اتصل بنا", "যোগাযোগ")}</a></li>
      </ul>

      <!-- Mobil menü ikonu -->
      <i class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="${t("Menüyü aç", "Open menu", "Открыть меню", "افتح القائمة", "মেনু খুলুন")}"></i>
    </nav>

    <!-- DİL BUTONLARI -->
    <div class="header-lang d-xl-flex align-items-center btn-getstarted">
      <button class="lang-btn" data-lang="tr" aria-label="Türkçe">
        <img src="/assets/img/logo/turk-bayragi.png" alt="Türkçe dil seçeneği" title="Türkçe dil seçeneği">
      </button>
      <button class="lang-btn" data-lang="en" aria-label="English">
        <img src="/assets/img/logo/ingiliz-bayragi.png" alt="English language option" title="English language option">
      </button>
      <button class="lang-btn" data-lang="ru" aria-label="Русский">
        <img src="/assets/img/logo/rus-bayragi.png" alt="Русский язык" title="Русский язык">
      </button>
      <button class="lang-btn" data-lang="ar" aria-label="العربية">
        <img src="/assets/img/logo/arabia.webp" alt="خيار اللغة العربية" title="خيار اللغة العربية">
      </button>
      <button class="lang-btn" data-lang="ben" aria-label="বাংলা">
        <img src="/assets/img/logo/banglades-bayragi.webp" alt="বাংলা ভাষা নির্বাচন" title="বাংলা ভাষা নির্বাচন">
      </button>
    </div>

  </div>
</header>`;

  if (!document.querySelector("header#header")) {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  /* ----------------- 3) SEÇİCİLER ----------------- */
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
  const isMobile = () => window.innerWidth < 1200;

  /* ----------------- 4) MOBİL MENÜ ----------------- */
  const setMobileIcon = (open) => {
    getAllToggles().forEach((btn) => {
      const iconEl = btn.matches("i.bi")
        ? btn
        : btn.querySelector("i.bi, i[class*='bi-']") || btn;

      iconEl.classList.remove("bi-list", "bi-x", "bi-x-lg");
      iconEl.classList.add(open ? "bi-x" : "bi-list");

      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute(
        "aria-label",
        open ? t("Menüyü kapat", "Close menu", "Закрыть меню", "أغلق القائمة", "মেনু বন্ধ করুন") : t("Menüyü aç", "Open menu", "Открыть меню", "افتح القائمة", "মেনু খুলুন")
      );
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
    nav.classList.contains("navmenu-open") ? closeMenu() : openMenu();
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

  // desktop'a geçince menüyü kapat
  window.addEventListener("resize", () => {
    if (!isMobile() && nav.classList.contains("navmenu-open")) closeMenu();
    setMobileIcon(nav.classList.contains("navmenu-open"));
  });

  setMobileIcon(nav.classList.contains("navmenu-open"));

  /* ----------------- 5) DROPDOWN (mobil) ----------------- */
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

  /* ----------------- 6) NAV: aktif link (path'e göre) ----------------- */
  function setActiveByPath() {
    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) return;

      const linkSlug = (href === "/" || href === "/index.html" || href === "/en/" || href === "/en/index.html" || href === "/ru/" || href === "/ru/index.html" || href === "/ar/" || href === "/ar/index.html" || href === "/ben/" || href === "/ben/index.html") ? "index" : toSlug(href);
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

  /* ----------------- 7) SCROLLSPY (#anchor linkler) ----------------- */
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

  /* ----------------- 8) Link tıklayınca mobil menüyü kapat ----------------- */
  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      if (isMobile() && nav.classList.contains("navmenu-open")) {
        // dropdown trigger değilse kapat
        const isDropdownTrigger = !!a.closest("li.dropdown") && a.classList.contains("cursor-default");
        if (!isDropdownTrigger) closeMenu();
      }
    });

    const href = a.getAttribute("href") || "";
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

  /* ----------------- 9) DİL DEĞİŞTİRME ----------------- */
  function getLangUrl(targetLang) {
    const pageKey = SLUG_TO_KEY[CURRENT_SLUG] || "home";
    const map = PAGE_MAP[pageKey];
    if (map && map[targetLang]) return map[targetLang];
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

  /* ----------------- 10) INIT ----------------- */
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
