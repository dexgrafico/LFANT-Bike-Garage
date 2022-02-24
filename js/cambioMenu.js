
var propCambioMenu = {

	posicion: window.pageYOffset,
	menuPC: document.getElementById('menu-bar-pc'),
	menuMovil: document.getElementById('menu-bar-movil')
}

var metCambioMenu = {

	inicio: function () {
		
		window.addEventListener('scroll', metCambioMenu.cambiarEncabezado);

	},

	cambiarEncabezado: function(){

		propCambioMenu.posicion = window.pageYOffset;

		if ( propCambioMenu.posicion > 0 ) {
			propCambioMenu.menuPC.className = propCambioMenu.menuPC.className + ' active';
			propCambioMenu.menuMovil.className = propCambioMenu.menuMovil.className + ' active';

		} else {
			propCambioMenu.menuPC.className = 'menu-bar-pc';
			propCambioMenu.menuMovil.className = 'menu-bar-movil';
		}
	}
	
}

metCambioMenu.inicio();