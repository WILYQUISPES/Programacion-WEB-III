function contarVocales(texto) {
    let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let char of texto.toLowerCase()) {
        if (vocales.hasOwnProperty(char)) {
            vocales[char]++;
        }
    }
    return vocales;
}

let obj = contarVocales("euforia");
console.log(obj);