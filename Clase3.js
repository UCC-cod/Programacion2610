//console.log("Hola");

//Selección de elementos 
/*function introSelection () {
    const h3Titulo = document.getElementById("titulo-demo"); 
    const selector = document.querySelector("p");
    const allSelector = document.querySelectorAll ("p");
    const ClaseSelector = document.getElementsByClassName("tag");
    const nameSelector = document. getElementsByClassName("Usuario");
    h3Titulo.textContent = "Texto nuevo" ;
    h3Titulo.innerHTML = "Texto nuevo con <strong> HTML </strong>";
    return h3Titulo;
}

console.log(introSelection());*/

// Modificar elementos 
/*const pStyle =document.getElementById("p-style");
console.log (pStyle);
pStyle.style.color = "blue";
pStyle.style.fontWeight= "1000";

const li = document.createElement("li");
li.className = "demo-item";
li.textoContent = "Elemento nuevo";
const ul = document.getElementById("list-styles");
//Lo agrega al final de la lista 
ul.append(li);

// Lo agrega al inicio de la lista 
ul.prepend(li);

const ultimo = ul.lastElementChild;
console.log(ultimo);
ultimo.remove();// Elimina el último elemento de la lista
pStyle.remove(); // Elimina el elemento del selector pStyle

*/

//Eventos 
//Click, mouse, teclado
/*(function eventos(){
    const btnAlert = document.getElementById("btn-alert");
    btnAlert.addEventListener("click", ()=>{
        console.log ("Haz hecho click en el botón");
        //alert("Haz hecho click en el botón");
       const h3Titulo = document.getElementById("titulo-demo"); 
       h3Titulo.innerHTML = "Texto nuevo con <strong> HTML </strong>";

    })

    //Mouse : mouseover (hover)
    const box = document.getElementById("hover-box");
    box.addEventListener ("mouseover", () => {
        box.style.backgroundColor = "red";
        box.textContent =" Mouseover ejamplo";
    });
    box.addEventListener ("mouseout", () =>{
        box.style.background = "transparent";
        box.textContent = "Hover aquí -Mouseout";
    });

    //Teclado : keydown, keyup
    const keyInput = document.getElementById("key-input");//Inptu 
    const keyOut = document.getElementById("key-output"); //Span

    keyInput.addEventListener("keydown", (e) => {
        keyOut.textContent = `Tecla presionada es: ${e.key}`;
       
    });

    keyInput.addEventListener("keyup", (e) => {
        keyOut.textContent = `Tecla soltada es: ${e.key}`;
    });
})();
*/

//Eventos de formulario
(function formularios () {
    const from = document.getElementById("login-form");
    const mensajeError = document.getElementById("form-output");
    const btnClear = document.getElementById("btn-clear-form");
    function validarCampos ({usuario, clave, rol}){
        const errores =[];
        if (!usuario || usuario.trim().length < 3){
            errores.push("El campo usuario es obligatorio y debe tener al menos 3 caracteres");
        }
        if (!clave || clave.trim().length < 5){
            errores.push("El campo clave es obligatorio y debe tener al menos 5 caracteres");
        }
        if (!rol){
            errores.push("El campo rol es obligatorio");
        }
        return errores;
    }

    from.addEventListener("submit", (e) => {
        e.preventDefault();
        const usuario = document.getElementById("usuario").value;
        const clave = document.getElementById("clave").value;
        const rol = document.getElementById("rol").value;

        const errores = validarCampos({usuario, clave, rol});
        if (errores.length > 0){
            mensajeError.innerHTML = `<span> ${errores.join("<br>")}</span>`;
            mensajeError.style.color = "var(--danger)";
            return
        }
        mensajeError.textContent = `Bienvenido, ${usuario} ${rol}`;
        mensajeError.style.color = "var(--ok)";
    });
     btnClear.addEventListener("click", () => {
      from.reset();
      mensajeError.textContent = "";
     });
})();