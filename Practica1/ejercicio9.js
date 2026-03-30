let promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Mensaje de exito despues de 3 segundos");
    }, 3000);
});

promesa.then((mensaje) => {
    console.log(mensaje);
});