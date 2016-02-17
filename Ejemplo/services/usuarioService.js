angular
    .module('ejemploAngular')
    .factory('usuarioService', UsuarioService);

function UsuarioService($localStorage){

	var service = {};

	service.save = save;
	service.get = get;

	function save(data){
		$localStorage.usuario = data;
		alert('Guarde el contacto');
	}

	function get(){
		alert('Obtuve el contacto');
		var usuario = $localStorage.usuario 
		return usuario; 
	}

	return service;
}