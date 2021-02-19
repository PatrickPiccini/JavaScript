function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if(hora >= 6 && hora < 12){
        img.src = "manha.png"
        document.body.style.background = "rgb(251, 140, 65)"
    }else if(hora >= 12 && hora < 18){
        img.src =  'tarte.png'
        document.body.style.background = "rgb(90, 199, 86)"
    }else{
        img.src = 'noite.png'
        document.body.style.background = 'rgb(32, 29, 78)'
        
    }
}