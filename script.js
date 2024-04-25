let data;

// Cargar datos desde data.json
fetch('./data.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
        initializeTodoList();
    })
    .catch(error => {
        console.error('Error al cargar el archivo data.json:', error);
    });

function initializeTodoList() {
    const todoList = document.getElementById('todo-list');

    // Generar TODO list basado en el JSON
    Object.keys(data[0]).forEach((key, index) => {
        const respuesta = data[0][key];

        const div = document.createElement('div');
        div.className = 'todo-item';

        const spanIndex = document.createElement('span');
        spanIndex.textContent = `${index + 1}. `;
        spanIndex.className = 'index';

        const input = document.createElement('input');
        input.type = 'text';

        const span = document.createElement('span');

        div.appendChild(spanIndex);
        div.appendChild(input);
        div.appendChild(span);

        todoList.appendChild(div);

        input.addEventListener('input', () => {
            if (input.value.toLowerCase() === respuesta.toLowerCase()) {
                div.className = 'todo-item correct';
                span.textContent = '[correcto]';
            } else {
                div.className = 'todo-item fail';
                span.textContent = '[fallaste]';
            }
        });
    });
}
