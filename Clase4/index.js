/* 
estructura de una funcion
*/








/* const venta = (x,y) => x-y;

let stockInicial= 10;
let stockFinal = 3;

let mercaderiaVendida = venta(stockInicial,stockFinal);

console.log(mercaderiaVendida);
 */

// funcion suma
/* function sumar (num1,num2) {
    return num1+num2 ;
}
let resultado = sumar(4,5);
console.log(resultado-20);
 */

// variable global y la q esta adentro de los corchetes es local
// desafio complementario
// pago en efectivo o tarjeta de credito let metodoPago = prompt ("ingrese metodo de pago").toLowerCase();

/* let cash ="efectivo";
let tc = "tarjeta de credito";

while ((metodoPago !== cash) || (metodoPago !== tc)) {
    alert ("elija metodo de pago correcto");
    metodoPago = prompt ("ingrese metodo de pago").toLowerCase();
}
let unidades = parseInt( prompt("ingrese cuantas unidades quiere comprar"));
let compraMinima = unidades >=10;

if ((metodoPago === cash) || (metodoPago === tc) && compraMinima) {
    alert ("En horabuena, tiene descuento por cantidad");
} else if ((metodoPago !== cash) || (metodoPago !== tc)) {
    alert ("debe ingresar un metodo de pago valido");
}else {
    alert ("compra minima de 10 unidades para acceder al descuento");
} 

 */

/* let resultado =0;

function adicionar (num1, num2) {
    resultado = num1 + num2;
}
adicionar (3,5);
console.log(resultado); */

/* let noches = parseint(prompt ("ingrese cantidad de noches que le gustaria hospedarse"));

if (noches <= 2) {
    alert ("la cantidad de noches minimas para hospedarse es de 3 noches ")
}else {
    alert ("cumple con la cantidad minima")
}
 */

/* function mensaje () {
    console.log("Hola a todos");
}

mensaje (); */ // siemppre pongo asi para llamar a la funcionS

/* function pedirDato () {
    let nombre = prompt (" ingresar nombre");
    alert ("El nombre ingresado es: "+ nombre);
}
pedirDato ();
 */


// si quiero editar algo a lo que se muestre 

/* function pedirDato () {
    let nombre = prompt ("Hola como estas? ingresar nombre");
    alert ("El nombre ingresado es: "+ nombre);
}
pedirDato (); */


// PARAMETROS 

/* function pedirDatos (nombre,apellido) {
    console.log(`hola como estas ${nombre} ${apellido}`);
}
pedirDatos ("andres","de aguirre");
pedirDatos ("camila", "de aguirre"); */

// CUANDO USO RETURN DEBO DEFINIR UNA VARIABLE PARA QUE ME DEVUELVA ESE RETURN, EN ESTE EJEMPLO
// ES RESULTADO

/* function sumar (num1, num2) {
    return num1 +num2
}
let resultado = sumar (3,4);

console.log(resultado -20); */

// SCOPE: me determina alcance de la variable, alcance LOCAL o GLOBAL dependiendo si esta o no dentro 
// del bloque.Los parametros de una funcion van a ser locales

/* let resultado = 0; // global

function adicionar (num1, num2) {
    resultado = num1 + num2;   // a traves de resultado reemplazo variable global a local
}
adicionar (3,5);
console.log(resultado);

 */
// EJ en este caso resultado va a pertenecer a cada fc ya que es LOCAL
/* 
function dividir (num1, num2) {
    let resultado = num1/num2
    return resultado
}
function restar (num1, num2) {
    let resultado = num1 - num2
    return resultado
} */

// FUNCIONES ANONIMAS: se usan para asignarlas a variables.

/* const suma = function (num1, num2) {return num1 +  num2;}

console.log(suma(4,5));
 */
// FUNCIONES FLECHA : son funciones anonimas con una ESTRUCTURA definida
/* 
const suma = (x,y) => {return x+y} ;//Estrucuta, recibe argumentos para luego retornar lo de los {}
const mensaje = nombre => `hola ${nombre}`//Sin()ya que es un solo parametro, sin {} no necesito return.

console.log(suma(4,5));
console.log(mensaje("Andres"));
 */
//EJEMPLO

const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const iva = x => x * 0.21;

let precioProducto = 1000;
let descuento = 300;

let resultado = resta (suma (precioProducto,iva(precioProducto)),descuento);

console.log(resultado);