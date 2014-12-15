'use strict';

app.factory('CitiesResourse', function ($http, $q, baseServiceUrl) {

    var citiesApi = baseServiceUrl + '/api/Cities';

    var getCities = function () {
        var deferred = $q.defer();

        $http.get(citiesApi)
        .success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    return {
        getCities: getCities
    };

});