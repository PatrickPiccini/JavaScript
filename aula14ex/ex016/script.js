function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = "Impossivel contar"
        window.alert('[ERRO] faltam dados!')  
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo inválido...Consideranto PASSO 1")
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }

}