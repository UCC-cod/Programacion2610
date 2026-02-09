function calcular() {

  let total = Number(document.getElementById("number").value);
  let porcentaje = Number(document.getElementById("porcentaje").value);

  let propina = total * (porcentaje / 100);
  let totalFinal = total + propina;

  document.getElementById("resultado").innerHTML =
    "Propina: " + propina +
    "<br>Total a pagar: " + totalFinal;
}
