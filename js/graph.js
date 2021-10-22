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
            data:[0,0,0,0,0,0,0,0,0,0,0,0],             
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
        scale: {
            ticks: {
                //valor minimo del escalado
                beginAtZero: true,
                //valor maximo del escalado
                max: 5
            }
        }
    }   
});

numPregunta = 1;
document.getElementById("enviar").addEventListener("click",function(){
    var arrayRadios = document.getElementsByName("p"+numPregunta);
    console.log(arrayRadios);
    var valores = [];
    for(i=0;i<arrayRadios.length;i++){
        if(arrayRadios[i].checked){
            valores[i] = arrayRadios[i].value;
            myChart.data.datasets[0].data[numPregunta-1] = valores[i];
            myChart.update();
            numPregunta++;            
            console.log(myChart.data.datasets[0].data);
        }
    }
});