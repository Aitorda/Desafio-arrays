/* let nombre = "andres";
let edad = 5;
let verdad = true;
let falso = false;

console.log(verdad);
console.log(falso); */

/* 
// Estructura del condicional if
 if(condicion) {
    //codigo a realizar cuando la condicion es verdadera
 }
 */
/* if (true) {
    console.log("si la condicion es verdadera");
} */
/* if (false) {
    console.log("si la condicion es verdadera");
}
 */

/* let edad = 24;

if (edad===25){
    console.log("tienes 25");
}else{
    console.log("no tienes 25");
} */

/* let respuesta = prompt("terminaste la terea little");

if (respuesta === "si"){
    alert("podes sacar a chihuahua");
}else {
    alert("se quedan adentro con chihuahua");
}
 */

/* let edad = 70;

if( edad <20) {
    console.log("la edad es menor a 20");
}else if (edad <40 ) {
    console.log("la edad es menor a 40");
}else if( edad <70){
    console.log("la edad es menor a 70");
}else {
    console.log("la edad es mayor o igual a 70");
}
 */
/* /* let numero = 10;

let esMayor10 = (numero > 10);
if(esMayor10) {
    console.log("es mayor");
}else {
    console.log("es menor");
} */

// && todas deben ser verdad
//    almenos una tiene que ser verdad
/* console.log(true && true);
console.log(false && true);
console.log(false && false);
 */

// como EJEMOPLO para ingresar usuario para que NOO este vacio
/* let nombre = prompt ("ingrese su nombre");
let edad = prompt ("ingrese su edad");

if (nombre !== "" && edad !== "" ){
    alert("datos correctos")
}else {
    alert("datos incorrectos")
}
 */
/* 
let nombre = "andres";
let edad = 5;

console.log(`Hola ${nombre}, tu edad es ${edad}`);
 */
// practica clase 3

let usuario = prompt("ingrese usuario")
let contrasena = prompt("ingrese pasword")

while( usuario!= "juan"){
    alert("usuario erroneo");
    usuario = prompt("ingrese usuario")
}
while( contrasena === "2021 "){
    alert("no ingreso pasword");
    contrasena= prompt(" ingreso pasword")
}



