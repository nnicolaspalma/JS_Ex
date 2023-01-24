/*

// Arrow Functions 

const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
]

// Resumindo

// Formula *normal*
console.log(marcas.find(function(marca) {
    return marca.nome === 'a';
}))


// Arrow Function => ( function em simbolo )
console.log(marcas.find((marca) => {
    return marca.nome === 'a';
}))

// Se tiver somente um parametro podemos remover os parenteses () e remover as chaves {} + return 
console.log(marcas.find(marca => marca.nome === 'a'))

// Pode colocar () se não tiver nenhum parametro ( Não é o caso)
// console.log(marcas.find(() => marca.nome === 'a'))

*/