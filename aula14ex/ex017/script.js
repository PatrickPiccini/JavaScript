function calcular(){
    let num = document.getElementById('num')
    let sel = document.getElementById('tabu') 
    
    if(num.value.length == 0){
        window.alert('Por favor, Digite um numero!')
    } else {
        let n = Number(num.value)
        sel.innerHTML = ''
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value=`sel${i}`
            sel.appendChild(item)
           

        }
    }
    


}