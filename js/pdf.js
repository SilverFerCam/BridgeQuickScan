document.getElementById("pdf").addEventListener("click",function(){
   var datos = myChart.data.datasets[0].data;   
   var resultados = [];
   for(i=0;i<datos.length;i++){
      switch(i){
         //Primera Categoria
         case 0:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Little ability to act upon and own the IT service (portfolio) delivery without top-down guidance\nfrom upper management. Likely to be blocked by changes in strategy, type of work or management structure unless \ntold what to do next. Likely IT executes requests from the business without focusing on value and aligning priority and expectations.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Ability to act upon and own the IT service (portfolio) delivery with little top-down and/or peer\nguidance. IT likely bases its plans for service delivery on feedback from business. Service levels are agreed \nfor the service.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Strong ownership and vision regarding the IT service (portfolio) delivery, able to act autonomously\nand align interdependencies with other teams. Likely to actively collaborate with and seek feedback by the \nbusiness. IT is aware of of the business value of each service and seeks to improve service delivery.";
            }
            break;
         }
         //Segunda Categoria
         case 1:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Work out of line with the directions given by the governing body. Governing body and management do\nnot always maintain alignment through a clear set of shared principles and objectives. Few application of \ngovernance framework and practices.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Work mostly in line with the directions given by the governing body. Governing body and management\nregularly maintain alignment through a clear set of shared principles and objectives. Application of \ngovernance framework even though practices might be inconsistently established.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Work closely aligned with the directions given by the governing body. Governing body and management\nproactively maintain alignment through a clear set of shared principles and objectives. Mature application \nof a governance framework backed up by continually improved practices.";
            }
            break;
         }
         //tercera Categoria
         case 2:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Lack of understanding and low awareness of the strategic plans, portfolio and enterprise architecture;\nlikely not mapped with critical dimensions and for all products and services across the IT delivery unit.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Reasonable understanding and awareness of the strategic plans, portfolio and enterprise architecture\nmapped with critical dimensions and most key products and services across the IT delivery unit.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Complete and shared understanding and awareness of the strategic plans, portfolio and enterprise\narchitecture mapped with critical dimensions and all products and services across the IT delivery unit.";
            }
            break;
         }
         //Cuarta Categoria
         case 3:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "A rather poor understanding of stakeholder needs, transparency, continual engagement, and good\nrelationships with only a few stakeholders.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "A good understanding of critical stakeholder needs, transparency, continual engagement, and mostly\ngood relationships with crucial stakeholders.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "A complete understanding of stakeholder needs, transparency, continual engagement, and excellent\nrelationships with all stakeholders.";
            }
            break;
         }
         //Quinta Categoria
         case 4:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Ensure that very few IT products and services continually meet stakeholder expectations for quality,\ncosts, and time to market; an aspect might be missing (e.g. increased time to market).";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Ensure that critical IT products and services continually meet stakeholder expectations for quality,\ncosts, and time to market. ";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Ensure that all IT products and services continually meet stakeholder expectations for quality, costs,\nand time to market.";
            }
            break;
         }
         //Sexta Categoria
         case 5:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Likely to experience shortage in availability of service components when and where they are needed,\nfluctuating quality when it comes to meeting agreed specifications according to organizational standards; \nAd-hoc practices dominate the daily work.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Ensure that most service components are available when and where they are needed, and meet agreed\nspecifications according to organizational standards; Standard practices (e.g. ITIL 3) may be applied.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Ensure that all service components are available when and where they are needed, and meet agreed\nspecifications according to organizational standards; Advanced practices (e.g. Lean) may be applied.";
            }
            break;
         }
         //Septima Categoria
         case 6:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "A handful of IT Services are delivered and supported according to agreed specifications and\nstakeholders’ expectations, the rest being delivered in an error-prone way. IT assumes what is valuable for its \nkey stakeholders and is often not able to prioritize and offer transparency in delivery unless being requested to do so.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Most IT Services are delivered and supported according to agreed specifications and stakeholders’\nexpectations. IT is being reactively told by the stakeholders what is valuable and is able to prioritize and \noffer transparency in delivery on demand.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "All IT Services are delivered and supported according to agreed specifications and stakeholders’\nexpectations. IT knows what is valuable for its key stakeholders and is able to prioritize and offer transparency \nin delivery at any moment.";
            }
            break;
         }
         //Octava Categoria
         case 7:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Barely engaged with aligning IT practices and services with changing business needs through sporadic\nidentification and improvement of crucial elements involved in the effective management of products and services.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Reactively engaged with aligning IT practices and services with changing business needs through the\nongoing identification and improvement of crucial elements involved in the effective management of products and services.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Fully engaged with aligning IT practices and services with changing business needs through the ongoing\nidentification and improvement of all elements involved in the effective management of products and services.";
            }
            break;
         }
         //Novena Categoria
         case 8:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "IT barely adopts and adapts general management practices from business management domains, e.g. Information\nSecurity and Supplier Management, for a successful service management.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "IT adopts and adapts some general management practices from business management domains, e.g. Information\nSecurity and Supplier Management, to a sufficient degree for a reasonable service management.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "IT adopts and adapts general management practices from business management domains, e.g. Information\nSecurity and Supplier Management, for a successful service management.";
            }
            break;
         }
         //Decima Categoria
         case 9:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Low maturity of service management practices that have been developed and integrated with a mostly\nstable IT service delivery. Examples: Change Control, Incident Management, IT Asset Management, \nService Configuration Management and Service desk.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Average maturity of service management practices that have been developed and integrated with a\nsuccessful IT service delivery. Examples: Change Control, Incident Management, IT Asset Management, \nService Configuration Management and Service desk.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "High maturity of service management practices that have been developed and integrated with a successful\nand proactive IT service delivery. Examples: Change Control, Incident Management, IT Asset \nManagement, Service Configuration Management and Service desk.";
            }
            break;
         }
         //Undecima Categoria
         case 10:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Low maturity of technical management practices that have been adapted from technology domains and integrated\nin a mostly stable IT service delivery by a purpose of expanding or shifting their focus \nfrom technology solutions to IT services. Examples: Deployment management, infrastructure and platform management.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "Average maturity of technical management practices that have been adapted from technology domains and\nintegrated in a successful IT service delivery by a purpose of expanding or shifting their focus \nfrom technology solutions to IT services. Examples: Deployment management, infrastructure and platform management.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "High maturity of technical management practices that have been adapted from technology domains and integrated\nin a successful and proactive IT service delivery by a purpose of expanding or shifting \ntheir focus from technology solutions to IT services. Examples: Deployment management, infrastructure and platform management.";
            }
            break;
         }
         //Duodecima Categoria
         case 11:{
            if(datos[i]>=1 && datos[i]<=2.45){
               resultados[i] = "Loose commitment to and sporadic practice of continual improvement that is not embedded into everyday IT\nactivity. Lack of strong culture of continual improvement, backed up by respective techniques \nand aligned with strategic objectives.";
            }else if(datos[i]>=2.5 && datos[i]<=3.9){
               resultados[i] = "General commitment to and practice of continual improvement that is embedded into every IT activity. There\nis some culture of continual improvement, backed up by respective techniques and mostly in \nalignment with strategic objectives.";
            }else if(datos[i]>=4 && datos[i]<=5){
               resultados[i] = "Strong commitment to and regular, proactive practice of continual improvement that is embedded into every IT\nactivity. There is a strong culture of continual improvement, backed up by respective \ntechniques and always in alignment with strategic objectives.";
            }
            break;
         }
      }
   }

   html2canvas(document.getElementById("graph"), {
      onrendered: function(canvas) {
         var img = canvas.toDataURL();
         var doc = new jsPDF();

         console.log(doc.getFontList());

         function setCabecera(){
            doc.setFont("Helvetica","bold");
            doc.setFontSize(20);
            doc.setFillColor("#91004");
         }

         function setTitulo(){
            doc.setFont("helvetica","normal");
            doc.setFontSize(15);
            doc.setFillColor("#1a6779");
         }

         function setDato(){
            doc.setFont("helvetica","normal");
            doc.setFontSize(10);
            doc.setFillColor("#adacb2");
         }

         //Primera Pagina
         setCabecera();
         doc.text(20,30,'Quiz Results:');
         doc.addImage(img, 30, 35);

         //Segunda Pagina
         doc.addPage();         
         doc.text(20,30,'Skills Results:');
         setTitulo();
         doc.text(20,50,'Guiding Principles:');
         setDato();
         doc.text(20,55,resultados[0]);
         setTitulo();
         doc.text(20,70,'Governance: ');
         setDato();
         doc.text(20,75,resultados[1]);
         setTitulo();
         doc.text(20,90,'Plan: ');         
         setDato();
         doc.text(20,95,resultados[2]);
         setTitulo();
         doc.text(20,110,'Engage: ');
         setDato();
         doc.text(20,115,resultados[3]);
         setTitulo();
         doc.text(20,130,'Design & Transition: ');
         setDato();
         doc.text(20,135,resultados[4]);
         setTitulo();
         doc.text(20,150,'Obtain or Build: ');
         setDato();
         doc.text(20,155,resultados[5]);
         setTitulo();
         //doc.addPage();
         doc.text(20,170,'Deliver and Support: ');
         setDato();
         doc.text(20,175,resultados[6]);
         setTitulo();
         doc.text(20,195,'What is your level of engagement with improvement initiatives, plans and status reports?: ');
         setDato();
         doc.text(20,200,resultados[7]);
         setTitulo();
         doc.text(20,215,'General Mgmt Practices: ');
         setDato();
         doc.text(20,220,resultados[8]);
         setTitulo();
         doc.text(20,235,'Service Management Practices: ');
         setDato();
         doc.text(20,240,resultados[9]);
         setTitulo();
         doc.text(20,255,'Technical Mgmt Practices: ');
         setDato();
         doc.text(20,260,resultados[10]);
         setTitulo();
         doc.addPage();
         doc.text(20,30,'To what extent does my organization apply improvement methodologies, culture and techniques, in alignment with our strategic objectives?: ');
         setDato();
         doc.text(20,35,resultados[11]);
         doc.save('DatosCuestionario.pdf');
      }
   });
});