// footer.js (BEN)

document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
  <footer id="footer" class="footer light-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="/ben/" class="logo d-flex align-items-center">
            <span class="sitename">Ceka Mezbaha Sistemleri</span>
          </a>
          <div class="footer-contact pt-3">
            <p>Saray, 5. Cd. NO:19/D, 06378<br>Kahramankazan / Ankara</p>
            <p>হাইজেনিক ও টেকসই স্লটারহাউস সমাধান</p>
            <p class="mt-3"><strong>ফোন:</strong> <span><a class="text-dark" href="tel:+905382374389">+90 538 237 43 89</a></span></p>
            <p><strong>ইমেইল:</strong> <span><a class="text-dark" href="mailto:info@cekamezbaha.com">info@cekamezbaha.com</a></span></p>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
  if (!document.querySelector("footer#footer")) {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
});
