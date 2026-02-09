
const restar = function (x = 0, y = 0) {
    return x - y;
};

function calcular() {
    let cuenta = Number(document.getElementById("cuenta").value);
    let porcentaje = Number(document.getElementById("porcentaje").value);

    if (cuenta <= 0 || porcentaje < 0) {
        alert("Ingrese valores numéricos válidos");
        return;
    }

    let propina = cuenta * (porcentaje / 100);
    let total = cuenta + propina;

    document.getElementById("resultado").innerText =
        "Total a pagar: $" + total.toFixed(2);
}
