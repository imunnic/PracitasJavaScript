// import { personas } from "./json.js";

//clases
class Usuario{
    idUser;
    nombre;
    nombreUser;
    email;
    empresa;
    direccion;

    constructor(){
        this.idUser="";
        this.nombre="";
        this.nombreUser="";
        this.email = "";
        this.empresa = "";
        this.direccion = {calle:"",ciudad:"", codigoPostal:""};
    }

    getId(url){
        return this.idUser;
    }
}
//main
//definición de variables
sessionStorage.setItem("practica", "Práctica Final ECMACScript");
console.log(sessionStorage.getItem("practica"));
var imagenes = ["./images/imagen1.jpeg","./images/imagen2.jpeg", "./images/imagen3.jpeg", "./images/imagen4.jpeg"];
var contadorImagen = 0;
var reloj;
// const nombres = data.map(persona => persona.name);
// console.log(nombres);
var direccionPrueba = {calle:"Gravina 7", ciudad: "Roma", codigoPostal:"41449"}

//crea un usuario
var userPrueba = new Usuario();
//le asigna las propiedades
userPrueba.nombre = "Prueba practica final";
userPrueba.nombreUser = "PruebaPF7";
userPrueba.email = "pruebapf7@hotmail.com";
userPrueba.empresa = "Leroy Meril";
userPrueba.direccion = direccionPrueba;
userPrueba.url = "https://prueba.dev/api/users/102";
//muestra por consola
console.log(userPrueba.nombre);
console.log(userPrueba.nombreUser);
console.log(userPrueba.email);
console.log(userPrueba.empresa);
console.log(userPrueba.direccion.calle);
console.log(userPrueba.direccion.ciudad);
console.log(userPrueba.url);

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

// Usar fetch para leer el archivo JSON
// fetch(URL)
//   .then(response => response.json()) // Convertir la respuesta a formato JSON
//   .then(data => {
//     // Acceder a la lista de personas
//     const personas = data.personas;

//     // Iterar sobre cada persona y mostrar el nombre
//     personas.forEach(persona => {
//       console.log(persona.nombre);
//     });
//   })
//   .catch(error => console.error('Error al cargar el archivo JSON:', error));

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
