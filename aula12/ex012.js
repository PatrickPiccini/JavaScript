var agora = new Date() //pega a hora atual do sistema que esta rodando o script
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)

if(hora < 12){
    console.log('Bom dia')
}else if(hora <=18){
    console.log('Boa tarde')
}else{
    console.log('boa noite')
}