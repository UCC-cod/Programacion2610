
function calcularTotal(cuenta, porcentajePropina) {
    let propina = cuenta * (porcentajePropina / 100);
    let total = cuenta + propina;
    return total;
}
function mostrarTotal() {
    let cuenta = Number(document.getElementById("cuenta").value);
    let porcentaje = Number(document.getElementById("propina").value);

    let total = calcularTotal(cuenta, porcentaje);

    document.getElementById("resultado").textContent =
        "Total a pagar: $" + total.toFixed(2);
}
