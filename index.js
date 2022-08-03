var skills = [
  {
    level: "70",
    description: "I have good command in Git and Github Opertaions",
  },
  {
    level: "50",
    description:
      "In React I have good understanding of functional componets and Classes. How data flow in the DOM",
  },
  {
    level: "90",
    description: "One of my highest rated skill is Design",
  },
  {
    level: "80",
    description:
      "I have good understanding of all Flutter Fundamental and Advance models",
  },
];

function showSkill () {
    var html = "";
    setTimeout( () => {
        for(var i = 0; i<skills.length ; i++){
            html +='<div class="row align-items-center">';
            html +='<div class="col-1 h5 per">'+ skills[i].level +' %</div>';
            html +='<div class="col h5">';
            html += ''+skills[i].description +'</div> </div>';
        }
        document.getElementById('skills').innerHTML = html;
    } , 50 ) 
}

function addSkill () {
    var level = document.getElementById("skillLevelField").value;
    var description = document.getElementById("descriptionField").value;

    skills.push({
        level:level ,
        description:description,
    });
    document.getElementById("skillLevelField").value = "";
    document.getElementById("descriptionField").value = "";
    showSkill();
}

function deleteSkill () {
    skills.pop();
    showSkill();
}

showSkill()
