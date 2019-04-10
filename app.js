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

  const printNameOfJob = document.createElement("li");
  printNameOfJob.innerText = resume.experience.job1.nameofjob;
  container.appendChild(printNameOfJob);

  const createTitle = document.createElement("li");
  createTitle.innerText = resume.experience.job1.title;
  container.appendChild(createTitle);


const createLengthOfTime2 = document.createElement ("li");
createLengthOfTime2 = resume.experience.job1.lengthoftime2;
container.appendChild(createLengthOfTime2);

const createDescription2 = document.createElement("h2");
createDescription2 = resume.experience.job2.description2.achievements;
container.appendChild(createDescription);

const printNameOfJob2 = document.createElement("li");
printNameOfJob2.innerText = resume.experience.job2.nameofjob2;
container.appendChild(printNameOfJob2);

const createTitle2 = document.createElement("li");
createTitle2.innerText = resume.experience.job2.title;
container.appendChild(createTitle2);


const createLengthOfTime2 = document.createElement ("li");
createLengthOfTime2 = resume.experience.job2.lengthoftime2;
container.appendChild(createLengthOfTime2);

const createDescription2 = document.createElement("h2");
createDescription2 = resume.experience.job2.description2.achievements;
container.appendChild(createDescription2);

const createProjects = document.createElement("h3");
createProjects = resume.projects.project1;
container.appendChild(createProjects);

const NameOfProjects = document.createElement("li");
NameOfProjects.innerText = resume.person.nameofproject;
container.appendChild(NameOfProjects);

const createLinks = document.createElement ("li");
createLinks.innerText = resume.person.projects.links;
container.appendChild(createLinks);

const createScreenshot = document.createElement ("li");
createScreenshot.innerText = resume.person.projects.screenshot;
container.appendChild(createScreenshot);

const createGithub = document.createElement ("li");
createGithub.innerText = resume.person.projects.github;
container.appendChild(createGithub);

const createAchievements = document.createElment ("li");
createGithub.innerText = resume.person.projects.achievements;
container.appendChild(createAchievements);

const createProjects2 = document.createElement("h3");
createProjects2 = resume.projects.project2;
container.appendChild(createProjects);

const NameOfProjects2 = document.createElement("li");
NameOfProjects2.innerText = resume.person.nameofproject2;
container.appendChild(NameOfProjects2);

const createLinks2 = document.createElement ("li");
createLinks2.innerText = resume.person.projects.links2;
container.appendChild(createLinks2);

const createScreenshot2 = document.createElement ("li");
createScreenshot2.innerText = resume.person.projects.screenshot2;
container.appendChild(createScreenshot2);

const createGithub2 = document.createElement ("li");
createGithub2.innerText = resume.person.projects.github2;
container.appendChild(createGithub2);

const createAchievements2 = document.createElment ("li");
createAchievements2.innerText = resume.person.projects.achievements2;
container.appendChild(createAchievements2);

const createProjects3 = document.createElement("h3");
createProjects3 = resume.projects.project3;
container.appendChild(createProjects3);

const NameOfProjects3 = document.createElement("li");
NameOfProjects3.innerText = resume.person.nameofproject3;
container.appendChild(NameOfProjects3);

const createLinks3 = document.createElement ("li");
createLinks3.innerText = resume.person.projects.links3;
container.appendChild(createLinks3);

const createScreenshot3 = document.createElement ("li");
createScreenshot3.innerText = resume.person.projects.screenshot3;
container.appendChild(createScreenshot3);

const createGithub3 = document.createElement ("li");
createGithub3.innerText = resume.person.projects.github3;
container.appendChild(createGithub3);

const createAchievements3 = document.createElment ("li");
createAchievements3.innerText = resume.person.projects.achievements3;
container.appendChild(createAchievements3);

const createAchievements3 = document.createElment ("li");
createAchievements3.innerText = resume.person.projects.achievements3;
container.appendChild(createAchievements3);

const creatSkills =
document.createSkills ("li");
createSkills1.innerText = 
resume.person.projects.projects1.skills;
container.appendChild(createSkills);
