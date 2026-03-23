// /assets/js/footer.js (AR sayfaları için)

document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
  <footer id="footer" class="footer light-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="/ar/" class="logo d-flex align-items-center">
            <span class="sitename">Ceka Mezbaha Sistemleri</span>
          </a>

          <div class="footer-contact pt-3">
            <p>Saray, 5. Cd. NO:19/D, 06378<br>Kahramankazan / Ankara</p>
            <p>حلول صحية ومتينة لمعدات المسالخ وخطوط الذبح</p>
            <p class="mt-3"><strong>الهاتف:</strong> <span><a class="text-dark" href="tel:+905382374389">+90 538 237 43 89</a></span></p>
            <p><strong>البريد الإلكتروني:</strong> <span><a class="text-dark" href="mailto:info@cekamezbaha.com">info@cekamezbaha.com</a></span></p>
          </div>

          <div class="social-links d-flex mt-4">
            <a href="https://www.instagram.com/cekamezbaha/" aria-label="Instagram - Ceka Mezbaha" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/cekamezbaha/" aria-label="Facebook - Ceka Mezbaha" title="Facebook" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/ceka-mezbaha/" aria-label="LinkedIn - Ceka Mezbaha" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-1 col-md-2 footer-links"></div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>المنتجات</h4>
          <ul>
            <li><a href="/buyukbas-kesim-ekipmanlari">ذبح الأبقار</a></li>
            <li><a href="/kucukbas-kesim-ekipmanlari">ذبح الأغنام</a></li>
            <li><a href="/dairesel-kesim-makinesi">آلة الذبح الدائرية</a></li>
            <li><a href="/kurban-kesim-hijyen-ekipmanlari">معدات النظافة</a></li>
            <li><a href="/kurban-kesim-parcalama-ekipmanlari">معدات التقطيع</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>الشركة</h4>
          <ul>
            <li><a href="/hakkimizda">من نحن</a></li>
            <li><a href="/referanslar">المراجع</a></li>
            <li><a href="/galeri">المعرض</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>الدعم</h4>
          <ul>
            <li><a href="/iletisim">اتصل بنا</a></li>
            <li><a href="/referanslar">المراجع</a></li>
            <li><a href="/sitemap.xml">خريطة الموقع</a></li>
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
