'use strict';

app.controller('CitiesController',
    function CitiesController($scope, CitiesResourse) {

        $scope.getCities = getCities;
        $scope.cities;
        $scope.data = $scope.getCities();

        function getCities() {
            CitiesResourse.getCities()
            .then(function (response) {
                $scope.cities = response;
                //console.log(response);

            }, function (err) {
                alert(err.error_description);
            });
        }

    });