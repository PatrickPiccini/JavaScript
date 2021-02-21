function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')    
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'CriançaH.png')
            }else if(idade < 25){
                img.setAttribute('src', 'JovemH.png')
            }else if (idade <50){
                img.setAttribute('src', 'AdultoH.png')
            }else{
                img.setAttribute('src', 'IdosoH.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'CriançaM.png')
            }else if(idade < 25){
                img.setAttribute('src', 'JovemM.png')
            }else if (idade <50){
                img.setAttribute('src', 'AdultoM.png')
            }else{
                img.setAttribute('src', 'IdosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.padding = '10px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}