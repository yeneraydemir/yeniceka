// header.js (BEN sayfaları için)

document.addEventListener("DOMContentLoaded", () => {
  const PAGE_MAP = {
    home: { tr: "/", en: "/en/", ru: "/ru/", ar: "/ar/", ben: "/ben/" }
  };

  const headerHTML = `
<header id="header" class="header d-flex align-items-center fixed-top">
  <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
    <a href="/ben/" class="logo d-flex align-items-center me-auto me-xl-0">
      <img class="img-fluid" src="/assets/img/logo/ceka-bull.png" alt="Ceka Mezbaha Logo">
      <h5 class="logo-text">CEKA</h5>
    </a>
    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="/ben/">হোম</a></li>
        <li><a href="/ben/আমাদের-সম্পর্কে">আমাদের সম্পর্কে</a></li>
        <li><a href="/ben/কোরবানি-পণ্য">পণ্য</a></li>
        <li><a href="/ben/রেফারেন্স">রেফারেন্স</a></li>
        <li><a href="/ben/গ্যালারি">গ্যালারি</a></li>
        <li><a href="/ben/ব্লগ">ব্লগ</a></li>
        <li><a href="/ben/যোগাযোগ">যোগাযোগ</a></li>
      </ul>
      <i class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="মেনু খুলুন"></i>
    </nav>
    <div class="header-lang d-xl-flex align-items-center btn-getstarted">
      <button class="lang-btn" data-lang="tr" aria-label="Türkçe"><img src="/assets/img/logo/turk-bayragi.png" alt="Türkçe"></button>
      <button class="lang-btn" data-lang="en" aria-label="English"><img src="/assets/img/logo/ingiliz-bayragi.png" alt="English"></button>
      <button class="lang-btn" data-lang="ru" aria-label="Русский"><img src="/assets/img/logo/rus-bayragi.png" alt="Русский"></button>
      <button class="lang-btn" data-lang="ar" aria-label="العربية"><span class="lang-code">AR</span></button>
      <button class="lang-btn" data-lang="ben" aria-label="বাংলা"><span class="lang-code">BN</span></button>
    </div>
  </div>
</header>`;

  if (!document.querySelector("header#header")) {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  const nav = document.querySelector("#navmenu");
  const toggle = document.querySelector(".mobile-nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("navmenu-open");
      toggle.classList.toggle("bi-x");
      toggle.classList.toggle("bi-list");
    });
  }

  document.querySelectorAll(".header-lang .lang-btn[data-lang]").forEach((btn) => {
    const lang = btn.dataset.lang;
    btn.classList.toggle("flag-gray", lang !== "ben");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = PAGE_MAP.home[lang] || "/";
    });
  });
});
