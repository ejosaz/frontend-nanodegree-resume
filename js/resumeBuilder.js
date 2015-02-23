var name = "Elías Azcona";
var role = "Telematic Engineer";


//var formattedRole = HTMLheaderRole.replace("%data%",role);
//var formattedName = HTMLheaderName.replace("%data%",name);

var bio = { 
	"name" : name,
	"role" : role,
	"contacts" : {
		"mobile":"829-766-7032",
		"email" : "john@example.com",
		"github": "ejosaz",
		"location":" Santiago"
	},
	"welcomeMessage": "Life is about Simplicity",
	"skills": ["player", "sleeper","go ahead"],
	"biopic" : "images/fry.jpg"
}

var work = {};
work.position = "System Analyst";
work.employer = "WIND";
work.years = "0.3"

var projects = {};
projects.name = "Unificacion de Laboratorios";
projects.year = 2014;
projects.members = "Elias Azcona & Jomil Pena"

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
    	"mayor":"Telematic"
    	"degree":"Graduate"
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


//$("#main").append(work["position"]);
//$("#main").append(education.name);
//$("#main").append(bio.name);
$("#header").append(formattedName);
$("#header").append(formattedRole);



