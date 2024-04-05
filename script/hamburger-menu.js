(() => {
  const hamburgerBtn = document.querySelector("#checkbox1");
  const mobileMenu = document.querySelector(".nav__mobileNav");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  hamburgerBtn.addEventListener("click", () => {
    if (hamburgerBtn.checked) {
      mobileMenu.style.display = "block";
      overlay.classList.add("overlay--active");
      body.style.overflow = "hidden";
    } else {
      mobileMenu.style.display = "none";
      overlay.classList.remove("overlay--active");
      body.style.overflow = "";
    }
  });
})();
