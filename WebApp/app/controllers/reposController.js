(function () {
    'use strict';

    angular.module('app').controller('ReposController', ReposController);

    ReposController.$inject = ['$http', '$location', '$window', '$scope'];

    function ReposController($http, $location, $window, $scope) {

        var vm = this;
        vm.title = 'Repositórios';
        vm.Items = [];
        vm.goToRepo = gotoRepo;
        vm.repoSearch = null;

        function gotoRepo(id) {
            if (id) {
                $location.path('/repo/' + id);
            }
        }

        function load() {

            var uri = $window.localStorage.getItem('uriRepo');

            if (vm.repoSearch !== null && vm.repoSearch !== "") {

                $http.get(uri + '/?name=' + vm.repoSearch)
                 .success(function funSuccess(data) {

                     for (var i = 0; i < data.length; i++) {
                         vm.Items.push(data[i]);
                     }
                 })
                 .catch(function funError(error) {
                     alert('Falha ao pesquisar!');
                 });
            }
        }


        $scope.$watch('vm.repoSearch', function (newValue, oldValue) {

            if (vm.repoSearch !== null) {

                if (newValue.length > 0) {
                    load();
                }
                else {
                    vm.Items.length = 0;
                }
            }

        });

        load();
    }

})();