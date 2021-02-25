let num = [5,6,1,8,5,7,9,5]
/*
num[6] = 5 //coloca um elemento numa posição desejada
num.push(7) //coloca um elemento da ultima posição
num.length //retorna a quantidade de elementos que tem no array
num.sort() // organiza os elementos de forma crescente
num.indexOf(7) //procura no array onde esta o var 7 e retorna o indice que se encontra

*/

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do array é ${num[0]}`)

/*
for(let i=0;i<num.length;i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/
for(var i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

let pos = num.indexOf(9)
console.log(`o valor 9 esta na posição ${pos}`)