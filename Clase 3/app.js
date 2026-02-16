//console.log("Hola");

//Selección de elementos 
function introSelection () {
    const h3Titulo = document.getElementById("titulo-demo"); 
    const selector = document.querySelector("p");
    const allSelector = document.querySelectorAll ("p");
    const ClaseSelector = document.getElementsByClassName("tag");
    const nameSelector = document. getElementsByClassName("Usuario");
    h3Titulo.textContent = "Texto nuevo" ;
    h3Titulo.innerHTML = "Texto nuevo con <strong> HTML </strong>";
    return h3Titulo;
}

console.log(introSelection());