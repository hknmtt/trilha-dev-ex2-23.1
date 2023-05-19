// Crie sua função aqui
function oneToNumber(numero) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // esta é uma função parecidda com a  range() do Python
    return Array.from({length: numero}, (_, i) => i + 1);
}

// Não altere as linhas abaixo
console.log(oneToNumber(10))
console.log(oneToNumber(5))
console.log(oneToNumber(1))
console.log(oneToNumber(-1))
