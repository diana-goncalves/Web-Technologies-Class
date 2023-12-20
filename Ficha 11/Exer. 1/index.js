// Crie uma função evenOrOdd que recebe um número como argumento e retorna true se o número for par e false se for ímpar

function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar.");
    }
}

const number = evenOrOdd(prompt("Introduz um número: "));
