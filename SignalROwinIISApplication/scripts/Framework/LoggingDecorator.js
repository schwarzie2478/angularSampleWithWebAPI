(function () {
    //"use strict";
    angular
      .module(appName)
      .config(["$provide", function ($provide) {
          // Use the `decorator` solution to substitute or attach behaviors to
          // original service instance; @see angular-mocks for more examples....
          var self = this;

          function args2str(f) {
              var args = Array.prototype.slice.call(f.arguments);
              return '[' + args.join(",") + ']';
          }


          function getErrorObject() {
              try { throw Error('') } catch (err) { return err; }
          }

          function now(){
              var date = new Date();
              var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

              return str;
          }

          $provide.decorator('$log', ["$delegate", function ($delegate) {
              // Save the original $log.debug()
              var debugFn = $delegate.debug;
              var log = log4javascript.getDefaultLogger();
              $delegate.debug = function () {
                  var args = [].slice.call(arguments);

                  // Prepend timestamp
                  args[0] = now() + ' - ' + args[0];


                  var err = getErrorObject();
                  var stack = err.stack.split("\n").slice(4).join('\n');
                  log.debug(args.join(', ') + '\nStack: \n' + stack);

                  
                  // Call the original with the output prepended with formatted timestamp
                  debugFn.apply(null, args)
              };

              return $delegate;
          }]);
      }]);

})();