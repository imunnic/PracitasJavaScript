 import { PERSONAS } from "./json.js";

//clases
class Usuario{
    #idUser;
    #nombre;
    #nombreUser;
    #email;
    #empresa;
    #direccion;

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
var usuarios;
var usuariosCiudad1;
var usuariosCiudad2;
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
document.getElementById('ciudadSelect').addEventListener('change', cambiarSeleccion);
document.getElementById('imagen').onclick = cambiarImagen;
document.getElementById('usuariosLink').onclick = mostrarUsuarios;

//definir la hora del reloj
reloj = () => {
    var fecha = new Date();
    return fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
};

//ir actualizando la hora del reloj cada segundo
setInterval(actualizarHora, 1000)

//Guarda los usuarios del json como Usuario en un array
usuarios = mapPersonas();
usuarios.forEach(element => {
    console.log(element.nombre);
});

//guarda los usuarios de cada una de las ciudades en un array distinto
usuariosCiudad1 = usuarios.filter(persona => persona.direccion.ciudad == "Gwenborough");
usuariosCiudad2 = usuarios.filter(persona => persona.direccion.ciudad == "Wisokyburgh");

//imprime los usuarios de cada ciudad
console.log("Usuarios de Gwenborough");
usuariosCiudad1.forEach(persona => console.log(persona.nombre));
console.log("Usuarios de Wisokyburgh");
usuariosCiudad2.forEach(persona => console.log(persona.nombre));

usuariosCiudad1.sort((a,b) => compareString(a.nombre,b.nombre));
console.log("Usuarios de Gwenborough ordenados por nombre");
usuariosCiudad1.forEach(persona => console.log(persona.nombre));
usuariosCiudad2.sort((a,b) => compareString(a.nombre,b.nombre));
console.log("Usuarios de Gwenborough ordenados por nombre");
usuariosCiudad2.forEach(persona => console.log(persona.nombre));

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

//Trabajo con json

function parsePersona(numeroObjetoJson){
    var persona = new Usuario();
    persona.nombre = PERSONAS[numeroObjetoJson].name;
    persona.nombreUser = PERSONAS[numeroObjetoJson].username;
    persona.email = PERSONAS[numeroObjetoJson].email;
    persona.empresa = PERSONAS[numeroObjetoJson].company.name;
    persona.direccion.calle = PERSONAS[numeroObjetoJson].address.street;
    persona.direccion.ciudad = PERSONAS[numeroObjetoJson].address.city;
    persona.direccion.codigoPostal = PERSONAS[numeroObjetoJson].address.zipcode;
    persona.url = PERSONAS[numeroObjetoJson].url;
    return persona;
}

function mapPersonas(){
    let arrayPersonas = new Array(PERSONAS.length);
    let i = 0;
    PERSONAS.forEach(element => {
        let persona = parsePersona(i);
        arrayPersonas[i] = persona;
        i++;
    })
    return arrayPersonas;
}

function compareString(a,b){
    if (a > b) {
        return 1;
    } else if (a == b) {
        return 0;
    } else {
        return -1;
    }
}

function mostrarUsuarios(){
    let usuariosOrdenados = usuarios.sort((a,b) => compareString(a.nombre, b.nombre));
    let i = 1;
    usuariosOrdenados.forEach(usuario => {
        document.getElementById("usuariosLabel").innerHTML += "Usuario " + i + ":" + '<br>' +
        "  - Nombre: " + usuario.nombre + '<br>' +
        "  - Usuario: " + usuario.nombreUser + '<br>' +
        "  - Email: " + usuario.email + '<br>' +
        "  - Empresa: " + usuario.empresa + '<br>';
        i++;
    }) 
}

function mostrarUsuariosFiltrados(filtro){
    document.getElementById("usuariosLabel").innerHTML = "";
    let usuariosOrdenados = usuarios.sort((a,b) => compareString(a.nombre, b.nombre));
    let usuariosFiltrados = usuariosOrdenados.filter(usuario => usuario.direccion.ciudad.includes(filtro));
    let i = 1;
    usuariosFiltrados.forEach(usuario => {
        document.getElementById("usuariosLabel").innerHTML += "Usuario " + i + ":" + '<br>' +
        "  - Nombre: " + usuario.nombre + '<br>' +
        "  - Usuario: " + usuario.nombreUser + '<br>' +
        "  - Email: " + usuario.email + '<br>' +
        "  - Empresa: " + usuario.empresa + '<br>';
        i++;
    }) 
}

function cambiarSeleccion(){
    let seleccion = document.getElementById('ciudadSelect').value;
    mostrarUsuariosFiltrados(seleccion);
}
