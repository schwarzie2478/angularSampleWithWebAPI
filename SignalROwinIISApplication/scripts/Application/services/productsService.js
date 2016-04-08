(function () {
    'use strict';
    angular.module('application').factory('productsService', function ($http, $q, bussinessProcFlow, Restangular, createRetryService) {
        return {
            get: function get() {
                return polly()
                    .handle(function (err) {
                        //Retry if these conditions are return others?
                        return _.includes([statusCodes.SERVICE_UNAVAILABLE, statusCodes.BAD_GATEWAY, statusCodes.GATEWAY_TIMEOUT], error.status);
                    })
                    .retry(3)
                    .execute(function () { return Restangular.all('api/Products').getList(); });



                //return polly().retry(2).execute(function () { return Restangular.all('api/Products').getList(); });

                //return createRetryService.repeat(function () { return Restangular.all('api/Products').getList(); });

                //return Restangular.all('api/Products').getList();

                //var deferred = $q.defer();
                //$http.get('/api/Products').success(deferred.resolve).error(deferred.reject);
                //return deferred.promise;
            }
            
        };
    });

})();