(function toDoApp() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    function createTodoItem(text) {
        const container = document.createElement('div');
        container.className = 'todo-item';

        const label = document.createElement('span');
        label.textContent = text;

        const cantainerActions = document.createElement('div');
        cantainerActions.className = 'row'; 

        const btnDone = document.createElement('button');
        btnDone.type = 'button';
        btnDone.className = 'btn btn-success';
        btnDone.textContent = 'Done';

        const btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.className = 'btn btn-danger';
        btnDelete.textContent = 'Delete';
        cantainerActions.append(btnDone, btnDelete);
        container.append(label, cantainerActions);
        return container;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
            const texto = input.value.trim();
            const todoItem = createTodoItem(texto);
            list.prepend(todoItem);
    });

    //Tarea: Hacer la funcionalidad del hecho y el eliminar -> evento de escucha - click
    //El hecho debve subrayar la tarea
    //Eliminar la tarea debe desaparecer

    
})();