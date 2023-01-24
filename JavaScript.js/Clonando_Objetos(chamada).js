// Function Exemplo
const celular = {
    maracaCelular: 'ASUS',
    tamanhosTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function() {
        console.log('Fazendo Ligação');
    }
}

//1 metodo
const novoObjeto = object.assing({
    bateria: 500
}, celular);
console.log(novoObjeto);

// 2 metodo 
const objeto2 = {...celular };
console.log(objeto2);