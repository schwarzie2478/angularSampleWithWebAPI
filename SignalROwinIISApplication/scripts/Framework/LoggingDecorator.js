(function () {
    "use strict";
    angular
      .module(appName)
      .config(["$provide", function ($provide) {
          // Use the `decorator` solution to substitute or attach behaviors to
          // original service instance; @see angular-mocks for more examples....

          $provide.decorator('$log', ["$delegate", function ($delegate) {
              // Save the original $log.debug()
              var debugFn = $delegate.debug;
              var log = log4javascript.getDefaultLogger();
              $delegate.debug = function () {
                  var args = [].slice.call(arguments),
                      now = (function () {
                          var date = new Date();
                          var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

                          return str;
                      })();
                  // Prepend timestamp
                  args[0] =  now + ' - ' +  args[0];

                  // do the logging to log4javascript
                  log.debug(args[0]);
                  // Call the original with the output prepended with formatted timestamp
                  debugFn.apply(null, args)
              };

              return $delegate;
          }]);
      }]);

})();