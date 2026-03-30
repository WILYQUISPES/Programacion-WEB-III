function obtenerDatos(callback) {
    setTimeout(() => {
        callback("Datos obtenidos");
    }, 1000);
}

function procesarDatos(datos, callback) {
    setTimeout(() => {
        callback(datos + " -> Procesados");
    }, 1000);
}

function guardarDatos(datos, callback) {
    setTimeout(() => {
        callback(datos + " -> Guardados");
    }, 1000);
}


console.log("Con callbacks anidados");
obtenerDatos((resultado1) => {
    console.log(resultado1);
    procesarDatos(resultado1, (resultado2) => {
        console.log(resultado2);
        guardarDatos(resultado2, (resultado3) => {
            console.log(resultado3);
        });
    });
});

function obtenerDatosPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos obtenidos"), 1000);
    });
}

function procesarDatosPromesa(datos) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(datos + " -> Procesados"), 1000);
    });
}

function guardarDatosPromesa(datos) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(datos + " -> Guardados"), 1000);
    });
}

async function ejecutar() {
    console.log("Con async/await");
    let datos = await obtenerDatosPromesa();
    console.log(datos);
    let procesados = await procesarDatosPromesa(datos);
    console.log(procesados);
    let guardados = await guardarDatosPromesa(procesados);
    console.log(guardados);
}

setTimeout(() => ejecutar(), 4000);