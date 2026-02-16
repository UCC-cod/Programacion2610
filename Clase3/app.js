// Sel Elementos
function introSelection(){
    const hTitulo = document.getElementById("titulo-demo");
    const selector = document.querySelector("p");
    const allSelector = document.querySelectorAll("p");
    const classSelector = document.getElementsByClassName("tag");
    const nameSelector = document.getElementsByName("usuario");
    hTitulo.textContent = "Este es un texto nuevo";
    hTitulo.innerHTML = "Este es un nuevo texto <strong>HTML</strong>";
    return hTitulo;
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

