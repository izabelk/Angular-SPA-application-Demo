'use strict';

app.factory('StatsResourse', function ($http, $q, baseServiceUrl) {

    var statsApi = baseServiceUrl + '/api/Stats';

    var getStatistics = function () {
        var deferred = $q.defer();

        $http.get(statsApi)
        .success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    return {
        getStatistics: getStatistics
    };

});