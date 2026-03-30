function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

let cad = invertirCadena("abcd");
console.log(cad);