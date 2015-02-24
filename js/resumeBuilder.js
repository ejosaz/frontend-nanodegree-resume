
var bio = { 
	"name" : "Elias Azcona",
	"role" : "Engineer",
	"contacts" : {
		"mobile":"829-766-7032",
		"email" : "ejosaz1@gmail.com",
		"github": "ejosaz",
		"twitter": "ejosaz",
		"location":" Santiago, Dominican Republic"
	},
	"welcomeMessage": "Life is about Simplicity",
	"skills": ["Player", "Sleeper","Hardwork", "Delivering Things"],
	"bioPic" : "images/rosalina.png"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%",name);


var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(internationalizeButton);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

//Skills
$("#header").append(HTMLskillsStart);
for(skill in bio.skills){

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
	$("#skills").append(formattedSkill);

};

//Another things.
var work = {
"jobs":[
{
"employer":"WIND", 
"title": "Operation Analyst",
"location":"Santiago, Dominican Republic",
"dates":"22/05/2014 - 22/07/2014",
"description":"Analyze if the network is working in the optimal conditions."
},
{
"employer":"Nintendo",
"title":"Junior Developer",
"location":"New York, USA",
"dates":"Future",
"description":"Designed and executed probes in the video game department."
}]
};

var projects = {
"projects":[
{
"title":"SEDILAB",
"dates":2014,
"description":"A web platform for students",
"images":"images/pikachu.jpg"
}]
};

var education = {
	"schools": [
	{
	"name":"San Luis Gonzaga",
	"location": "Salcedo, Dominican Republic",
	"mayor": "Bachelor",
	"degree": "Graduate",
	"dates":2010

    },
    {
    	"name":"PUCMM",
    	"location":"Santiago de los Caballeros, Dominican Republic",
    	"mayor":"Telematic",
    	"degree":"Graduate",
    	"dates":2014
    }
	],
	"onlineCourses": [
	{
		"title":"IntroToCS",
		"school":"Udacity",
		"dates":2015
	}
	]
};



//Funciones. 
function displayEducation(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart); 
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates)
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
        $(".education-entry:last").append(formattedLocation);
         var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].mayor)
        $(".education-entry:last").append(formattedMajor);


		};
};

displayEducation();

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart); 
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
		};
};

displayWork();

//Encapsulacion
projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
        
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
        
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
        
		if (projects.projects[project].images.lenght > 0 ){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		else{
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		    $(".project-entry:last").append(formattedImage);

		}

	}
};

projects.display();


$("#mapDiv").append(googleMap);
