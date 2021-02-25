// Cria uma função onde é feita uma chamada dela mesmo dentro da propria função
//RECURSIVIDADE
function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1) // chamada da propria função
    }
}

console.log(fatorial(5))