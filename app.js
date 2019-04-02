window.onload = init;

function init() {
  displayName();
}

const form = document.getElementById("name-form");
form.onsubmit = function(event) {
  event.preventDefault();
  const result = document.getElementById("result");
  result.innerHTML = "Hi " + form.fullName.value;
  form.fullname.value;
  this.reset();
};

function displayName() {
  const container = document.querySelector("#contact");
  const createLi = document.createElement("li");
  createLi.innerText = resume.person.name;
  container.appendChild(createLi);

  const printEmail = document.createElement("li");
  printEmail.innerText = resume.person.email;
  container.appendChild(printEmail);
}

function displayNumber() {
  const container = document.querySelector("#contact");
  const createLi = document.createElement("li");
  createLi.innerText = resume.person.number;
  container.appendChild(createLi);

  const printSocialMedia = document.createElement("li");
  printSocialMedia.innerText = resume.person.socialMedia;
  container.appendChild(printSocialMedia);
}