// Crie sua função aqui
function invertWord(palavra) {
    let reverso = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        reverso += palavra[i];
    }
    return reverso;
}

// Não altere as linhas abaixo
console.log(invertWord('javascript'))
console.log(invertWord('web'))
console.log(invertWord('pixel'))
console.log(invertWord('trainee'))
