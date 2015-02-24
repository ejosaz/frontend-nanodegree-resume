
var bio = { 
	"name" : "Elias Azcona",
	"role" : "Engineer",
	"contacts" : {
		"mobile":"829-766-7032",
		"email" : "ejosaz1@gmail.com",
		"github": "ejosaz",
		"twitter": "ejosaz",
		"location":" Santiago"
	},
	"welcomeMessage": "Life is about Simplicity",
	"skills": ["Player", "Sleeper","Hardwork", "Dreamer"],
	"bioPic" : "images/rosalina.png"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%",name);


var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

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
"location":"Santiago",
"dates":"22/05/2014 - 22/07/2014",
"description":"Analyze if the network is working in the optimal conditions."
},
{
"employer":"Nintendo",
"title":"Junior Developer",
"location":"USA",
"dates":"Future",
"description":"Designed and executed probes in the video game department."
}]
};

var projects = {
"project":[
{
"title":"SEDILAB",
"dates":2014,
"description":"A web platform for students",
"images":["www.example1.com","www.example2.com"]
}]
};

var education = {
	"schools": [
	{
	"name":"San Luis Gonzaga",
	"city": "Salcedo",
	"minors": "Bachelor",
	"dates":2010

    },
    {
    	"name":"PUCMM",
    	"city":"Santiago",
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



