var num1 = parseInt(prompt("ingrese un numero entero positivo"))
var primo = 1

if (num1<2){
    primo=0
}

for (i=2; i<num1; i++) {
    if (primo==1 && Math.floor(num1/i)*i==num1){
        primo = 0
    }
}

if (primo==1){
    console.log (num1+" si es un número primo")
}else {
    console.log (num1+" no es un número primo")  
}