(function () {
    'use strict';

    angular.module('app').controller('RepoController', RepoController);

    RepoController.$inject = ['$http', '$window', '$routeParams', '$scope'];

    function RepoController($http, $window, $routeParams, $scope) {

        var vm = this;
        vm.title = 'Repositório';
        vm.getRepo = getRepo;
        vm.goBack = goBack;
        vm.model = null;
        vm.isOutDated = false;
        var uri = $window.localStorage.getItem('uriRepo');

        function getRepo() {

            if ($routeParams.id !== undefined) {

                $http.get(uri + '/?id=' + $routeParams.id)
                    .success(function funSuccess(data) {
                        vm.model = data;
                        if (vm.model.Updated_At !== null) {
                            vm.isOutDated = (moment() > moment(vm.model.Updated_At));
                            vm.model.Updated_At = moment(vm.model.Updated_At).format('DD/MM/YYYY');
                        }

                        vm.title = vm.model.Name;
                    })
                    .catch(function funError(error) {
                        alert('Falha ao acessar os dados - verifique a rede');
                    });
            }
        }

        function goBack() {
            $window.history.back();
        }

        $scope.$watch('vm.model.IsFavourite', function (newValue, oldValue) {

            if (newValue !== undefined && oldValue !== undefined) {

                if (newValue) {

                    $http.post(uri, vm.model)
                    .success(function funSuccess(data) {
                    })
                    .catch(function funError(error) {
                        alert('Falha ao adicionar favorito!');
                    });
                }

            }
        });

        getRepo();
    }

})();