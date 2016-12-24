/**
 * 
 */

angular.module('my-app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
    .when("/portaluser", {
        //templateUrl : "portaluser.html"
    	template : "<div><h3>Portal Users</h3><p>Some content.</p></div>"
    })
    .when("/clients", {
        //templateUrl : "clients.html"
    	template : "<div><h3>Clients</h3><p>Some content.</p></div>"
    })
    .when("/reports", {
        //templateUrl : "reports.html"
    	template : "<div><h3>Reports</h3><p>Some content.</p></div>"
    });
});