// ARREGLOS 22/6
/* 
const arr1 = [];   // arreglo VACIO
console.log(arr1);

const arr2 = [1,2,20,50];   // los elementos se separan por , y arrancan de posicion 0
const arr3 = ["camila", "ana", "jero"];
const diferentes = [1, "camila", true];

console.log(diferentes);
 */
// acceder a la posicion de un arreglo ponemos [] y la posicion dentro

/* console.log(diferentes[1]);
console.log(arr2[3]);

let resultado = arr2 [1]+ arr2 [3];
console.log(resultado);
 */
// para recorrer el arreglo usamos FOR, donde LENGTH es longitud :

/* for (let index = 0; index < arr2.length; index++ ) {  // que arranque desde posicion 0 y de uno en uno
    alert (arr2[index])
} */
// si tengo un arreglo y le quiero agregar algo extra uso el PUSH:

/* const arr3 = ["camila", "ana", "jero"];
arr3.push ("sofia");                   // asi agrego al final y con unshift agrega al comienzo
console.log(arr3);

 */
// POP y SHIFT
/* const arr3 = ["camila", "ana", "jero"];
arr3.pop() //me elimina el ultimo
console.log(arr3);
arr3.shift()  //saca al principio
console.log(arr3);
 */
// SPLICE : 2 parametros, elimina desde una posicion y una cantidad dada
/* const arr3 = ["camila", "ana", "jero", "tomas", "milton"];
arr3.splice (1,3); //posiciona en 1 y a partir de ahi elimina 3.
console.log(arr3); */

//JOIN : une los elementos del arreglo con lo q ponga en () sin modificar el arreglo
/* const arr3 = ["camila", "ana", "jero", "tomas", "milton"];
console.log(arr3.join("**")); */

// CONCAT: une arreglos
/* const arr3 = ["camila", "ana", "jero", "tomas", "milton"];
const arr4 = [4,5];
console.log(arr3.concat(arr4)); */

//SLICE:hace copia de un arreglo, coloco posicion y que cantidad a copiar (del numero es uno menos)
/* const arr3 = ["camila", "ana", "jero", "tomas", "milton"];
let recorte = arr3.slice (1,4);
console.log(recorte); */

//INDEXOF : me da la posicion en la que se encuentra un elemento, si no lo encuentra tira -1
/* const arr3 = ["camila", "ana", "jero", "tomas", "milton"];
console.log(arr3.indexOf("milton")); */

//INCLUDE : me dice si un elmento esta incluido o no en el arreglo
/* const arr3 = ["camila", "ana", "jero", "tomas", "milton"];
console.log(arr3.includes("camila")); */

//REVERSE: intercambia el orden
const arr3 = ["camila", "ana", "jero", "tomas", "milton"];
arr3.reverse();
console.log(arr3);