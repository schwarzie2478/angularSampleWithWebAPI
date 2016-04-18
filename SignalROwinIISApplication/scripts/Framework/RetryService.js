
(function () {
    var retryService = function ($timeout,$log,$q) {

        var retryServiceInstance = function (func, args, maxAttempts, interval,errorFunc ) {

            var attempts = 0;
            var myArgs = args;
            var deferred = $q.defer();
            var handleErrorFunc = errorFunc || function () { return true };
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
        var handleHttpErrors = function (err) {
            //Retry if these conditions are return others?
            return _.includes([
                statusCodes.SERVICE_UNAVAILABLE,
                statusCodes.BAD_GATEWAY,
                statusCodes.GATEWAY_TIMEOUT]
                , error.status);

        }
        var repeat = function (func, args) {
            var repeater = retryServiceInstance(func, args, maxAttempts, delay);

            return repeater.repeat();
        };
        var repeatForSpecifiedErrors = function (func, args, errorFunc)
        {
            var repeater = retryServiceInstance(func, args, maxAttempts, delay, errorFunc);

            return repeater.repeat();
        }

        var repeatForSpecifiedErrorsWithPolly = function (func, args, errorFunc) {
            
            return polly().handle(errorFunc).retry(maxAttempts).execute(func);
        }


        return {
            repeat: repeat,
            repeatForSpecifiedErrors: repeatForSpecifiedErrors,
            handleHttpErrors: handleHttpErrors,
            setDefaults: setDefaults,
            getDefaults: getDefaults
        };
    };

    angular.module('Framework.Services').factory('retryService', retryService);
})();


