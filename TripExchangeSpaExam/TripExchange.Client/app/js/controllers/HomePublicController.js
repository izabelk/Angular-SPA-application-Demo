/// <reference path="../../_references.js" />
'use strict';

app.controller('HomePublicController',
    function HomePublicController($scope, StatsResourse) {

        $scope.getStatistics = getStatistics;

        $scope.trips;
        $scope.finishedTrips;
        $scope.users;
        $scope.drivers;
        $scope.data = $scope.getStatistics();

        function getStatistics() {
            StatsResourse.getStatistics()
            .then(function (response) {

                localStorage.setItem('trips', response.trips);
                localStorage.setItem('finishedTrips', response.finishedTrips);
                localStorage.setItem('users', response.users);
                localStorage.setItem('drivers', response.drivers);

                $scope.trips = response.trips;
                $scope.finishedTrips = response.finishedTrips;
                $scope.users = response.users;
                $scope.drivers = response.drivers;
               
            }, function (err) {
                alert(err.error_description);
            });
        }

    });