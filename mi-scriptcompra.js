document.addEventListener("DOMContentLoaded", function(){
    var checkboxSegundoNombre = document.getElementById("tiene-segundo");
    var campoSegundoNombre = document.getElementById("segundo-nombre");
    var botonGuardar = document.getElementById("boton");
    var campoEdad = document.getElementById("edad");

    var form = document.getElementById("form");
    var radioEstudiantes = document.getElementById("estudiante");
    var radioCompletados = document.getElementById("completado");


    checkboxSegundoNombre.addEventListener("change", function(){
        if(checkboxSegundoNombre.checked){
            campoSegundoNombre.removeAttribute("disabled");
        }else{
            campoSegundoNombre.setAttribute("disabled", true);
            campoSegundoNombre.value = "";
        }
    });

    botonGuardar.addEventListener("click", function(){
        var edad = campoEdad.value;
        edad = parseInt(edad);
        alert(edad + 2);
    });

    radioEstudiantes.addEventListener("change", function(){
        divOtorgado.style.display = "none";
    });

    radioCompletados.addEventListener("change", function(){
        divOtorgado.style.display = "block";
    });
});