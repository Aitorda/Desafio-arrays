//  20/6 OBJETOS= representacion de algo que va a tener ciertas caracteristicas

/* let nombre = "andres"; //objeto
let edad = 50;
let domicilio = "Av siempre"

const persona = {      // cuando hay corchete me indica que es un OBJETO
    nombre : "andres",  // dentro del corchete van a ir la CLAVE : VALOR
    edad : 50,
    domicilio : "Av siempre",
} 
console.log(persona.nombre); // ponemos el OBJETO. y lo que queremos mostrar
console.log(persona.edad);
// tambien con []
console.log(persona["domicilio"]); */

// Cuando quiero agregar una caract al objeto, puede ser de 2 formas:
/* persona.apellido = "de aguirre"; 
persona["padre"] = "Pedro";
console.log(persona);
 */
// FUNCION CONSTRUCTORA : generadora de objetos, primer letra en MAYUSCULA, optimiza muchos datos

/* function Persona (nombre, apellido, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
}

// si quiero AGREGAR un objeto a la construcctora :
const persona1 = new Persona ("Aitor", "de Aguirre", "Av siempre");
console.log(persona1.apellido); // si quiero que muestre solo una cosa por ej apellido
 */
// otro EJ

/* function Perrito (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
const perrito1 = new Perrito ("lisi", 12) ;           //  ahoracreamos un Objeto de tipo Perrito
const perrito2 = new Perrito ("zuri", 14) ;                           

console.log(perrito1.nombre); */

// Cuando tenemos muchas propiedades se hace de la sgte manera :

/* function Alumno (objeto){
    this.nombre = objeto.nombre;
    this.edad = objeto.edad;
    this.acudiente = objeto.acudiente;
    
}
const alumno1 = new Alumno ({nombre: "pepito", edad: 13, acudiente : "Maria"});
console.log(alumno1);

function Perrito (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.ladrar = function () {console.log("estoy ladrando");} // le agrego una funcion q es una caract
}
const perrito1 = new Perrito ("lisi", 12) ;           //  ahoracreamos un Objeto de tipo Perrito
const perrito2 = new Perrito ("zuri", 14) ;                           

console.log(perrito1.nombre)
perrito1.ladrar() // lo puedo usar para perrito1 o perrito2 
 */
// RECORRER PROPIEDADES DE UN OBJETO :
const persona = {
    nombre : "andres",
    edad : 34,
}
for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// ESTRUCTURA CON CLASE, ES LO MAS MODERNO ASI Q HAY Q USARLO   

class Persona { 
    constructor (nombre, edad) {
        this.nombre = nombre; // atributo
        this.edad = edad;     // atributo
    }
    hablar (){
        console.log("hablando"); // le agrego la accion (metodo)
    }
}
const persona1 = new Persona ("andres",14);
console.log(persona1);

persona1.hablar () // llamo a la accion