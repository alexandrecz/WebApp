(function () {
    'use strict';

    angular.module('app').controller('FavoController', FavoController);

    FavoController.$inject = ['$http', '$window', '$routeParams'];

    function FavoController($http, $window, $routeParams) {

        var vm = this;
        vm.title = 'Favorito';
        vm.getFavo = getFavo;
        vm.goBack = goBack;
        vm.model = null;
        vm.isOutDated = false;
        var uri = $window.localStorage.getItem('uriFav');

        function getFavo() {

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
                        alert('Falha ao acessar os dados!');
                    });
            }
        }

        function goBack() {
            $window.history.back();
        }

        

        getFavo();
    }

})();