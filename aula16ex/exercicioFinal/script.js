let num = document.getElementById('txtn')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let array = []
list.style.width = '150px'

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isList(n,l){
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function addArray(){
    if(isNumber(num.value) && !isList(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(array.length == 0){
        window.alert('Favor adicionar um numero para finalizar')
    } else {
        let total = array.length
        let maiorValor = Number(Math.max.apply(null,array))
        let menorValor = Number(Math.min.apply(null,array))
        let soma = 0

        for(let i in array){
            soma += Number(array[i])
        }

        let media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ao todo ${total} numeros cadastrados.<br></p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorValor}.<br></p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorValor}.<br></p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<br></p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.<br></p>`
     }
}