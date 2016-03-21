
(function (window, document) {
    'use strict';
    window.appName = 'application';

    var applicationModule = angular.module(appName, ['Framework.Services', 'Restangular']);

    // SignalR's hub object.
    var productMessageHub = $.connection.productMessageHub;

    $(function () {
        $.connection.hub.logging = true;
        $.connection.hub.start();
    });

    angular.module(appName).value('productMessageHub', productMessageHub);

})(window, document);