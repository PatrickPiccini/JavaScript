let amigo = {
    nome: 'patrick',
    sexo: 'M',
    peso: 71.5 ,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(8)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

