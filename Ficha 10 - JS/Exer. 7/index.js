// Cria um algoritmo para uma calculadora

function readUserInput() {
    let num1 = parseFloat(prompt("Introduza o primeiro número: "));
    let operator = prompt("Introduza o operador: ");
    let num2 = parseFloat(prompt("Introduza o segundo número: "));
    return { num1, operator, num2 };
}

function calculate(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Operador inválido';
            break;
    }
    return result;
}

function main() {
    const userInput = readUserInput();
    const { num1, operator, num2 } = userInput;
    const result = calculate(operator, num1, num2);
    console.log("Resultado:", result);
}

main();
