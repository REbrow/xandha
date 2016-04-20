
'use strict';
// $('input[name="daterange"]').daterangepicker(
// {
//     locale: {
//       format: 'YYYY-MM-DD'
//     },
//     autoUpdateInput: false,
//     singleDatePicker: true,
//     showDropdowns: true,
//     startDate: '2013-01-01',
//     endDate: '2013-12-31'
// },
// function(start, end) {
// 	'use strict';
//     console.log('A new date range was chosen: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
// });

//  $(".destination-profile-image").backstretch([
//       "../images/destination_images/slide2.jpg"
//     , "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg"
//     , "../images/destination_images/slide1.jpg"
//   ], {duration: 3500, fade: 900});


// var map = new GMaps({
//     div: '#map',
//     lat: -12.043333,
//     lng: -77.028333
// });


var app = angular.module('xandhaApp', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
	//$locationProvider.html5Mode(true);
	$routeProvider
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeController"
		})
		.when("/destinations", {
			templateUrl: "views/destinations.html",
			controller: "DestinationsController"
		})
		.otherwise({
			redirectTo: "/"
		});
});
