// Esvaziando um Arraw
let num = [1, 2, 3, 4, 5, 6];
let outros = num;

// Solução 1
// num = [];
// console.log(outros);

// Solução 2
num.length = 0;
// console.log(num);
// console.log(outros);

// Solução 3
// num.splice(0,num.length);
// console.log(num);
// Console.log(outros);

// Solução 4
// whlie(num.length > 0)
//      num.pop();