// footer.js (BEN)

document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
  <footer id="footer" class="footer light-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="/ben/" class="logo d-flex align-items-center">
            <span class="sitename">Ceka স্লটারহাউস সিস্টেম</span>
          </a>

          <div class="footer-contact pt-3">
            <p>Saray, 5. Cd. NO:19/D, 06378<br>Kahramankazan / Ankara</p>
            <p>হাইজেনিক ও টেকসই স্লটারহাউস সমাধান</p>
            <p class="mt-3"><strong>ফোন:</strong> <span><a class="text-dark" href="tel:+905382374389">+90 538 237 43 89</a></span></p>
            <p><strong>ইমেইল:</strong> <span><a class="text-dark" href="mailto:info@cekamezbaha.com">info@cekamezbaha.com</a></span></p>
          </div>

          <div class="social-links d-flex mt-4">
            <a href="https://www.instagram.com/cekamezbaha/" aria-label="Instagram - Ceka Mezbaha" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/cekamezbaha/" aria-label="Facebook - Ceka Mezbaha" title="Facebook" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/ceka-mezbaha/" aria-label="LinkedIn - Ceka Mezbaha" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-1 col-md-2 footer-links"></div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>পণ্য</h4>
          <ul>
            <li><a href="/ben/গরু-জবাই-সরঞ্জাম">গরু জবাই</a></li>
            <li><a href="/ben/ছোট-পশু-জবাই-সরঞ্জাম">ছোট পশু জবাই</a></li>
            <li><a href="/ben/কাটিং-ও-প্যাকেজিং">কাটিং ও প্যাকেজিং</a></li>
            <li><a href="/ben/স্বাস্থ্যবিধি-সরঞ্জাম">স্বাস্থ্যবিধি সরঞ্জাম</a></li>
            <li><a href="/ben/কাটিং-ও-প্যাকেজিং">কাটিং সরঞ্জাম</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>কোম্পানি</h4>
          <ul>
            <li><a href="/ben/আমাদের-সম্পর্কে">আমাদের সম্পর্কে</a></li>
            <li><a href="/ben/রেফারেন্স">রেফারেন্স</a></li>
            <li><a href="/ben/গ্যালারি">গ্যালারি</a></li>
            <li><a href="/ben/ব্লগ">ব্লগ</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>সহায়তা</h4>
          <ul>
            <li><a href="/ben/যোগাযোগ">যোগাযোগ</a></li>
            <li><a href="/ben/রেফারেন্স">রেফারেন্স</a></li>
            <li><a href="/sitemap.xml">সাইটম্যাপ</a></li>
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
