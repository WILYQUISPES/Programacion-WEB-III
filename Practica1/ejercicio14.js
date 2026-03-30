function operacionPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resultado de la promesa"), 2000);
    });
}

function operacionCallback(callback) {
    operacionPromesa().then((resultado) => {
        callback(resultado);
    });
}

operacionCallback((resultado) => {
    console.log(resultado);
});