// Natureza dinamica de objetos
const mouse = {
    cor: 'red',
    marca: 'Dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function() {
    console.log('Mudando DPI');
}
delete mouseEvent.VELOCIDADE;
delete mouse.trocarDPI;
console.log(mouse);