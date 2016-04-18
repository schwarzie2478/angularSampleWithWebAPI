(function () {
    'use strict';
    angular.module('application').factory('productsService', function ($http, $q, bussinessProcFlow, Restangular, retryService) {
        return {
            get: function get() {
                return polly()
                    .handle(retryService.handleHttpErrors)
                    .retry(3)
                    .execute(function () { return Restangular.all('api/Products').getList(); });




                //return polly().retry(2).execute(function () { return Restangular.all('api/Products').getList(); });

                //return retryService.repeat(function () { return Restangular.all('api/Products').getList(); });

                //return Restangular.all('api/Products').getList();

                //var deferred = $q.defer();
                //$http.get('/api/Products').success(deferred.resolve).error(deferred.reject);
                //return deferred.promise;
            },
            getProduct: function get(productId) {
                return polly().retry(3).execute(function () { return Restangular.one('api/Products', productId).get(); });
            }
            
        };
    });

})();