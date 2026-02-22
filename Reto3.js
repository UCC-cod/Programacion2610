(function toDoApp(){
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    function crearItemToDo(texto){
        const container = document.createElement("div");
        container.className = "todo-item";

        const label = document.createElement("span");
        label.textContent = texto;

        const containerAcciones = document.createElement("div");
        containerAcciones.className = "row";

        const btnDone = document.createElement("button");
        btnDone.type = "button";
        btnDone.className = "btn";
        btnDone.textContent = "Hecho";

        const btnDelete = document.createElement("button");
        btnDelete.type = "button";
        btnDelete.className = "btn";
        btnDelete.textContent = "Eliminar";

        containerAcciones.append(btnDone, btnDelete);
        container.append(label, containerAcciones);
        return container;
    }

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const texto = input.value.trim();
        const item = crearItemToDo(texto);
        list.prepend(item);
    });

    //Tarea: Hacer la funcionalidad del hecho y el eliminar -> evento de escucha - click
    //El hecho debve subrayar la tarea
    //Eliminar la tarea debe desaparecer

    list.addEventListener("click", (e) => {

    if (e.target.textContent === "Hecho") {
        const item = e.target.closest(".todo-item");
        item.classList.toggle("done");
    }

    if (e.target.textContent === "Eliminar") {
        const item = e.target.closest(".todo-item");
        item.remove();
    }

});
})();