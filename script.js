//main
//definición de variables
sessionStorage.setItem("practica", "Práctica Final ECMACScript");
console.log(sessionStorage.getItem("practica"));
var imagenes = ["./images/imagen1.jpeg","./images/imagen2.jpeg", "./images/imagen3.jpeg", "./images/imagen4.jpeg"];
var contadorImagen = 0;
var reloj;
const URL = "./json.js"


//escucha de eventos
document.getElementById('clock').addEventListener('mouseover', ponerColorHora);
document.getElementById('clock').addEventListener('mouseleave', quitarColorHora);
document.getElementById('titulo').addEventListener('mouseover', ponerColorTitulo);
document.getElementById('titulo').addEventListener('mouseleave', quitarColorTitulo);
document.getElementById('imagen').onclick = cambiarImagen;
//definir la hora del reloj
reloj = () => {
    var fecha = new Date();
    return fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

};
//ir actualizando la hora del reloj cada segundo
setInterval(actualizarHora, 1000)


//definicion de funciones
function actualizarHora(){
    document.getElementById('clock').innerHTML = reloj();
}

function ponerColorHora(){
    document.getElementById('clock').style.color = '#ffff00';
}

function quitarColorHora(){
    document.getElementById('clock').style.color = '#000000';
}

function ponerColorTitulo(){
    document.getElementById('titulo').style.color = '#ffff00';
}

function quitarColorTitulo(){
    document.getElementById('titulo').style.color = '#000000';
}

function cambiarImagen(){
    contadorImagen == contadorImagen++;
    if (contadorImagen >= imagenes.length){
        contadorImagen = 0;
    }
    document.getElementById('imagen').src = imagenes[contadorImagen];
}