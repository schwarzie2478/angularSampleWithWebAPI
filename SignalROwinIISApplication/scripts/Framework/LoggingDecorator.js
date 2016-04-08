(function () {
    //Don't add use strict here!
    //It prevents the use of certain properties for resolving a stack trace on a call...
    //"use strict";
    
    /*
        We want to decorate the logging calls with our own loggging implementations
        In this case Log4Javascript is used to provide a comfortable way to send logging to the serverside...
    */
    angular
      .module(appName)
      .config(["$provide", function ($provide) {
          // Use the `decorator` solution to substitute or attach behaviors to
          // original service instance; @see angular-mocks for more examples....
          var self = this;
          var log = log4javascript.getDefaultLogger();
          var ajaxAppender = new log4javascript.AjaxAppender('api/logging');
          ajaxAppender.addHeader("Content-Type", "application/json");

          ajaxAppender.setWaitForResponse(true);
          ajaxAppender.setLayout(new log4javascript.JsonLayout());
          log.addAppender(ajaxAppender);


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
              var logFunctions = ["fatal","error","warn","info", "debug","trace"];
              logFunctions.forEach(function(funcName) {
              // Save the original $log.debug()
              var originalFn = $delegate[funcName];
              //var log = log4javascript.getDefaultLogger();
              $delegate[funcName] = function () {
                  var args = [].slice.call(arguments);

                  // Prepend timestamp
                  args[0] = now() + ' - ' + args[0];


                  var err = getErrorObject();//throw an error to generate the stack information we want to capture 
                  var stack = err.stack.split("\n").slice(4).join('\n');
                  log[funcName](args.join(', ') + '\nStack: \n' + stack);

                  
                  // Call the original with the output prepended with formatted timestamp
                  originalFn.apply(null, args); 
              };
                  
              }, this);

              return $delegate;
          }]);
      }]);

})();