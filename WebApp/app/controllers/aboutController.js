(function () {
    'use strict';

    angular.module('app').controller('AboutController', AboutController);

    AboutController.$inject = ['$window'];

    function AboutController($window) {

        var vm = this;

        vm.title = 'Sobre';
        vm.info = 'WebApp -  Angular.js  + WebApi .NET';
        vm.version = 'beta';
        vm.developer = 'alexandre czechowicz';
    }

})();
