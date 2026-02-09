/*crear una funcion en javascript que reciba el valor de una cuenta y el porcentaje de propina, y retorne el total a pagar. Implementa una interfaz sencilla (HTML + CSS) con un formulario que permita ingresar los valores y muestre el resultado al usuario. Este reto introduce el pensamiento imperativo, funciones, operadores y manejo de datos numéricos.*/

/* datos de eentrada, valor de la cuenta  :***, porcentaje de propina: *****
*/

/* calcula el total a pagar */
function calcularTotal(cuenta, porcentaje) {
    const propina = cuenta * (porcentaje / 100);
    const total = cuenta + propina;
    return total;
}


