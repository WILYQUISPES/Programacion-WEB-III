function separarParesImpares(arreglo) {
    let pares = arreglo.filter(n => n % 2 === 0);
    let impares = arreglo.filter(n => n % 2 !== 0);
    return { pares, impares };
}

let obj = separarParesImpares([1, 2, 3, 4, 5]);
console.log(obj);
