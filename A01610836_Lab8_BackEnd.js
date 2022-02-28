//Problema uno

let arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function promedioArreglo(arreglo){
    let sumTotal = 0;
    for (let i in arreglo){
        sumTotal = sumTotal + arreglo[i];
    }
    promedio = sumTotal / arreglo.length;

    return promedio;
}

console.log(promedioArreglo(arreglo));



