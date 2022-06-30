// Filtro para que el cliente pueda elegir en funcion del nombre, precio y la cantidad de huespedes. 
let departamentos = [
    {dpto: "ametzaroom", precio: 1800, cantidadPersonas: 5, cochera: false},
    {dpto: "bideamroom", precio: 2500, cantidadPersonas: 3, cochera: false}, 
    {dpto: "luxeroom", precio: 2000, cantidadPersonas: 3, cochera: true}, 
    
];
 
let filtrado = prompt ("Que filtro le gustaria utilizar :nombre, precio, cantidad de personas a hospedarse.")

if (filtrado === "dpto"){
    let filtroNombre =prompt ("ingrese nombre del lugar ");

    let resultadoN = departamentos.filter(elemento => elemento.dpto.includes(filtroNombre));
    console.log(resultadoN);
}else if (filtrado === "precio") {
    let filtroPrecio = parseInt(prompt ("ingrese el menor precio "));
    let resultadoP = departamentos.filter(elemento => elemento.precio > filtroPrecio);
    console.log(resultadoP);
}else if (filtrado === "cantidadPersonas"){
    let filtroPersonas = parseInt(prompt ("ingrese la cantidad de personas"));

    let resultado = departamentos.filter(elemento => elemento.cantidadPersonas === filtroPersonas);
    console.log(resultado);
}






// se aplica filtro en funcion de la cantidad de personas a hospedarse



// se aplica filtro en funcion al precio


// se aplica filtro en funcion al nombre



