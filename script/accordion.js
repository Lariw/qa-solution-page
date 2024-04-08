const accordionBtn = document.querySelectorAll(".js-accordionBtn");

accordionBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
