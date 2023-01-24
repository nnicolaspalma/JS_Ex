/*

// Tipos de Refencia

//  Tipos primitivos são passados como valor e os objetos são passados como referência ( Tipos primitivos são imutáveis)

const marcas = [{
    id: 1,
    nome: 'a'
}, {
    id: 2,
    nome: 'b'
}, ];

// Find retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const marca = marcas.find(function(marca) {
    return marca.nome === 'a';
});

console.log(marca);

*/