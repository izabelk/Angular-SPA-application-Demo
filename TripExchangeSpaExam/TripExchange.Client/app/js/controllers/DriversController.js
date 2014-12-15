/// <reference path="../../_references.js" />

'use strict';

app.controller('DriversController',
    function DriversController($scope, $cookies, DriversResourse) {

        $scope.pageCount = 1;
        $scope.getDrivers = getDrivers;
        $scope.increasePageCount = increasePageCount;
        $scope.decreasePageCount = decreasePageCount;
        $scope.drivers;
        $scope.isUserLoggedIn = isUserLoggedIn;
        $scope.getDriversPerPageAndFilterByUserName = getDriversPerPageAndFilterByUserName;
        $scope.data = $scope.getDrivers();

        function getDrivers() {
            DriversResourse.getDrivers()
            .then(function (response) {
                $scope.drivers = response;

            }, function (err) {
                alert(err.error_description);
            });
        }

        function getDriversPerPageAndFilterByUserName(username, page) {
            DriversResourse.getDriversPerPageAndByUserName(page, username)
            .then(function (response) {
                $scope.drivers = response;
            }, function (err) {
                alert(err.error_description);
            });
        }

        function isUserLoggedIn() {
            return $cookies.currentApplicationUser !== undefined;
        }

        function increasePageCount() {
            $scope.pageCount++;
        }

        function decreasePageCount() {
           
            if ($scope.pageCount > 1) {
                $scope.pageCount--;
            }
        }

    });