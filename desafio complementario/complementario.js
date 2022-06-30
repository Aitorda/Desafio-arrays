

// acceso al homebanking  BBVA

let usuario = prompt ("ingrese su usuario");
let limite = 0;

while (usuario !== "aitor") {
    alert ("usuario incorrecto");
    if (limite === 3){
        break;
    }
    limite ++;
    usuario = prompt ("ingrese usuario nuevamente");
}
if (limite === 3) {
    alert ("por reiterados intentos el usuario a sido bloqueado")
}else {
    alert ("usuario ok")
}
let password = prompt (" ingrese password");

if ( password.length !== 8 ) {
    alert (" password debe tener 8 caracteres");
    password = prompt ("debe ingresar un password de 8 caracteres");
}else {
    alert (" ingreso correcto");
}