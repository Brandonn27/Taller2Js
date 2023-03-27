var fin = parseInt(prompt ("ingresa hasta que número irá la secuencia de Fibonnaci"));
var anterior = 1
var presente = 0
var resultado = 1
 //console.log (resultado)

for (i=1; resultado<=fin; i++){
    console.log (resultado);
    resultado = anterior+presente;
  
    anterior = presente;
    presente = resultado;

    }
