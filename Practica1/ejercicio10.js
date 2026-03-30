/*
Un callback es conveniente cuando se tiene una operacion asincrona simple
y corta, como un setTimeout o un evento del DOM.

Una promesa es necesaria cuando se tienen multiples operaciones asincronas
que dependen unas de otras, ya que permite encadenarlas con .then()
y manejar errores con .catch(), evitando el "callback hell".
*/

console.log("Callback: conveniente para operaciones asincronas simples y cortas.");
console.log("Promesa: necesaria cuando hay multiples operaciones asincronas encadenadas o se necesita mejor manejo de errores.");