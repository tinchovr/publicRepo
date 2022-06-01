// const formulario =document.getElementById(formulario);
// const imputs = document.querySelectorAll('#formulario input')

var nombre = document.getElementById('nom');
var apellido = document.getElementById('ape');
var tel = document.getElementById('tel');
var error = document.getElementById('error')
error.style.color = 'red';

 
function enviarForm(){
    console.log('Enviando formulario...');
    var mensajesError = [];

if(nombre.value === null || nombre.value === '') {
    mensajesError.push('Ingresa tu nombre');
}

if(nombre.value.length < 3 || nombre.value === '') {
    mensajesError.push('El nombre es demasiado corto');
}

if(apellido.value.length < 3 || apellido.value === '') {
    mensajesError.push('El apellido es demasiado corto');
}
    
if(apellido.value === null || apellido.value === '') {
    mensajesError.push('Ingresa tu apellido');
} 

if(tel.value === null || tel.value === '') {
    mensajesError.push('Ingresa tu teléfono así te llamamos');
}
    error.innerHTML = mensajesError.join(', <br> ');
    return false;
} 
