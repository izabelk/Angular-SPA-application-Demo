'use strict';

app.factory('TripsResourse', function ($http, $q, baseServiceUrl, authorization) {

    var tripsApi = baseServiceUrl + '/api/Trips';

    var getTrips = function () {
        var deferred = $q.defer();

        $http.get(tripsApi)
        .success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    var getTripById = function (id) {
        var deferred = $q.defer();

        $http.get(tripsApi + '/' + id, { headers: authorization.getAuthorizationHeader() })
        .success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }

    var getFilteredTrips = function (page, orderBy, orderType, from, to, finished, onlyMine) {
        var deferred = $q.defer();

        //orderBy = orderBy || "";
        //orderType = orderType || "";
        //from = from || "";
        //to = to || "";
        //finished = finished || false;
        //onlyMine = onlyMine || false;

        $http.get(tripsApi + '?Page=' + page + '&OrderBy=' + orderBy
            + '&OrderType=' + orderType + '&From=' + from 
            + '&To=' + to + '&Finished=' + finished + '&OnlyMine=' + onlyMine
            ,
             { headers: authorization.getAuthorizationHeader() })
         .success(function (response) {
             deferred.resolve(response);
         }).error(function (err, status) {
             deferred.reject(err);
         });

        return deferred.promise;
    }

    var createTrip = function (trip) {
        var deferred = $q.defer();
        //console.log(trip);

        $http.post(tripsApi, trip, { headers: authorization.getAuthorizationHeader() })
         .success(function (response) {
             deferred.resolve(response);
         }).error(function (err, status) {
             deferred.reject(err);
         });

        return deferred.promise;
    }

    return {
        getTrips: getTrips,
        getFilteredTrips: getFilteredTrips,
        createTrip: createTrip,
        getTripById: getTripById
    };

});