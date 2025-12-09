// /assets/js/footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
  <footer id="footer" class="footer light-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="/en/" class="logo d-flex align-items-center">
            <span class="sitename">Ceka Slaughterhouse Systems</span>
          </a>
          <div class="footer-contact pt-3">
            <p>Saray, 5. Cd. NO:19/D, 06378<br>Kahramankazan / Ankara</p>
            <p>Hygienic and durable slaughterhouse solutions</p>
            <p class="mt-3"><strong>Phone:</strong> <span><a class="text-dark" href="tel:+905382374389">+90 538 237 43 89</a></span></p>
            <p><strong>Email:</strong> <span><a class="text-dark" href="mailto:info@cekamezbaha.com">info@cekamezbaha.com</a></span></p>
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
          <h4>Products</h4>
          <ul>
            <li><a href="cattle-slaughter-equipment">Cattle Lines</a></li>
            <li><a href="small-ruminant-slaughter-equipment">Small Ruminants</a></li>
            <li><a href="sacrificial-slaughter-hygiene-equipment">Hygiene</a></li>
            <li><a href="sacrificial-slaughter-deboning-equipment">Deboning</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="about-us">About Us</a></li>
            <li><a href="references">References</a></li>
            <li><a href="gallery">Gallery</a></li>
            <li><a href="blog">Blog</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="contact">Contact</a></li>
            <li><a href="references">References</a></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
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

  // Sayfada footer yoksa body'nin en sonuna ekle
  if (!document.querySelector("footer#footer")) {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
});
