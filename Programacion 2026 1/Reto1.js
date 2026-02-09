/*calculadora de propinas */

const calcularTotal = (costo, porcentaje)=>{
    const propina = costo * (porcentaje / 100);
    const total = costo + propina;
    return total;
}

costo = 100;
porcentaje = 15; 

console.log("El costo total es: ", calcularTotal(costo, porcentaje));
