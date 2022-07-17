(function() {
    'use strict';
    window.addEventListener('load', function() {

      var forms = document.getElementsByClassName('needs-validation');

      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  var entry=0;
  var input = document.getElementById("pas1");
  var x = document.getElementById("nam");
  var y = document.getElementById("pas");
  var z = document.getElementById("pas2");

  function change()
  {
    if(entry==0)
    {
      document.getElementById("pas1").placeholder="email@example/com";
       entry++;
       input.classList.add("colr");
       x.classList.add("tr");
       y.classList.add("tr");
       z.classList.add("tr");
    }
  }