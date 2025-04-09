document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('tarefaInput');
    const botao = document.getElementById('adicionarBtn');
    const lista = document.getElementById('listaTarefas');

    // Adicionar tarefa
    botao.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            const novaTarefa = document.createElement('li');
            novaTarefa.textContent = input.value;
            lista.appendChild(novaTarefa);
            input.value = '';

            // Marcar como concluída
            novaTarefa.addEventListener('click', function() {
                this.classList.toggle('concluida');
            });
        }
    });

    // Adicionar com Enter
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            botao.click();
        }
    });
});