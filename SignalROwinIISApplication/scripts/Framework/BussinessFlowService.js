(function (window, document) {
    'use strict';

    /*
        bussinessProcFlow handle the call to the external source, tries again if service was not availible

    */

    var bussinessProcFlow = function ($log, $q) {
        $log.debug("using bussinessProcFlow");
        $log.debug((log4javascript ? "logger found" : "logger not loaded"));
        var self = this;
        try {
            self.log = log4javascript.getDefaultLogger();
            self.log.debug("Hello from log4javascript");

        } catch (e) {
            $log.debug("Loading of the logger failed");
            $log.debug(e);
        }
        function call(action) {
            var deferred = $q.defer();
            $log.debug('calling method= ' + (action ? action.constructor.name : "undefined"));
            try {
                action().then(deferred.resolve, deferred.error);
            } catch (e) {
                handleError(e);
            }
            $log.debug('calling method= ' + (action ? action.name : 'undefined') + " finished");
            return deferred.promise;
        }


        function handleError(error) {
            $log.error(error);
        }
        return {
            call: call
        };
    };
    angular.module('Framework.Services').factory('bussinessProcFlow', bussinessProcFlow);
    
})(window, document);