(function () {
    'use strict';
    angular.module('application').factory('productsService', function ($http, $q) {
        return {
            get: function get() {
                var deferred = $q.defer();
                $http.get('/api/Products').success(deferred.resolve).error(deferred.reject);
                return deferred.promise;
            }
        };
    });

})();