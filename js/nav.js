/**
 * Menú de navegación responsive: abre/cierra el menú móvil,
 * lo cierra al hacer clic fuera, con Escape, o al elegir un enlace.
 */
(function () {
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  function isOpen() {
    return menu.classList.contains("is-open");
  }

  toggle.addEventListener("click", function () {
    isOpen() ? closeMenu() : openMenu();
  });

  menu.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (event) {
    if (!isOpen()) return;
    var clickedInsideMenu = menu.contains(event.target);
    var clickedToggle = toggle.contains(event.target);
    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && isOpen()) {
      closeMenu();
    }
  });
})();
