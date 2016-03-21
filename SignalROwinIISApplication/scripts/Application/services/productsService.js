(function () {
    'use strict';
    angular.module('application').factory('productsService', function ($http, $q, bussinessProcFlow, Restangular) {
        return bussinessProcFlow.extend({
            get: function get() {

                return Restangular.all('api/Products').getList();


                //var deferred = $q.defer();
                //$http.get('/api/Products').success(deferred.resolve).error(deferred.reject);
                //return deferred.promise;
            }
            
        });
    });

})();