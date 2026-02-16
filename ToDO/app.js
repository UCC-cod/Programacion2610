(function toDOapp(){
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    function crearItemTODO(texto){
        const container = document.createElement("div")
        container.className = "todo-item"

        const label = document.createElement("span")
        label.textContent = texto;

        const containerAcciones = document.createElement("div")
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
        const texto = input.ariaValueMax.trim();
        const item= crearItemTODO(texto);
        list.prepend(item);
    });

    //tarea: hacer la funcionalidad del hecho y el eliminar -> evento de escucha -click
    // el hecho debe subrayar la tarea
    //Eliminar la tarea debe desaparecer 
})();   
