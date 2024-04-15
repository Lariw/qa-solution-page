(() => {
  let e = (e) => {
    const element = document.querySelector(e);
    const offset = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: offset - 150, behavior: "smooth" });
  };
  document
    .querySelectorAll(".nav__link, .header_btnLink, .smooth-scroll")
    .forEach((t) => {
      t.addEventListener("click", (r) => {
        r.preventDefault(), e(t.getAttribute("href"));
      });
    });
})();
