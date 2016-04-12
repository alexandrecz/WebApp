(function () {
    'use strict';

    angular.module('app').controller('FavouritesController', FavouritesController);

    FavouritesController.$inject = ['$http', '$location', '$window'];

    function FavouritesController($http, $location, $window) {

        var vm = this;
        vm.title = 'Favoritos';
        vm.Items = [];
        vm.goToFav = gotoFav;


        function gotoFav(id) {
            if (id) {
                $location.path('/favourite/' + id);
            }
        }

        function load() {

            var uri = $window.localStorage.getItem('uriFav');

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