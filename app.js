const form = document.getElementById('name-form');
form.onsubmit = function(event) {
  event.preventDefault();
const result = document.getElementById('result');
  result.innerHTML = 'Hi ' + form.fullName.value;(form.fullname.value);
  this.reset();
  };

  const resume = {
    person: {
      name: 'Paul Bennings',
      email: 'paul@happnyc.com',
      number: '702-913-4907',
      social media: {
        Instagram: 'www.instagram.com/heavyweight_nyc',
        Facebook: 'www.facebook.com/heavyweight.nyc/'
      }, 
    experience: {
      job1: {
        nameofjob: '',
        title: '',
        lengtoftime: '',
        description: {
          achievements: ''
        },
    
      job2: {
        nameofjob: '',
        title: '',
        lengthoftime: '',
        description: {
          achievements: ''
        },
   }
  },
   projects: {
      project1: '',
        nameofproject: '',
        link: '',
        screenshot: '',
        github: '',
        achievements: ''
},
projects2: {
  project1: '',
    nameofproject: '',
    link: '',
    screenshot: '',
    github: '',
    achievements: ''
},   
projects3: {
  project1: '',
    nameofproject: '',
    link: '',
    screenshot: '',
    github: '',
    achievements: ''
},
skills: ['Javascript','HTML','CSS'],
  },
    }