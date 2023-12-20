// Crie uma função que exiba a data atual no formato “yy:mm:dd” a cada minuto.

function exibirData() {
    setInterval(function() {  // setInterval(func)
        let data = new Date();
        console.log(data.getFullYear() + ":" + data.getMonth() + ":" + data.getDate());
    }, 1000);
}

exibirData();
