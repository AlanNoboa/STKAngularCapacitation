// Creación del modulo
var ejemploSofttek = angular.module('ejemploAngular', ['ui.router','ngStorage']);

// Configuracion de las rutas
ejemploSofttek.config(function($stateProvider, $urlRouterProvider) {

    // Para las URL que no esten ruteadas.
    $urlRouterProvider.otherwise("/errorPage");

    // Ahora configuramos los states.

      $stateProvider
        .state('app', {
          url: "",
          controller : 'mainController',
          templateUrl: "/views/main.html",
          data: {
            title: 'Home'
          },
          abstract:true
        })
        .state('app.home', {
          url: "/home",
          templateUrl: "/views/home.html",
          controller : 'homeController',
          data: {
            title: 'Home'
          }
        })
        .state('app.usuario', {
          url: "/usuario",
          templateUrl: "/views/usuario.html",
          controller : 'usuarioController',
          data: {
            title: 'Usuario'
          }
        })
        .state('app.contacto', {
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
ejemploSofttek.controller('homeController', function($scope, $state) {
    $scope.message = 'Hola, Mundo!';

});

// Configuracion de controllers
ejemploSofttek.controller('mainController', function($scope, $state) {
    $scope.message = 'Hola, Mundo!';

    $scope.redirectToUsuario = function(){
        $state.go('app.usuario');
    }

    $scope.redirectToContacto = function(){
        $state.go('app.contacto');
    }

    $scope.redirectToHome = function(){
        $state.go('app.home');
    }
});


ejemploSofttek.run();
