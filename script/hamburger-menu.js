(() => {
  const hamburgerBtn = document.querySelector("#checkbox1");
  const mobileMenu = document.querySelector(".nav__mobileNav");

  hamburgerBtn.addEventListener("click", () => {
    if (hamburgerBtn.checked) {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  });
})();
