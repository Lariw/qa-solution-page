(() => {
  const hamburgerBtn = document.querySelector("#checkbox1");
  const mobileMenu = document.querySelector(".nav__mobileNav");
  const overlay = document.querySelector(".overlay");
  const body = document.body;
  const mobileNavLinks = document.querySelectorAll(".nav__link");

  function closeMobileMenu() {
    mobileMenu.style.display = "none";
    overlay.classList.remove("overlay--active");
    body.style.overflow = "";
    hamburgerBtn.checked = false;
  }

  hamburgerBtn.addEventListener("click", () => {
    if (hamburgerBtn.checked) {
      mobileMenu.style.display = "block";
      overlay.classList.add("overlay--active");
      body.style.overflow = "hidden";
    } else {
      closeMobileMenu();
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });
})();
