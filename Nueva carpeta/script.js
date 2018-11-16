document.addEventListener("DOMContentLoaded", function(){
	var precio=150;
	var costoEnvio = 0;
	var subtotal = 0;

	var campoCantidad = document.getElementById("cantidad");
	var encabezadoSubtotal = document.getElementById("subtotal");
	var encabezadoTotal = document.getElementById("total");
	var envioPremium = document.getElementById("premium");
	var totalEnvio = document.getElementById("total-envio");
	var envioExpress = document.getElementById("express");

	campoCantidad.addEventListener("change" , function(){
		var cantidad = campoCantidad.value;
		cantidad = parseInt(cantidad);

		subtotal = cantidad * precio;
		encabezadoSubtotal.innerHTML = subtotal;

		encabezadoTotal.innerHTML=subtotal * 1.22;
	});

	envioExpress.addEventListener("change", function() {
		costoEnvio= subtotal * 0.01;
		totalEnvio.innerHTML = costoEnvio;

		encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
	});
});
