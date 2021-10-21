//Declaramos una variable para referenciar al numero de la pregunta a mostrar
var visible = 1;
var indice = 1;
//Como por CSS todas las preguntas son invisibles mostramos la primera de ellas
document.getElementById("p"+visible).style.display = "block";

//Declaramos una funcion para mostrar la siguiente pregunta
function mostrarPregunta(indice){
    document.getElementById("p"+indice).style.display = "block"; 
    var menosIndice = indice - 1;
    document.getElementById("p"+menosIndice).style.display = "none";   
}

//Al hacer click en el boton enviar se ejecuta la funcion mostrarPregunta()
//Si El indice no supera el valor maximo de preguntas, vease 20
document.getElementById("enviar").addEventListener("click",function(){
    if(visible+1!=21){
        respuestaActiva = document.getElementsByName("p"+indice);
        var valoresPreguntas = [];
        for(i=0;i<respuestaActiva.length;i++){
            if(respuestaActiva[i].checked==true){
                valoresPreguntas[i] = respuestaActiva[i].value;
                visible++;
                mostrarPregunta(visible);
                indice++;
            }
        }        
    }else{
        document.getElementById("enviar").style.display = "none";
        document.getElementById("pdf").style.display = "block";
    }
});

var radios = document.querySelectorAll("input[type='radio']");
for(k=0;k<radios.length;k++){
    radios[k].style.visibility = "hidden";
}

var labels = document.querySelectorAll("label");
for(k=0;k<labels.length;k++){    
    labels[k].addEventListener("click",function(){
        labels[k].style.background = "#96FF8D";
    })
}
