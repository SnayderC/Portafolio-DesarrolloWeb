(function () {
  var filterBar = document.querySelector(".filter-bar");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".project-card"));
  var modalBackdrop = document.getElementById("projectModal");

  if (!cards.length) return;

  if (filterBar) {
    filterBar.addEventListener("click", function (event) {
      var btn = event.target.closest(".filter-btn");
      if (!btn) return;

      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");

      var tech = btn.getAttribute("data-filter");

      cards.forEach(function (card) {
        var techs = (card.getAttribute("data-tech") || "").split(",");
        var matches = tech === "all" || techs.indexOf(tech) !== -1;
        card.classList.toggle("hidden", !matches);
      });
    });
  }

  if (!modalBackdrop) return;

  var modalTitle = modalBackdrop.querySelector("#modalTitle");
  var modalDescription = modalBackdrop.querySelector("#modalDescription");
  var modalProblem = modalBackdrop.querySelector("#modalProblem");
  var modalTags = modalBackdrop.querySelector("#modalTags");
  var modalImage = modalBackdrop.querySelector("#modalImage");
  var modalRepo = modalBackdrop.querySelector("#modalRepo");
  var modalDemo = modalBackdrop.querySelector("#modalDemo");
  var closeBtn = modalBackdrop.querySelector(".modal__close");
  var lastFocusedElement = null;

  function openModal(card) {
    var data = card.dataset;

    modalTitle.textContent = data.title || "";
    modalDescription.textContent = data.description || "";
    modalProblem.textContent = data.problem || "";

    modalTags.innerHTML = "";
    (data.tech || "").split(",").forEach(function (tech) {
      if (!tech) return;
      var span = document.createElement("span");
      span.className = "badge badge-primary";
      span.textContent = tech;
      modalTags.appendChild(span);
    });

    if (data.image) {
      modalImage.src = data.image;
      modalImage.alt = "Captura del proyecto " + (data.title || "");
      modalImage.closest(".modal__figure").classList.remove("hidden");
    } else {
      modalImage.closest(".modal__figure").classList.add("hidden");
    }

    if (data.repo) {
      modalRepo.href = data.repo;
      modalRepo.classList.remove("hidden");
    } else {
      modalRepo.classList.add("hidden");
    }

    if (data.demo) {
      modalDemo.href = data.demo;
      modalDemo.classList.remove("hidden");
    } else {
      modalDemo.classList.add("hidden");
    }

    lastFocusedElement = document.activeElement;
    modalBackdrop.classList.add("is-open");
    document.body.classList.add("no-scroll");
    closeBtn.focus();
  }

  function closeModal() {
    modalBackdrop.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  cards.forEach(function (card) {
    var trigger = card.querySelector("[data-modal-trigger]");
    if (!trigger) return;
    trigger.addEventListener("click", function () {
      openModal(card);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", function (event) {
    if (event.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
