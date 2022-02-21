//Problema 1:
const num = prompt("Escribe un número entero: ");
document.write("<strong>Problema 1: <br></strong>");
for (let i = 1; i <= num; i++){
    document.write(i + " | " + i*i + " | " + i*i*i + "<br>");
}

//Problema 2:
document.write("<br> <strong>Problema 2: <br></strong>");
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
document.write("<br> <strong>Problema 3: </strong><br>");

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

let arr1 = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
let arr2 = [0,0,0,0,0,0,0,0];
let arr3 = [-1,-2,-3,-4,-5,-6,-7,-8];
let arr4 = [1,0,2,0,3,0,4,0,5,0,6,0];
let arr5 = [1,-1,2,-2,3,-3,4,-4,5,-5];

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


//Problema 4:
document.write("<strong>Problema 4: </strong><br>");

function promedios (numMatrix){
    let sumTot = 0;
    let prom = 0;
    let arrProm = [];
    arrProm.length = numMatrix.length;
    for (let i = 0; i < numMatrix.length; i++){
        for (let j = 0; j < numMatrix[i].length; j++){
            sumTot = sumTot + numMatrix[i][j];
        }
        prom = sumTot / numMatrix[i].length;
        arrProm[i] = prom;
        sumTot = 0;
    }
    return arrProm;
}

document.write("Casos de prueba funcion contador:");
document.write("<br> Arreglos: <br>");

let arr6 = [[1,2,3],[4,5,6],[7,8,9]];
let arr7 = [[1],[1],[1],[1],[1],[1],[1]];
let arr8 = [[0],[0],[0],[0],[0],[0],];
let arr9 = [[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]];
let arr10 = [[1],[0],[1],[1,3],[1],[0],[1],[7,9],[1,2,3,4,5,6,7,8,9]];

document.write(arr6 + "<br>");
console.log(arr6);
document.write("Promedio por renglón: " + promedios(arr6) + "<br><br>");
document.write(arr7 + "<br>");
console.log(arr7);
document.write("Promedio por renglón: " + promedios(arr7) + "<br><br>");
document.write(arr8 + "<br>");
console.log(arr8);
document.write("Promedio por renglón: " + promedios(arr8) + "<br><br>");
document.write(arr9 + "<br>");
console.log(arr9);
document.write("Promedio por renglón: " + promedios(arr9) + "<br><br>");
document.write(arr10 + "<br>");
console.log(arr10);
document.write("Promedio por renglón: " + promedios(arr10) + "<br><br>");

//Problema 5:
document.write("<strong>Problema 5: </strong><br>");

function inverso(num){
    let str = num.toString();
    let strAux = str.split('').reverse().join('');
    let numAux = parseFloat(strAux);
    numAux = numAux * Math.sign(num);
    
    return numAux;
}

document.write("Casos de prueba: <br>");
document.write("Numeros: <br>");

let num3 = -15;
let num4 = -25;
let num5 = 32;
let num6 = 123456789;
let num7 = -951700;

document.write(num3 + "<br>");
document.write("Inverso del numero: " + inverso(num3) + "<br><br>");
document.write(num4 + "<br>");
document.write("Inverso del numero: " + inverso(num4) + "<br><br>");
document.write(num5 + "<br>");
document.write("Inverso del numero: " + inverso(num5) + "<br><br>");
document.write(num6 + "<br>");
document.write("Inverso del numero: " + inverso(num6) + "<br><br>");
document.write(num7 + "<br>");
document.write("Inverso del numero: " + inverso(num7) + "<br><br>");

