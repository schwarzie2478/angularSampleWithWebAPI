
(function () {
    var createRetryService = function ($timeout,$log,$q) {

        var createRetryServiceInstance = function (func, args, maxAttempts, interval) {

            var attempts = 0;
            var myArgs = args;
            var deferred = $q.defer();

            var onSuccess = function (response) {
                $log.debug("Succes in " + attempts + " attemp(s)");
                deferred.resolve(response);
            };

            var onFailed = function (response) {
                if (attempts < maxAttempts)
                {
                    $log.debug("Failed " + attempts + " times...")
                    return $timeout(repeat, interval);

                }

                deferred.error("Failed a maximum of " + attemps + " attempts");
            };

            var repeat = function () {
                attempts += 1;


                func.apply(null, args)
                                  .then(onSuccess, onFailed);
                return deferred.promise;
            };

            return {
                //return the function that will return the repeatable call
                repeat: repeat
            };
        };

        var maxAttempts = 3;
        var delay = 1000;

        var setDefaults = function (newMaxAttempts, newDelay) {
            maxAttempts = newMaxAttempts;
            delay = newDelay;
        };

        var getDefaults = function () {
            return {
                maxAttempts: maxAttempts,
                delay: delay
            };
        };

        var repeat = function (func, args) {
            var repeater = createRetryServiceInstance(func, args, maxAttempts, delay);

            return repeater.repeat();
        };

        return {
            repeat: repeat,
            setDefaults: setDefaults,
            getDefaults: getDefaults
        };
    };

    angular.module('Framework.Services').factory('createRetryService', createRetryService);
})();


