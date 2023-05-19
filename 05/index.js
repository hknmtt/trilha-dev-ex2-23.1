// Crie sua função aqui
function evenArray(numero) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // esta é uma função parecidda com a  range() do Python mas com step 2
    return Array.from({length: numero/2+1}, (_, i) => i * 2);
}

// Não altere as linhas abaixo
console.log(evenArray(10))
console.log(evenArray(5))
console.log(evenArray(1))
console.log(evenArray(-1))
