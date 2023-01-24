/*

// Veloicdade máxima de até 70
// A cada 5km acima = 1 ponto
// Math.floor()
// Caso pontor => 12 "Carteira Suspensa"

verificadorVelocidade(81);

function verificadorVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= 70)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }
}

*/