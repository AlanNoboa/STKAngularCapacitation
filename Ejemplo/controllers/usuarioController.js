angular.module('ejemploAngular')
	.controller('usuarioController', ['$scope','usuarioService',UsuarioController]);
		
	function UsuarioController($scope, usuarioService){
		$scope.message = 'Estoy en usuario';

		function obtenerUsuario(){
			$scope.contacto = usuarioService.get();
		}

		obtenerUsuario();
	}
