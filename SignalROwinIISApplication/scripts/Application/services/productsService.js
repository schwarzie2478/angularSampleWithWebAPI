(function () {
    'use strict';
    angular.module('application').factory('productsService', function ($http, $q, bussinessProcFlow, Restangular) {
        return {
            get: function get() {

                return polly().retry(2).executeforPromise(Restangular.all('api/Products').getList()).;


                //var deferred = $q.defer();
                //$http.get('/api/Products').success(deferred.resolve).error(deferred.reject);
                //return deferred.promise;
            }
            
        };
    });

})();