function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Paso 1 completado"), 1000);
    });
}

function paso2(dato) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(dato + " -> Paso 2 completado"), 1000);
    });
}

function paso3(dato) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(dato + " -> Paso 3 completado"), 1000);
    });
}

console.log("--- Con promesas anidadas ---");
paso1().then((r1) => {
    console.log(r1);
    paso2(r1).then((r2) => {
        console.log(r2);
        paso3(r2).then((r3) => {
            console.log(r3);
        });
    });
});


async function ejecutar() {
    console.log("--- Con async/await ---");
    let r1 = await paso1();
    console.log(r1);
    let r2 = await paso2(r1);
    console.log(r2);
    let r3 = await paso3(r2);
    console.log(r3);
}

setTimeout(() => ejecutar(), 4000);