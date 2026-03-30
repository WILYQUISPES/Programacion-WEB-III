function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos listos"), 2000);
    });
}

console.log("Con promesas");
obtenerDatos().then((resultado) => {
    console.log(resultado);
});

async function ejecutar() {
    console.log("Con async/await");
    let resultado = await obtenerDatos();
    console.log(resultado);
}

setTimeout(() => ejecutar(), 3000);