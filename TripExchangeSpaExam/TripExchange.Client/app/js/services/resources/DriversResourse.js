'use strict';

app.factory('DriversResourse', function ($http, $q, baseServiceUrl, authorization) {

    var driversApi = baseServiceUrl + '/api/Drivers';

    var getDrivers = function () {
        var deferred = $q.defer();

        $http.get(driversApi)
        .success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    var getDriversPerPageAndByUserName = function (page, username) {
        var deferred = $q.defer();
        $http.get(driversApi + '?Page=' + page + '&Username=' + username,
            { headers: authorization.getAuthorizationHeader() })
        .success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }

    return {
        getDrivers: getDrivers,
        getDriversPerPageAndByUserName : getDriversPerPageAndByUserName
    };

});