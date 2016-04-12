(function () {
    'use strict';

    angular.module('app').controller('AlexReposController', AlexReposController);

    AlexReposController.$inject = ['$http', '$location', '$window'];

    function AlexReposController($http, $location, $window) {

        var vm = this;
        vm.title = 'Repositórios do ALexandre';
        vm.Items = [];
        vm.goToRepo = gotoRepo;


        function gotoRepo(name) {
            if (name) {
                $location.path('/alexRepo/' + name);
            }
        }

        function load() {

            var uri = $window.localStorage.getItem('uriGitHub');

            $http.get(uri)
                 .success(function funSuccess(data) {

                     for (var i = 0; i < data.length; i++) {
                         vm.Items.push(data[i]);
                     }
                 })
                 .catch(function funError(error) {
                     alert('Falha ao acessar os dados!');
                 });

        }

        load();

    }

})();