// Sel Elementos
function introSelection(){
    const hTitulo = document.getElementById("titulo-demo");
    const selector = document.querySelector("p");
    const allSelector = document.querySelectorAll("p");
    const classSelector = document.getElementsByClassName("tag");
    const nameSelector = document.getElementsByName("usuario");
    hTitulo.textContent = "Este es un texto nuevo";
    hTitulo.innerHTML = "Este es un nuevo texto <strong>HTML</strong>";
    return classSelector;
}

// Mod Elementos
const pStyle = document.getElementById("p-style");
pStyle.style.color = "red";
pStyle.style.fontWeight = "1000";

const li = document.createElement("li");
li.className = "demo-item";
li.textContent = "Elemento Nuevo";
const ul = document.getElementById("list-styles");
ul.append(li);
ul.prepend(li);

const last = ul.lastElementChild;
last.remove();
console.log(introSelection());

(function events() {
    const btnAlert = document.getElementById("btn-alert");
    btnAlert.addEventListener("click",()=>{
        console.log("Hice click");
    })

    const box = document.getElementById("hover-box");
    box.addEventListener("mouseover", ()=>{
        box.style.background = "yellow";
        box.textContent = "Mouseover"
        box.style.color = "black";
    })
        box.addEventListener("mouseout", ()=>{
        box.style.background = "transparent";
        box.textContent = "Hover aqui";
        box.style.color = "white";
    })

    const keyInput = document.getElementById("key-input");
    const keyOut = document.getElementById("key-output");

    keyInput.addEventListener("keydown", (e)=>{
        keyOut.textContent = `Tecla ${e.key};`
    })

    keyInput.addEventListener("keyup", (e)=>{
        console.log(e);
    }) 
})();

(function forms() {
    const form = document.getElementById("login-form");
    const errmsg = document.getElementById("form-output");
    const bclear = document.getElementById("btn-clear-form");

    function validar({user, clave, rol}) {
        const errores = [];
        if (!user || user.trim().length < 3) {
            errores.push("El usuario debe tener mas de 3 caracteres");
        }
        if (!clave || clave.length < 5) {
            errores.push("La clave debe contener mas de 5 caracteres");
        }
        if (!rol) {
            errores.push("Debe seleccionar un rol")
        }
        return errores;
    }

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const user = document.getElementById("usuario").value;
        const clave = document.getElementById("clave").value;
        const rol = document.getElementById("rol").value;
        const errores = validar({user, clave, rol});

    if (errores.length>0) {
        errmsg.innerHTML = `<span>Errores: ${errores.join("<br>")}</span>`;
        errmsg.style.color = "var(--danger)";
        return;
    }
    errmsg.textContent = `Bienvenido: ${rol} ${user}`;
    errmsg.style.color = "var(--ok)";
    });

    bclear.addEventListener("click", ()=>{
        form.reset();
        errmsg.textContent = "";
    })
})();



