//console.log("Hola");

//Selección de elementos

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

const pstyle = document.getElementById("p-style");
console.log(pstyle);
pstyle.style.color = "yellow";
pstyle.style.fontSize = "20px";
const li = document.createElement("li");
li.className = "demo item";
li.textContent = "nuevo elemento";
const ul = document.getElementById("list-styles");
// este me lo agrega al final 
ul.append(li);
// este me lo agrega al principio
ul.prepend(li);
const ultimo = ul.lastElementChild;
console.log(ultimo);
ultimo.remove();

// Eventos 
// click, mouse ,teclado
(function eventos(){
const btnAlert = document.getElementById("btn-alert");
btnAlert.addEventListener("click", function(){
    console.log("Se hizo click en el boton");
    alert("Hola, se hizo click en el boton");
})
//mouse: mouseover (hover)
const box  = document.getElementById("hover-box");
box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "lightblue";
    box.textContent = "mouseover ejemplo";
});
box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "transparent";
    box.textContent = "hove aqui con - Mouseout";
});
 //teclado: keydown, keyup
 const keyInput = document.getElementById("key-input");// input de texto
 const keyout = document.getElementById("key-output");// spam

    keyInput.addEventListener("keydown",(e)=>{
        keyout.textContent = `Tecla presionada: ${e.key}`;
    });

    keyInput.addEventListener("keyup",(e)=>{
        keyout.textContent = `Tecla soltada: ${e.key}`;
    });
        
})();
 // formulacion y validacion 
 function formulario(){
    const form = document.getElementById("login-form");
    const mensajeError = document.getElementById("form-output");
    
    function validarCampos({usuario,clave,rol}){
        const errores= [];
        if(usuario.value.trim() === ""){
            errores.push("El campo usuario es obligatorio");
        }
        if(clave.value.trim() === ""){
            errores.push("El campo clave es obligatorio");
        }
        if(rol.value === ""){
            errores.push("El campo rol es obligatorio");
        }
        return errores; 
    } 
    form .addEventListener("submit",(e)=>{
        e.preventDefault();
        const usuario = document.getElementById("usuario").value;
        console.log(usuario);     
        const clave = document.getElementById("clave").value;
        const rol = document.getElementById("rol").value;
        
        log("comprobando", usuario, clave, rol);
        const errores = validarCampos({usuario,clave,rol});
        if(errores.length > 0){
            mensajeError.innerHTML = `<span class="error">${errores.join("<br>")}</span>`;
            mensajeError.style.color = "var(--danger)";
            return
        }
        mensajeError.textContent = `Bienvenido ${usuario} ${rol}`;
        mensajeError.style.color = "var(--success)";
    });
 }