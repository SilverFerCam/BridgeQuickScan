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
 
function anteriorPregunta(indice){
    if(indice==1){
        document.getElementById("back").style.display = "none";
    }else if(indice<20){
        document.getElementById("enviar").style.display = "inline-block";
    }
    var preguntaActual = indice+1;    
    document.getElementById("p"+indice).style.display = "block";      
    document.getElementById("p"+preguntaActual).style.display = "none";
}

//Al hacer click en el boton enviar se ejecuta la funcion mostrarPregunta()
//Si El indice no supera el valor maximo de preguntas, vease 20
document.getElementById("enviar").addEventListener("click",function(){  
    if(visible==19){
        respuestaActiva = document.getElementsByName("p20");
        for(i=0;i<respuestaActiva.length;i++){
            if(respuestaActiva[i].checked){
                visible++;
                mostrarPregunta(visible);
                document.getElementById("enviar").style.display = "none";
            }
        }        
    }
    if(visible==20){
        document.getElementById("enviar").style.display = "none";
        document.getElementById("pdf").style.display = "inline-block";
        document.getElementById("back").style.display = "inline-block";
    }else if(visible==1){        
        if(visible+1!=21){
            respuestaActiva = document.getElementsByName("p"+visible);
            for(i=0;i<respuestaActiva.length;i++){
                if(respuestaActiva[i].checked){
                    visible++;
                    mostrarPregunta(visible);
                    document.getElementById("back").style.display = "inline-block";
                }
            }            
        }
    }else if(visible>1){
        if(visible+1!=21){
            respuestaActiva = document.getElementsByName("p"+visible);
            console.log(respuestaActiva);
            for(i=0;i<respuestaActiva.length;i++){
                if(respuestaActiva[i].checked==true){             
                    visible++;
                    mostrarPregunta(visible);
                }
            }
        }
    }
    /*else if(visible-1>0 || visible==1){
        document.getElementById("back").style.display = "inline-block";
        if(visible+1!=21){
            respuestaActiva = document.getElementsByName("p"+indice);
            var valoresPreguntas = [];
            for(i=0;i<respuestaActiva.length;i++){
                if(respuestaActiva[i].checked){
                    valoresPreguntas[i] = respuestaActiva[i].value;                
                    visible++;
                    mostrarPregunta(visible);
                    console.log(visible);
                    indice++;
                }
            }     
        }
    }*/
});

document.getElementById("back").addEventListener("click",function(){
    console.log(visible);
    visible--;
    anteriorPregunta(visible);    
});

//Sistema para ocultar los circulos de los radio buttons del HTML
var radios = document.querySelectorAll("input[type='radio']");
for(k=0;k<radios.length;k++){
    radios[k].style.visibility = "hidden";
}