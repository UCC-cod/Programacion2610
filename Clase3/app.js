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


