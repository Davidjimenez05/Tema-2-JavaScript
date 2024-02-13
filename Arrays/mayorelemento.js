function mayor(vector){
    let mayor=vector[0]; // por defecto el primer elemento es el mayor
    //vector.sort(); //sort ordena un vector
    for (var i=0;i<vector.length;i++){
        if (vector[i]>mayor)
        mayor = vector[i];
    }
    return mayor;
} 

function menor(vector){
    let menor=vector[0]; // por defecto el primer elemento es el menor
    for (var i=0;i<vector.length;i++){
        if (vector[i]<menor)
        menor = vector[i];
    }
    return menor;
} 
function imprimir(vector){
    document.getElementById("resultado").innerHTML = ""; //limpio el parrafo
    for (var contador=vector.length-1;contador>=0;contador--) //contador=vector.length-1;contador>=0;contador--
    {
        document.getElementById('resultado').innerHTML += "elemento numero " + contador + ": ";
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + vector[contador] + "<br/>";
    }
}