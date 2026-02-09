// Variables principales
let valorCuenta = 0;          
let numeroPersonas = 0;       
let porcentajePropina = 0;    

// Función para calcular la propina y el total
function calcularPropina() {
    valorCuenta = parseFloat(document.getElementById("cuenta").value);
    numeroPersonas = parseInt(document.getElementById("personas").value);

    // Validaciones
    if (isNaN(valorCuenta) || valorCuenta <= 0) {
        alert("Ingresa un valor válido para la cuenta");
        return;
    }
    if (isNaN(numeroPersonas) || numeroPersonas <= 0) {
        document.getElementById("errorPersonas").style.display = "block";
        return;
    } else {
        document.getElementById("errorPersonas").style.display = "none";
    }

    // Cálculos
    const propinaTotal = valorCuenta * (porcentajePropina / 100);
    const totalGeneral = valorCuenta + propinaTotal;
    const propinaPorPersona = propinaTotal / numeroPersonas;
    const totalPorPersona = totalGeneral / numeroPersonas;

    // Formato COP con separador de miles
    const formatoCOP = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 2
    });

    // Mostrar resultados
    document.getElementById("propinaPorPersona").innerText = formatoCOP.format(propinaPorPersona);
    document.getElementById("totalPorPersona").innerText = formatoCOP.format(totalPorPersona);
    document.getElementById("totalGeneral").innerText = formatoCOP.format(totalGeneral);
}

// Función para seleccionar porcentaje
function seleccionarPorcentaje(valor) {
    porcentajePropina = parseFloat(valor);
    calcularPropina();
}

// Función reset
function resetCalculadora() {
    document.getElementById("cuenta").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("propinaPorPersona").innerText = "COP $0.00";
    document.getElementById("totalPorPersona").innerText = "COP $0.00";
    document.getElementById("totalGeneral").innerText = "COP $0.00";
    document.getElementById("errorPersonas").style.display = "none";
    porcentajePropina = 0;
}
