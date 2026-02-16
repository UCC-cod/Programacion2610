console.log("Hola");

/*function introSelection() {
    const h3titulo = document.getElementById("titulo-demo");
    const selector = document.querySelector("p");
    const allSelector = document.querySelectorAll("p");
    const classSelector = document.getElementsByClassName("tag");
    const nameSelector = document.getElementsByName("usuario");

    return {nameSelector, classSelector, allSelector, selector, h3titulo};
}

console.log(introSelection());

const pStyle = document.getElementById("p-style");
console.log(pStyle);
pStyle.style.color = "yellow";
pStyle.style.fontSize = "20px";
*/

(function eventos() {
    const btnAlert = document.getElementById("btn-alert");

    // Click normal → alerta
    btnAlert.addEventListener("click", () => {
        console.log("¡Hola desde el botóncito!");
    });

    // Doble click → abrir YouTube
    btnAlert.addEventListener("dblclick", () => {
        window.open("https://www.youtube.com", "_blank");
    });

    const box = document.getElementById("hover-box");
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
        box.textContent = "HOLAAAAAAA";
    });
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "transparent";
        box.textContent = "ADIOOOOS";
    });

})();


// Formularios
(function Formularios() {
    const form = document.getElementById("login-form");
    const mensajeError = document.getElementById("form-output");

    function validarCampos({usuario, password, rol}) {
        const errores = [];
        if (!usuario || usuario.trim().length < 3) {
            errores.push("El usuario debe tener mas de 3 caracteres");
        }
        if (!password || password.trim().length < 4) {
            errores.push("La contraseña debe tener mas de 4 caracteres");
        }
        if (!rol) {
            errores.push("Por favor, selecciona un rol");
        }
        return errores;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const usuario = document.getElementById("usuario").value; 
        const password = document.getElementById("clave").value;
        const rol = document.getElementById("rol").value;

        const errores = validarCampos({usuario, password, rol});
        console.log(errores);
        if (errores.length > 0) {
            mensajeError.innerHTML = `<span>Errores: ${errores.join("<br>")}</span>`;
            mensajeError.style.color = "var(--danger)";
            return
        }
        mensajeError.textContent = `Bienvenido, ${usuario} ${rol}`;
        mensajeError.style.color = "var(--ok)";
          
    })

    

})();
