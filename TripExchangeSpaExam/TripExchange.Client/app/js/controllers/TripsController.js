/// <reference path="../../_references.js" />

'use strict';

app.controller('TripsController',
    function TripsController($scope, $cookies, $location, $templateCache, $routeParams, TripsResourse) {

        $scope.pages = 1;

        $scope.tripId;
        $scope.trip;

        $scope.getTrips = getTrips;
        $scope.getFilteredTrips = getFilteredTrips;
        $scope.getTripById = getTripById;
        $scope.createTrip = createTrip;
        $scope.goToCreateTripPage = goToCreateTripPage;
        $scope.increasePages = increasePages;
        $scope.decreasePages = decreasePages;
        $scope.isUserLoggedIn = isUserLoggedIn;
        $scope.trips;
        $scope.data = $scope.getTrips();

        function getTrips() {
            TripsResourse.getTrips()
            .then(function (response) {
                $scope.trips = response;

            }, function (err) {
                alert(err.error_description);
            });
        }

        function getTripById(){
            TripsResourse.getTripById($scope.tripId)
             .then(function (response) {
                 $scope.trip = response;

             }, function (err) {
                 alert(err.error_description);
             });
        }

        function getFilteredTrips(page, orderBy, orderType, from, to, finished, onlyMine) {
            TripsResourse.getFilteredTrips(page, orderBy, orderType, from, to, finished, onlyMine)
             .then(function (response) {
                 $scope.trips = response;
             }, function (err) {
                 alert(err.error_description);
             });
        }

        function createTrip(trip, tripForm) {
            if (tripForm.$valid) {
                TripsResourse.createTrip(trip)
                 .then(function (response) {
                     $scope.tripId = response.id;
                     $routeParams.id = response.id;
                     console.log($routeParams.id);
                     $location.path('/trip-details/' + $routeParams.id);
                     //console.log(response);
                     $scope.trip = $scope.getTripById($scope.tripId);
                    
                 }, function (err) {
                     alert(err.error_description);
                 });
                $templateCache.removeAll();
                
                //console.log($routeParams.id);
               
                
            }
        }

        function cancel() {
            $location.path('/trips');
        }

        function goToCreateTripPage() {
            $location.path('/create-trip');
        }

        function isUserLoggedIn() {
            return $cookies.currentApplicationUser !== undefined;
        }

        function increasePages() {
            $scope.pages++;
        }

        function decreasePages() {
            if ($scope.pages > 1) {
                $scope.pages--;
            }
        }

    });