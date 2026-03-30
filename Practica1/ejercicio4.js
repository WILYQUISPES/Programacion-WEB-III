function mayorMenor(arreglo) {
    return { mayor: Math.max(...arreglo), menor: Math.min(...arreglo) };
}

let obj = mayorMenor([3, 1, 5, 4, 2]);
console.log(obj);