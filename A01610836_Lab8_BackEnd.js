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


//Problema dos

const filesystem = require('fs');

let string = "Hola mundo";

function escribirString(string){
    filesystem.writeFileSync('Lab8Problema2.txt', string);
}

escribirString(string);

//Problema tres

/*
During the break the schoolchildren, boys and girls, formed a queue of n people in the canteen. Initially the children stood in the order they entered the canteen. However, after a while the boys started feeling awkward for standing in front of the girls in the queue and they started letting the girls move forward each second.

Let's describe the process more precisely. Let's say that the positions in the queue are sequentially numbered by integers from 1 to n, at that the person in the position number 1 is served first. Then, if at time x a boy stands on the i-th position and a girl stands on the (i + 1)-th position, then at time x + 1 the i-th position will have a girl and the (i + 1)-th position will have a boy. The time is given in seconds.

You've got the initial position of the children, at the initial moment of time. Determine the way the queue is going to look after t seconds.

Input
The first line contains two integers n and t (1 ≤ n, t ≤ 50), which represent the number of children in the queue and the time after which the queue will transform into the arrangement you need to find.

The next line contains string s, which represents the schoolchildren's initial arrangement. If the i-th position in the queue contains a boy, then the i-th character of string s equals "B", otherwise the i-th character equals "G".

Output
Print string a, which describes the arrangement after t seconds. If the i-th position has a boy after the needed time, then the i-th character a must equal "B", otherwise it must equal "G".

input
5 1
BGGBG

output
GBGGB

input
5 2
BGGBG

output
GGBGB

input
4 1
GGGB

output
GGGB

*/

let n = 5
let t = 1

let queue = "GGGB";

let stringArray = queue.split('');
let queueArray = stringArray.slice();

console.log(queueArray);

for (let i = 0; i < t; i++){
    for (let j = 0; j < stringArray.length; j++) {
        if (stringArray[j] == "B") {
            if (j + 1 < stringArray.length){
                if (stringArray[j + 1] == "G"){
                    let aux1 = stringArray[j + 1];
                    let aux2 = stringArray[j];
                    queueArray[j] = aux1;
                    queueArray[j + 1] = aux2;
                }
            }
        }
    }
    stringArray = queueArray.slice();
}

stringArray.join("");
console.log(stringArray);


