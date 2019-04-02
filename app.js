const form = document.getElementById('name-form');
form.onsubmit = function(event) {
  event.preventDefault();
const result = document.getElementById('result');
  result.innerHTML = 'Hi ' + form.fullName.value;(form.fullname.value);
  this.reset();
  };
