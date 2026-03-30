function operacionCallback(callback) {
    setTimeout(() => {
        callback("Resultado del callback");
    }, 2000);
}

function operacionPromesa() {
    return new Promise((resolve) => {
        operacionCallback((resultado) => {
            resolve(resultado);
        });
    });
}

operacionPromesa().then((resultado) => {
    console.log(resultado);
});