/*Creacion y actualizacion de una grafica Chart.js realizado por David Fernandez*/

//Creacion y implementacion en el HTML de la grafica
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx,{
    //tipo de grafica
    type: "radar",
    data:{
        //valores de la grafica
        labels:['Guiding Principles','Governance','Plan','Engage','Design & Transition','Obtain or Build','Deliver and support','Improve','General Mgmt Practices','Service Management Practices','Technical Mgmt Practices','Continual Improvement'],
        datasets:[{            
            label:'Dato de prueba',
            //datos de la grafica
            data:[],             
            //atributo para rellenar el contenido de los datos 
            fill:true,
            //estilos del trazado
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2     
        }]
    },
    options: {
        //escalado de la grafica
        scales: {
            r: {
                //valor minimo del escalado
                suggestedMin: 0,
                //valor maximo del escalado
                suggestedMax: 5
            }
        }
    }   
});       

//Evento de boton
document.getElementById("impdata").addEventListener("click",function(){    
    
    //array de los elementos input del HTML cuyo tipo es number
    var array = document.querySelectorAll("input[type='number']");
    //futuro array de los valores de los elemetos del array previamente declarado
    var values = [];

    //Comprovacion que los valores esten comprendidos entre 0 y 5
    for(i=0;i<12;i++){
        if(array[i].value>=0 && array[i].value<=5){
            values[i] = array[i].value; 
            console.log(values);
        }else{
            console.log("los valores tienen que estar comprendidos entre 0 y 5");
        }  
    }

    //Actualizacion de la grafica aplicando los valores introducidos por los campos input
    myChart.data.datasets[0].data = values;    
    myChart.update();

})

/*
    var valor;
    if(document.getElementById("p"+visible+"-1").checked){
        valor = document.getElementById("p"+visible+"-1").value;
    }else if(document.getElementById("p"+visible+"-2").checked){
        valor = document.getElementById("p"+visible+"-2").value;
    }else if(document.getElementById("p"+visible+"-3").checked){
        valor = document.getElementById("p"+visible+"-3").value;
    }
*/