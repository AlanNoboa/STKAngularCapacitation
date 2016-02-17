// Creación del modulo
var ejemploSofttek = angular.module('ejemploAngular', ['ngRoute','ngStorage']);

// Configuracion de las rutas
ejemploSofttek.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : '/views/home.html',
            controller  : 'mainController'
        })
        .when('/usuario', {
            templateUrl : '/views/usuario.html',
            controller  : 'usuarioController'
        })
        .when('/contacto', {
            templateUrl : '/views/contacto.html',
            controller  : 'contactoController'
        })
        .when('/errorPage', {
            templateUrl : '/views/error.html'
        })
        .otherwise({
            redirectTo: '/errorPage'
        });
});

// Configuracion de controllers
ejemploSofttek.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

ejemploSofttek.run();