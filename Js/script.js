
var cantidadEntradas = document.getElementById("cantidadEntrada");

const botonCalcular = document.getElementById("botonCalcular");

var categoria = document.getElementById("categoria");

const tickets = 200;

var costofinal = 0;

var estudiante = 0.15;




function resumen(categoria){

    if (categoria == "estudiante") {
    costofinal =  (cantidadEntradas*tickets*estudiante).value;
    }

    else if (categoria == "junior"){
    costofinal =  (cantidadEntradas*tickets*0.50);
    }

    else if (categoria == "trainee"){
    costofinal =  (cantidadEntradas*tickets*0.80);
    }
console.log(categoria)

console.log(costofinal)

return costofinal;

}

botonCalcular.addEventListener('click',resumen)