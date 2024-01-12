/*Codigo JavaScript del conversor*/
function convertir(divisa){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if (divisa=="euro"){
        //convierto a euro
        resultado = valor * 0.91;
        document.getElementById("resultado").innerHTML = resultado + " €";
    }
    else {
        //convierto a dolares
        resultado = valor * 1.09;
        document.getElementById("resultado").innerHTML = resultado + " $";
    }
}