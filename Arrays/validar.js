function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
<<<<<<< HEAD
        if (elementos[i].value == "" || (i==4 && !elementos[i].checked)){
=======
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
>>>>>>> d09257b9e720b5d1c40015fec42afe675abb4768
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
<<<<<<< HEAD
    if (!validarEmail()){
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
=======
    if (!validarEmail()){ //valido el correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if (!validaPasswords()){
        document.getElementById("campo4").innerHTML = "La contraseña no cumple con los requisitos de longitud o no coincide"
        document.getElementById("campo5").innerHTML = "La contraseña no cumple con los requisitos de longitud o no coincide"
        estanCorrectos = false;
    }   
    if (!validarDNI()){
        document.getElementById("campo6").innerHTML = "DNI no valido (12345678X)"
    }
>>>>>>> d09257b9e720b5d1c40015fec42afe675abb4768
    return estanCorrectos;
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
<<<<<<< HEAD
} 
=======
}
function validaPasswords(){
    let clave1 = document.getElementById("password").value;
    let clave2 = document.getElementById("password2").value;
    let passwordsOK = true; //cumple con los requisitos establecidos
    if (clave1.length<8 || (clave1!=clave2))
    passwordsOK = false;
    return passwordsOK; 
}

function validarDNI(){
    let letra= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    var cadena = document.getElementById("dni").value //DNI completo
    var numero = parseInt(cadena.substring(0,8)); // parte numerica
    var letraUsuario = cadena[8]; // Letra escrita por el usuario
    var letraReal = letra[numero%23]; // Letra "Real" del DNI calculada segun "formula"
    var dniValido =true; 
    if (letraUsuario!=letraReal) //Si no coinciden las letras
        dniValido = false;
    return dniValido;
}
function limpia(){
    let cadena = document.getElementById("cadena").value;
    let cadenaSinEspacios = cadena.replace(/ /g,"");
    let cadenaLimpia = cadenaSinEspacios.toUpperCase();
    document.getElementById("resultado").innerHTML = cadenaLimpia;
}

// ¿Serías capaz de utilizar la etiqueta <form> ... </form> y que se vieran los mensajes sin 
//enviar los datos al servidor cuando el formulario no estuviera correctamente relleno? 
//Pista: revisa cómo podemos modificar el comportamiento predeterminado de un formulario 
//(https://desarrolloweb.com/faq/explicaciones-detalladas-sobre-el-metodo-preventdefault-de-javascript).
>>>>>>> d09257b9e720b5d1c40015fec42afe675abb4768
