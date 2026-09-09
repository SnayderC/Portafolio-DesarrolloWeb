(function () {
  var STORAGE_KEY = "portfolio-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");

  function getPreferredTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      saved = null;
    }
    if (saved === "light" || saved === "dark") return saved;

    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      }
  }

  applyTheme(getPreferredTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      saveTheme(next);
    });
  }
})();
