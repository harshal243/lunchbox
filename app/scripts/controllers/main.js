'use strict';
angular.module('lunchboxApp')
    .controller('LunchesCtrl', function () {
        this.lunchers = lunchersDetails;
});

var lunchersDetails = [{
		"userName" : "magelly",
		"name" : "Magelly",
		"lunch" : {
			"type" : "AUSTRALIAN",
			"name" : "Sizzling steak",
			"details" : "Just another steak!"
		},
		"date" : "Dec 2, 2015",
		"time" : "9:06:52 AM",
		"location" : {
			"latitude" : "-33.8657305",
			"longitude" : "151.20732999999996",
			"place" : "Melbourne Central"
		},
		"lunchingWith" : "simon"
	}, {
		"userName" : "simon",
		"name" : "Simon",
		"lunch" : {
			"type" : "ITALIAN",
			"name" : "Pasta Oh Pasta",
			"details" : "Pasta with .. erghh"
		},
		"date" : "Dec 2, 2015",
		"time" : "9:06:52 AM",
		"location" : {
			"latitude" : "-33.8657305",
			"longitude" : "151.20732999999996",
			"place" : "Melbourne Central"
		},
		"lunchingWith" : "magelly"
	}, {
		"userName" : "koonpoh",
		"name" : "Koon Poh",
		"lunch" : {
			"type" : "MEXICAN",
			"name" : "Wrap....",
			"details" : "Something in a wrap!"
		},
		"date" : "Dec 2, 2015",
		"time" : "9:06:52 AM",
		"location" : {
			"latitude" : "-33.8657305",
			"longitude" : "151.20732999999996",
			"place" : "Southen Cross DFO"
		},
		"lunchingWith" : null
	}, {
		"userName" : "krishna",
		"name" : "Krishna",
		"lunch" : {
			"type" : "INDIAN",
			"name" : "Rice and Curry",
			"details" : "Rice and curry, what else?"
		},
		"date" : "Dec 2, 2015",
		"time" : "9:06:52 AM",
		"location" : {
			"latitude" : "-33.8657305",
			"longitude" : "151.20732999999996",
			"place" : "Victoria Market"
		},
		"lunchingWith" : null
	}
];





