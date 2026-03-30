function esPalindromo(cadena) {
    let invertida = cadena.split("").reverse().join("");
    return cadena === invertida;
}

console.log(esPalindromo("oruro"));
console.log(esPalindromo("hola"));