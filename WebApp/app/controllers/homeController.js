
(function () {
    'use strict';

    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$window', '$location'];

    function HomeController($window, $location) {

        var vm = this;
        vm.title = 'Home';
        vm.goTo = goTo;

        function goTo(uri) {
            $location.path('/' + uri);
        }

        function setUriServices() {
            $window.localStorage.setItem('uriGitHub', 'api/githubalexandre');
            $window.localStorage.setItem('uriRepo', 'api/repos');
            $window.localStorage.setItem('uriFav', 'api/favourite');
        }

        setUriServices();
    }

})();