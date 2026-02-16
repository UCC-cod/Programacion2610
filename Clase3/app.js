//console.log("Hola");

//Selección de elementos
/*
function introSelection(){
    const h3Titulo = document.getElementById("titulo-demo");
    const selector = document.querySelector("p");
    const allSelector = document.querySelectorAll("p");
    const claseSelector = document.getElementsByClassName("tag");
    const nameSelector = document.getElementsByName("usuario");
    h3Titulo.textContent = "Este es un texto nuevo"
    h3Titulo.innerHTML = "Este es un texto nuevo con <strong>HTML</strong>"
    return h3Titulo;  
}

console.log(introSelection());
*/

//Modificar elementos
/*
const pStyle = document.getElementById("p-style");
console.log(pStyle);
pStyle.style.color = "yellow";
pStyle.style.fontWeight= "1000";

const li = document.createElement("li");
li.className = "demo-item";
li.textContent = "Elemento nuevo";
const ul = document.getElementById("list-styles");

//Agregar el elemento nuevo al final
ul.append(li);

//Agregar el elemento nuevo al inicio
ul.prepend(li);

//Seleccionar el último elemento de un nodo padre
const ultimo = ul.lastElementChild;
console.log(ultimo);
//Eliminar un elemento
ultimo.remove();
//pStyle.remove();
*/

//Eventos
//Click, mouse, teclado
/*
(function eventos(){
    const btnAlert = document.getElementById("btn-alert");

    //Click Básico
    btnAlert.addEventListener("click", ()=>{
        console.log("Hice click");
        //alert("Hice click pero con alerta")
        const h3Titulo = document.getElementById("titulo-demo");
        h3Titulo.textContent = "Este es un texto nuevo cuando hago click";
    })

    //Mouse: mouseover(hover) - mouseout
    const box = document.getElementById("hover-box");
    box.addEventListener("mouseover", ()=>{
        box.style.background = "yellow";
        box.textContent = "Mouseover ejemplo";
    });
    box.addEventListener("mouseout", ()=>{
        box.style.background = "transparent";
        box.textContent = "Hover aquí - Mouseout";
    })

    //Teclado: keydown/keyup
    const keyInput = document.getElementById("key-input"); //input
    const keyOut = document.getElementById("key-output"); //span

    keyInput.addEventListener("keydown", (e)=>{
        keyOut.textContent = `Tecla presionada es: ${e.key}`;
    })

    keyInput.addEventListener("keyup", (e)=>{
        console.log("Evento keyup", e.key);
    })
})();
*/

//Formularios y validación

(function formularios(){
    const form = document.getElementById("login-form");
    const mensajeError = document.getElementById("form-output");
    const btnClear = document.getElementById("btn-clear-form");

    function validarCampos({ usuario, clave, rol }){
        const errores = [];
        if(!usuario || usuario.trim().length < 3){
            errores.push("El usuario debe tener más de 3 caracteres");
        }
        if(!clave || clave.length < 5){
            errores.push("La clave debe contener más de 5 caracteres");
        }
        if(!rol){
            errores.push("Debe seleccionar un rol");
        }
        return errores;
    }
    
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const clave = document.getElementById("clave").value;
        const rol = document.getElementById("rol").value;
        
        const errores = validarCampos({ usuario, clave, rol });
        
        if(errores.length>0){
            mensajeError.innerHTML = `<span>Errores: ${errores.join("<br>")}</span>`;
            mensajeError.style.color = "var(--danger)";
            return
        }

        mensajeError.textContent = `Bienvenido, ${usuario} ${rol}`;
        mensajeError.style.color = "var(--ok)";

    });

    btnClear.addEventListener("click", ()=>{
        form.reset();
        mensajeError.textContent = "";
    })

})();





