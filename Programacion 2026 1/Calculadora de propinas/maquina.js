const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

const calcularTotal = (costo, porcentaje) => {
    const propina = costo * (porcentaje / 100);
    return costo + propina;
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que la página se me recargue

    const costo = Number(document.getElementById("costo").value);
    const porcentaje = Number(document.getElementById("porcentaje").value);

    const total = calcularTotal(costo, porcentaje);

    resultado.textContent = "El total a pagar es: " + total;
});
