/*

// Criar função somar que retorna a
// soma de todos os multiplos de 3 e 5

// Multiplos de 3 ( 3,6,9 )
// Multiplos de 5 ( 5,10 )

// Somar os multiplos  
somar(120);

function somar(limite) {
    let mul3 = 0;
    let mul5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            mul3 += i;
        if (i % 5 === 0)
            mul5 += i;
    }
    console.log(mul3 + mul5)
}

*/