document.getElementById("pdf").addEventListener("click",function(){
    html2canvas(document.getElementById("graph"), {
        onrendered: function(canvas) {
           var img = canvas.toDataURL();
           var doc = new jsPDF();
           doc.addImage(img, 30, 30);
           doc.save('DatosCuestionario.pdf');
        }
     });
});