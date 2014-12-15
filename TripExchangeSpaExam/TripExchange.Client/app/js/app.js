'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/', {
                templateUrl: 'views/partials/home-public.html',
            })
            .when('/trips', {
                templateUrl: 'views/partials/trips.html',
            })
            .when('/drivers', {
                templateUrl: 'views/partials/drivers.html',
            })
            .when('/create-trip', {
                templateUrl: 'views/partials/create-trip.html',
            })
            .when('/trip-details:/id', {
                templateUrl: 'views/partials/trip-details.html',
            })
            .otherwise({ redirectTo: '/' });
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://spa2014.bgcoder.com');