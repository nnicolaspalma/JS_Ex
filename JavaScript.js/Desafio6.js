/*

// Criar um metodo para ler propiedades de um objeto e exibir somente as propiedades
// do tipo sting que estão nesse objeto 

const filme = {
    titulo: 'Vingadores',
    Ano: 2018,
    Diretor: 'Robin',
    Personagem: 'Thor',
}

exibirPropiedades(filme);

function exibirPropiedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}

*/