/* 
Realizado por Mr Tartaria
Para calcular las calificaciones de Mr. EMPÍRICO
*/
var notas=[];

function anadir(){
    let numero = parseFloat(document.getElementById("numero").value);
    // borramos cualquier mensaje de error previo
    document.getElementById("aviso").innerHTML=""
    if (isNaN(numero)){ // si true significa que no es un numero
        document.getElementById("aviso").innerHTML="Debes introducir un numero entre 0 y 10"
    }
    else{
    // compruebo que eesta comprendido entre 0 y 10
    if (numero<0 || numero>10){
        document.getElementById("aviso").innerHTML="Debes introducir un numero entre 0 y 10"
    }
    else{
        notas.push(numero);
        document.getElementById("notas").innerHTML = notas;
    }
}
}

function borrar(){
    document.getElementById("notas").innerHTML =  "";
    document.getElementById("resultado").innerHTML =  "";
    document.getElementById("aviso").innerHTML = "";
    notas=[];
}

function calcularMedia(){
    let total=0.0;
    for (var i=0;i<notas.length;i++){
        total += notas[i];
    }
    total = total/notas.length;
    document.getElementById("resultado").innerHTML = total.toFixed(2);

}