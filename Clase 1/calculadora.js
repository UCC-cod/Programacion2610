function calcularTotal() {
    // Obtener valores del formulario
    let cuenta = document.getElementById("cuenta").value;
    let propina = document.getElementById("propina").value;

    // Convertir a números
    cuenta = parseFloat(cuenta);
    propina = parseFloat(propina);

    // Calcular propina y total
    let valorPropina = cuenta * (propina / 100);
    let total = cuenta + valorPropina;

    // Mostrar resultado
    document.getElementById("resultado").innerText =
      "Total a pagar: $" + total.toFixed(2);
  }

