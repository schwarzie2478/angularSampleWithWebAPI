(function (window, document) {
    'use strict';

    /*
        bussinessProcFlow wraps the functions of a service with a given wrapper function or with the default defined here.

    */

    var bussinessProcFlow = function ($log, $q, createRetryService) {
        var self = this;

        function extend(service, wrapFunc )
        {
            wrapFunc = wrapFunc || execute;
            for(var prop in service)
            {
                if(typeof(service[prop]) == 'function')
                {
                    service[prop] = wrap(service[prop], wrapFunc);
                }
            }
            return service;
        }



        function wrap(func, wrapFunc) {
            return function () {
                return wrapFunc(func);
            }
        }
        /* Default wrapper function:
             log before and after
             can repeat the function if it fails
           */
        function execute(action) {
            var deferred = $q.defer();
            $log.debug('calling method  ' + (action ? '<' + action.name + '>' : "<anonymous>"));
            try {
                createRetryService.repeat(action).then(deferred.resolve, deferred.error);
            } catch (e) {
                //Should we ever come here? Yes when action is not valid...
                handleError(e);
                deferred.error(e);
            }
            $log.debug('calling method ' + (action ? '<' + action.name + '>' : '<anonymous>') + " finished");
            return deferred.promise;
        }


        function handleError(error) {
            $log.error(error);
        }
        return {
            execute: execute,
            extend: extend
        };
    };
    angular.module('Framework.Services').factory('bussinessProcFlow', bussinessProcFlow);
    
})(window, document);