(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var status = document.getElementById("formStatus");
  var fields = {
    name: form.querySelector("#contactName"),
    email: form.querySelector("#contactEmail"),
    subject: form.querySelector("#contactSubject"),
    message: form.querySelector("#contactMessage"),
  };

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var validators = {
    name: function (value) {
      if (!value.trim()) return "Ingresa tu nombre.";
      if (value.trim().length < 3) return "El nombre debe tener al menos 3 caracteres.";
      return "";
    },
    email: function (value) {
      if (!value.trim()) return "Ingresa tu correo.";
      if (!emailPattern.test(value.trim())) return "Ingresa un correo válido.";
      return "";
    },
    subject: function (value) {
      if (!value.trim()) return "Ingresa un asunto.";
      return "";
    },
    message: function (value) {
      if (!value.trim()) return "Escribe un mensaje.";
      if (value.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres.";
      return "";
    },
  };

  function showError(fieldName, message) {
    var field = fields[fieldName];
    var errorEl = document.getElementById(fieldName + "Error");
    field.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (errorEl) errorEl.textContent = message;
  }

  function validateField(fieldName) {
    var message = validators[fieldName](fields[fieldName].value);
    showError(fieldName, message);
    return !message;
  }

  Object.keys(fields).forEach(function (fieldName) {
    fields[fieldName].addEventListener("blur", function () {
      validateField(fieldName);
    });
    fields[fieldName].addEventListener("input", function () {
      if (fields[fieldName].classList.contains("is-invalid")) {
        validateField(fieldName);
      }
    });
  });

  function showStatus(type, message) {
    status.textContent = message;
    status.className = "form-status is-visible form-status--" + type;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var isValid = Object.keys(fields).every(function (fieldName) {
      return validateField(fieldName);
    });

    if (!isValid) {
      showStatus("error", "Revisa los campos marcados antes de enviar.");
      return;
    }

    showStatus(
      "success",
      "¡Gracias, " + fields.name.value.trim().split(" ")[0] + "! Tu mensaje quedó validado. " +
        "Este formulario es una demo sin backend — escríbeme directamente a " +
        "cedenosnyder@gmail.com mientras lo conecto a un servicio de envío."
    );
    form.reset();
  });
})();
