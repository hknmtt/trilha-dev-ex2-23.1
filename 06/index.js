// Crie sua função aqui
function factorial(n) {
    // sem recursividade, na pratica essa funcao ninguem iria pedir um valor acima de 100,
    // entao ter uma array com os valores ja pre-calculados iria ser bem mais rapido
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
} 

// Não altere as linhas abaixo
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(8))
