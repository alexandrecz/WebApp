(function () {
    'use strict';

    angular.module('app').controller('AlexRepoController', AlexRepoController);

    AlexRepoController.$inject = ['$http', '$window', '$routeParams', '$scope'];

    function AlexRepoController($http, $window, $routeParams, $scope) {

        var vm = this;
        vm.title = 'Repositório';
        vm.getRepo = getRepo;
        vm.goBack = goBack;
        vm.model = null;
        vm.isOutDated = false;
        var uri = $window.localStorage.getItem('uriGitHub');

        function getRepo() {


            if ($routeParams.name !== undefined) {

                vm.title = $routeParams.name;


                $http.get(uri + '/?name=' + $routeParams.name)
                    .success(function funSuccess(data) {
                        vm.model = data;
                        if (vm.model.Updated_At !== null) {
                            vm.isOutDated = (moment() > moment(vm.model.Updated_At));
                            vm.model.Updated_At = moment(vm.model.Updated_At).format('DD/MM/YYYY');
                        }
                    })
                    .catch(function funError(error) {
                        alert('Falha ao acessar os dados!');
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
                        alert('Falha ao adicionar favovorito!');
                    });
                }

            }
        });

        getRepo();

    }

})();