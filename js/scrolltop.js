(function () {
  var button = document.getElementById("backToTop");
  if (!button) return;

  var SHOW_AFTER_PX = 320;

  function toggleVisibility() {
    button.classList.toggle("is-visible", window.scrollY > SHOW_AFTER_PX);
  }

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
