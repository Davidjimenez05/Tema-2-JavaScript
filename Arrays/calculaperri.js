function suma(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1+n2;
}

function resta(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1-n2;
}

function multi(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1*n2;
}

function divide(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n2==0){
        //Bloque de instrucciones si verdadero
        alert("Imposible dividir por cero")
}
    else{
        //Bloque de instrucciones si falso
        document.getElementById("resultado").innerHTML = n1/n2;
}
}