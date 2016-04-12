(function () {
    "use strict";

    angular.module('app', ['ngRoute', 'mobile-angular-ui', 'mobile-angular-ui.gestures'])
        .run(['$rootScope', function runfunction($rootScope) {

            $rootScope.$on('$routeChangeSuccess', function routefunction(event, current, previous) {
                $rootScope.title = current.$$route.title;
            });

        }]);

})();