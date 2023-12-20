// O método setInterval(), chama repetidamente uma função ou executa um pedaço de código, com um intervalo de tempo fixo entre cada chamada.

function exibirMensagem() {
    setInterval(function() {  // setInterval(func)
        console.log("5 seconds passed by!");
    }, 5000); // 5000 milissegundos = 5 segundos
}

exibirMensagem();
