/**
 * 
 */

var app = angular.module('my-app', [ 'ngRoute' ])

app.config(function($routeProvider) {
	$routeProvider.when("/portaluser", {
		// templateUrl : "portaluser.html"
		template : "<div><h3>Portal Users</h3><p>Some content.</p></div>"
	}).when("/clients", {
		// templateUrl : "clients.html"
		template : "<div><h3>Clients</h3><p>Some content.</p></div>"
	}).when("/reports", {
		// templateUrl : "reports.html"
		template : "<div><h3>Reports</h3><p>Some content.</p></div>"
	});
});

app.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');// 1.6.0 migration
										// https://docs.angularjs.org/guide/migration#commit-aa077e8
} ]);

app.service('sharedProperties', function() {
	var hashtable = {};
	return {
		setValue : function(key, value) {
			hashtable[key] = value;
		},
		getValue : function(key) {
			return hashtable[key];
		}
	}
});

app.controller('my-ctrl', function($scope, $window, $http) {
	var myCtrl = this;
	myCtrl.showLogin = true;
	
	myCtrl.login = function(){
		this.showLogin = false;
	}
	
});
