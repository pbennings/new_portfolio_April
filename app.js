window.onload = init;

function init() {
  displayContact();
  document
    .querySelector("#about-button")
    .addEventListener("click", displayExperience);
}

const form = document.getElementById("name-form");
form.onsubmit = function(event) {
  event.preventDefault();
  const result = document.getElementById("result");
  result.innerHTML = "Hi " + form.fullName.value;
  form.fullname.value;
  this.reset();
};

function displayContact() {
  const container = document.querySelector("#contact");
  const createLi = document.createElement("li");
  createLi.innerText = resume.person.name;
  container.appendChild(createLi);

  const printEmail = document.createElement("li");
  printEmail.innerText = resume.person.email;
  container.appendChild(printEmail);

  const createNumber = document.createElement("li");
  createNumber.innerText = resume.person.number;
  container.appendChild(createNumber);

  const printSocialMedia = document.createElement("li");
  printSocialMedia.innerText = resume.person.socialMedia.facebook;
  container.appendChild(printSocialMedia);
}

function displayExperience() {
  const container = document.querySelector("#experience");
  const createLi = document.createElement("h1");
  createLi.innerText = "Experience";
  container.appendChild(createLi);

  const printNameOfJob = document.createElement("li");
  printNameOfJob.innerText = resume.experience.job1.nameofjob;
  container.appendChild(printNameOfJob);

  const createTitle = document.createElement("li");
  createTitle.innerText = resume.experience.job1.title;
  container.appendChild(createTitle);
} 

const createLengthOfTime = document.createElement ("li");
createLengthOfTime = resume.experience.job1.lengthoftime;
container.appendChild(createLengthOfTime);

const createDescription = document.createElement("h2");
createDescription = resume.experience.job1.description.achievements;
container.appendChild(createDescription);

const createJob2 = document.createElement("li");
createJob2 = resume.experience.job2.nameofjob;
container.appendChild(createJob2);