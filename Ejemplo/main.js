// Creación del modulo
var ejemploSofttek = angular.module('ejemploAngular', ['ui.router','ngStorage']);

// Configuracion de las rutas
ejemploSofttek.config(function($stateProvider, $urlRouterProvider) {
    
    // Para las URL que no esten ruteadas.
    $urlRouterProvider.otherwise("/errorPage");
    
    // Ahora configuramos los states.

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "/views/home.html",
          controller : 'mainController',
          data: {
            title: 'Home'
          }
        })
        .state('home2', {
          url: "",
          templateUrl: "/views/home.html",
          controller : 'mainController',
          data: {
            title: 'Home'
          }
        })
        .state('usuario', {
          url: "/usuario",
          templateUrl: "/views/usuario.html",
          controller : 'usuarioController',
          data: {
            title: 'Usuario'
          }
        })
        .state('contacto', {
          url: "/contacto",
          templateUrl: "/views/contacto.html",
          controller : 'contactoController',
          data: {
            title: 'Contacto'
          }
        })
        .state('error', {
          url: "/errorPage",
          templateUrl: "views/error.html",
          data: {
            title: 'Error'
          }
        });
});

// Configuracion de controllers
ejemploSofttek.controller('mainController', function($scope, $state) {
    $scope.message = 'Hola, Mundo!';

    $scope.redirectToUsuario = function(){
        $state.go('usuario');
    }

    $scope.redirectToContacto = function(){
        $state.go('contacto');
    }

    $scope.redirectToHome = function(){
        $state.go('home');
    }
});

ejemploSofttek.run();