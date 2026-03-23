// /assets/js/footer.js  (TR + EN + RU uyumlu, absolute path, canonical URL)

document.addEventListener("DOMContentLoaded", () => {
  const LANG_CODES = ["en", "ru"];

  const detectLang = () => {
    const parts = location.pathname.split("/").filter(Boolean);
    const first = parts[0];
    return LANG_CODES.includes(first) ? first : "tr";
  };

  const CURRENT_LANG = detectLang();

  // Footer linklerini dile göre map'liyoruz (header.js ile uyumlu)
  const URLS = {
    home: { tr: "/", en: "/en/", ru: "/ru/" },

    // ürün sayfaları
    product_cattle: {
      tr: "/buyukbas-kesim-ekipmanlari",
      en: "/en/cattle-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-krs",
    },
    product_small: {
      tr: "/kucukbas-kesim-ekipmanlari",
      en: "/en/small-ruminant-slaughter-equipment",
      ru: "/ru/oborudovanie-dlya-zaboya-mrs",
    },
    product_hygiene: {
      tr: "/kurban-kesim-hijyen-ekipmanlari",
      en: "/en/sacrificial-slaughter-hygiene-equipment",
      ru: "/ru/gigiyenicheskoe-oborudovanie",
    },
    product_deboning: {
      tr: "/kurban-kesim-parcalama-ekipmanlari",
      en: "/en/sacrificial-slaughter-deboning-equipment",
      ru: "/ru/obvalka-i-upakovka",
    },

    // kurumsal
    about: { tr: "/hakkimizda", en: "/en/about-us", ru: "/ru/o-nas" },
    refs: { tr: "/referanslar", en: "/en/references", ru: "/ru/referensy" },
    gallery: { tr: "/galeri", en: "/en/gallery", ru: "/ru/galereya" },
    blog: { tr: "/blog", en: "/en/blog", ru: "/ru/blog" },
    contact: { tr: "/iletisim", en: "/en/contact", ru: "/ru/kontakty" },

    sitemap: { tr: "/sitemap.xml", en: "/sitemap.xml", ru: "/sitemap.xml" },
  };

  const u = (key) => URLS[key]?.[CURRENT_LANG] || "/";

  const footerHTML = `
  <footer id="footer" class="footer light-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="${u("home")}" class="logo d-flex align-items-center">
            <span class="sitename">Ceka Mezbaha Sistemleri</span>
          </a>

          <div class="footer-contact pt-3">
            <p>Saray, 5. Cd. NO:19/D, 06378<br>Kahramankazan / Ankara</p>
            <p>Mezbaha ve kesimhane ekipmanlarında hijyenik, dayanıklı çözümler</p>
            <p class="mt-3"><strong>Telefon:</strong> <span><a class="text-dark" href="tel:+905382374389">+90 538 237 43 89</a></span></p>
            <p><strong>E-posta:</strong> <span><a class="text-dark" href="mailto:info@cekamezbaha.com">info@cekamezbaha.com</a></span></p>
          </div>

          <div class="social-links d-flex mt-4">
            <a href="https://www.instagram.com/cekamezbaha/" aria-label="Instagram - Ceka Mezbaha" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/cekamezbaha/" aria-label="Facebook - Ceka Mezbaha" title="Facebook" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/ceka-mezbaha/" aria-label="LinkedIn - Ceka Mezbaha" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-1 col-md-2 footer-links"></div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Ürünler</h4>
          <ul>
            <li><a href="${u("product_cattle")}">Büyükbaş Kesim</a></li>
            <li><a href="${u("product_small")}">Küçükbaş Kesim</a></li>
            <li><a href="/dairesel-kesim-makinesi">Dairesel Kesim Makinesi</a></li>
            <li><a href="${u("product_hygiene")}">Hijyen Ekipmanları</a></li>
            <li><a href="${u("product_deboning")}">Parçalama Ekipmanları</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Kurumsal</h4>
          <ul>
            <li><a href="${u("about")}">Hakkımızda</a></li>
            <li><a href="${u("refs")}">Referanslar</a></li>
            <li><a href="${u("gallery")}">Galeri</a></li>
            <li><a href="${u("blog")}">Blog</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Destek</h4>
          <ul>
            <li><a href="${u("contact")}">İletişim</a></li>
            <li><a href="${u("refs")}">Referanslar</a></li>
            <li><a href="${u("sitemap")}">Site Haritası</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <div class="credits">
        Designed by <a href="https://artegama.com/">Artegama</a>
      </div>
    </div>
  </footer>`;

  if (!document.querySelector("footer#footer")) {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
});
