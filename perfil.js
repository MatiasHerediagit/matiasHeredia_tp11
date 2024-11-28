// Primero declaro la variable perfil con un valor, en este caso administrador
let perfil = "Administrador"; 

// Ahora aparecera el mensaje en base al perfil que se elija 
//Utilice tolowercase para que no haya diferencias entre minusculas y mayusculas a la hora de escribir el perfil y sea valido
if (perfil === " ") {
    console.log("Debe especificar el perfil del usuario");
} else if (perfil.toLowerCase() === "administrador") {
    console.log("Usted tiene todos los privilegios de uso del sistema");
  } else if (perfil.toLowerCase() === "asistente") {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
  } else if (perfil.toLowerCase() === "invitado") {
    console.log("Usted sólo tiene permisos de consultar datos");
  } else {
    console.log("Debe especificar un perfil válido");
  }
