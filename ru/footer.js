// /assets/js/footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
  <footer id="footer" class="footer light-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="/ru/" class="logo d-flex align-items-center">
            <span class="sitename">Системы бойни Ceka</span>
          </a>
          <div class="footer-contact pt-3">
            <p>Saray, 5. Cd. NO:19/D, 06378<br>Kahramankazan / Ankara</p>
            <p>Гигиеничные и надежные решения для оборудования бойни и убойных линий</p>
            <p class="mt-3"><strong>Телефон:</strong> <span><a class="text-dark" href="tel:+905382374389">+90 538 237 43 89</a></span></p>
            <p><strong>Эл. почта:</strong> <span><a class="text-dark" href="mailto:info@cekamezbaha.com">info@cekamezbaha.com</a></span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href="https://www.instagram.com/cekamezbaha/" aria-label="Instagram - Ceka Mezbaha" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/cekamezbaha/" aria-label="Facebook - Ceka Mezbaha" title="Facebook" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/ceka-mezbaha/" aria-label="LinkedIn - Ceka Mezbaha" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-1 col-md-2 footer-links">
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Продукты</h4>
          <ul>
            <li><a href="/ru/oborudovanie-dlya-zaboya-krs">Убой КРС</a></li>
            <li><a href="/ru/oborudovanie-dlya-zaboya-mrs">Убой МРС</a></li>
            <li><a href="/ru/gigiyenicheskoe-oborudovanie">Гигиеническое оборудование</a></li>
            <li><a href="/ru/obvalka-i-upakovka">Обвалка и упаковка</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>О компании</h4>
          <ul>
            <li><a href="/ru/o-nas">О нас</a></li>
            <li><a href="/ru/referensy">Референсы</a></li>
            <li><a href="/ru/galereya">Галерея</a></li>
            <li><a href="/ru/blog">Блог</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Поддержка</h4>
          <ul>
            <li><a href="/ru/kontakty">Контакты</a></li>
            <li><a href="/ru/referensy">Референсы</a></li>
            <li><a href="/sitemap.xml">Карта сайта</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">      
      <div class="credits">
        Разработка: <a href="https://artegama.com/">Artegama</a>
      </div>
    </div>

  </footer>`;

  // Sayfada footer yoksa body'nin en sonuna ekle
  if (!document.querySelector("footer#footer")) {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
});
