// Crie uma função que exiba a hora atual no formato “hh:mm:ss” a cada 2 segundos.


function exibirHora() {
    setInterval(function() {  // setInterval(func)
        let time = new Date();
        console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    }, 2000);
}

exibirHora();
