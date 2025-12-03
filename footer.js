// /assets/js/footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
  <footer id="footer" class="footer light-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Ceka Mezbahane</span>
          </a>
          <div class="footer-contact pt-3">
            <p>İstanbul, Türkiye</p>
            <p>Mezbaha ve kesimhane ekipmanlarında hijyenik, dayanıklı çözümler</p>
            <p class="mt-3"><strong>Telefon:</strong> <span>+90 (000) 000 00 00</span></p>
            <p><strong>E-posta:</strong> <span><a href="mailto:iletisim@cekamezbaha.com">iletisim@cekamezbaha.com</a></span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-1 col-md-2 footer-links">
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Ürünler</h4>
          <ul>
            <li><a href="buyukbas-kesim-ekipmanlari.html">Büyükbaş Kesim</a></li>
            <li><a href="kucukbas-kesim-ekipmanlari.html">Küçükbaş Kesim</a></li>
            <li><a href="kurban-kesim-hijyen-ekipmanlari.html">Hijyen Ekipmanları</a></li>
            <li><a href="kurban-kesim-parcalama-ekipmanlari.html">Parçalama Ekipmanları</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Kurumsal</h4>
          <ul>
            <li><a href="hakkimizda.html">Hakkımızda</a></li>
            <li><a href="referanslar.html">Referanslar</a></li>
            <li><a href="galeri.html">Galeri</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Destek</h4>
          <ul>
            <li><a href="iletisim.html">İletişim</a></li>
            <li><a href="hakkimizda.html">Kalite Politikası</a></li>
            <li><a href="referanslar.html">Müşteri Hikayeleri</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">      
      <div class="credits">
        Designed by <a class="text-white" href="https://artegama.com/">Artegama</a>
      </div>
    </div>

  </footer>`;

  // Sayfada footer yoksa body'nin en sonuna ekle
  if (!document.querySelector("footer#footer")) {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
});
