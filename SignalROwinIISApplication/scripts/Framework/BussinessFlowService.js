(function (window, document) {
    'use strict';

    /*
        bussinessProcFlow handle the call to the external source, tries again if service was not availible

    */

    var bussinessProcFlow = function ($log, $q) {
        $log.debug("using bussinessProcFlow");
        var self = this;
        try {
            self.log = log4javascript.getDefaultLogger();

        } catch (e) {
            $log.debug("Loading of the logger failed");
            $log.debug(e);
        }

        function extend(service)
        {
            for(var prop in service)
            {
                if(typeof(prop) == 'function')
                {
                    obj[prop] = wrap(obj[prop]);
                }
            }
        }
        function wrap(func) {
            return function () {
                call(func);
            }
        }

        function call(action) {
            var deferred = $q.defer();
            $log.debug('calling method  ' + (action ? '<' + action.name + '>' : "<anonymous>"));
            try {
                action().then(deferred.resolve, deferred.error);
            } catch (e) {
                handleError(e);
            }
            $log.debug('calling method ' + (action ? '<' + action.name + '>' : '<anonymous>') + " finished");
            return deferred.promise;
        }


        function handleError(error) {
            $log.error(error);
        }
        return {
            call: call,
            extend: extend
        };
    };
    angular.module('Framework.Services').factory('bussinessProcFlow', bussinessProcFlow);
    
})(window, document);