(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {

    Array.from(form.elements).forEach(input => {

      input.addEventListener('input', () => {

        if (input.checkValidity()) {
          input.classList.add('is-valid');
          input.classList.remove('is-invalid');
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
        }

      });

    });

    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');

    });

  });

})();