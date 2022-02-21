//Problema 1:
const num = prompt("Escribe un número entero: ");
document.write("Problema 1: <br>");
for (let i = 1; i <= num; i++){
    document.write(i + " | " + i*i + " | " + i*i*i + "<br>");
}

//Problema 2:
document.write("<br> Problema 2: <br>");
let initialTime, finalTime;
initialTime = new Date();
const sumAns = prompt("Escribe el resultado de la suma: ");
let num1, num2;
num1 = Math.floor(Math.random()*11);
num2 = Math.floor(Math.random()*11);
console.log(num1 + num2);
if (sumAns == (num1 + num2)){
    document.write("El resultado fue correcto");
} else {
    document.write("El resultado fue incorrecto");
}
finalTime = new Date();

let diffTime = (finalTime - initialTime) / 1000;
document.write("<br> Tiempo tardado en dar respuesta: " + diffTime + " segundos");

//Problema 3: 
document.write("<br>");
document.write("<br> Problema 3: <br>");

function contador(numArray){
    let negative = 0;
    let zeroes = 0;
    let positive = 0;
    for (let i = 0; i < numArray.length; i++){
        if (numArray[i] < 0){
            negative = negative + 1;
        } else if (numArray[i] == 0){
            zeroes = zeroes + 1;
        } else{
            positive = positive + 1;
        }
    }
    return "numeros negativos: " + negative + " | numero de ceros: " + zeroes + " | numeros positivos: " + positive +"<br>";
}

document.write("Casos de prueba funcion contador:");
document.write("<br> Arreglos: <br>");

arr1 = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
arr2 = [0,0,0,0,0,0,0,0];
arr3 = [-1,-2,-3,-4,-5,-6,-7,-8];
arr4 = [1,0,2,0,3,0,4,0,5,0,6,0];
arr5 = [1,-1,2,-2,3,-3,4,-4,5,-5];

document.write(arr1 + "<br>");
document.write(contador(arr1) + "<br>");
document.write(arr2 + "<br>");
document.write(contador(arr2) + "<br>");
document.write(arr3 + "<br>");
document.write(contador(arr3) + "<br>");
document.write(arr4 + "<br>");
document.write(contador(arr4) + "<br>");
document.write(arr5 + "<br>");
document.write(contador(arr5) + "<br>");

document.write("<br>");
document.write("<br Problema 4: <br>");


function promedios (numMatrix){
    for (let i = 0; i < numMatrix; i++){
        for (let j = 0; j < num())
    }
}















