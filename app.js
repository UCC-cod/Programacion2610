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