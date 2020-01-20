import { skills } from "./app/data/skills.js";

// loop for display the array of experiences
function displayAllTheSkills(skills) {
  for (var experience of skills) {
    displayOneSkill(experience);
  }
}

function displaySkillDescription(skill) {
  var myString = '';
  for (var item of skill.description) {
    myString += '<div id="'.concat(skill.categorie.replace(/ /g, '')).replace('/', '') + '" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">' +
      '<div class="card-body">'.concat(item) +
      '</div>' +
      '</div>';
  }
  return myString;
}

function displayOneSkill(experience) {
  var accordion = document.getElementById('accordionExample');
  var myString = '<div class="card">' +
    '<div class="card-header" id="headingOne">' +
    '<h2 class="mb-0">' +
    '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#'.concat(experience.categorie.replace(/ /g, '')).replace('/', '') + '" aria-expanded="false" aria-controls="'.concat(experience.categorie.replace(/ /g, '')) + '">'
      .concat(experience.categorie) +
    '</button>' +
    '</h2>' +
    '</div>' +
    displaySkillDescription(experience);
  accordion.innerHTML += myString;
}

displayAllTheSkills(skills);



