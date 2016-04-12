(function () {
    "use strict";


    angular.module('app').config(function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'app/views/home.html',
                title: 'Way2 - WebTest',
                reloadOnSearch: false
            }).
            when('/alexRepos', {
                templateUrl: 'app/views/alexRepos.html',
                title: 'Repositorios do ALexandre',
                reloadOnSearch: false
            }).
             when('/alexRepo/:name', {
                 templateUrl: 'app/views/alexRepo.html',
                 title: 'Repositorio',
                 reloadOnSearch: false
             }).
            when('/repos', {
                templateUrl: 'app/views/repos.html',
                title: 'Repositorios',
                reloadOnSearch: false
            }).
             when('/repo/:id', {
                 templateUrl: 'app/views/repo.html',
                 title: 'Repositorio',
                 reloadOnSearch: false
             }).
            when('/favourites', {
                templateUrl: 'app/views/favourites.html',
                title: 'Favoritos',
                reloadOnSearch: false
            }).
             when('/favourite/:id', {
                 templateUrl: 'app/views/favourite.html',
                 title: 'Favorito',
                 reloadOnSearch: false
             }).
            when('/about', {
                templateUrl: 'app/views/about.html',
                title: 'Sobre',
                reloadOnSearch: false
            }).
            otherwise({
                redirectTo: '/'
            });
    });

})();