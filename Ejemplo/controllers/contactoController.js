angular.module('ejemploAngular')
	.controller('contactoController', ['$scope','usuarioService',ContactoController]);
		
	function ContactoController($scope, usuarioService){
		$scope.contacto = null;
		$scope.message = 'Estoy en contacto';

		$scope.guardarContacto = function(contacto){
			usuarioService.save(contacto);
		}
	}
