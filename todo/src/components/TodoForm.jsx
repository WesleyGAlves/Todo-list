import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");         // Estado para armazenar o valor do título da tarefa.
    const [category, setCategory] = useState("");   // Estado para armazenar o valor da categoria da tarefa.

    // Função para lidar com o envio do formulário.
    const handleSubmit = (e) => {   
        e.preventDefault();              // Evita o comportamento de recarregar a página.
        if(!value || !category) return;  // Verifica se o valor do título e da categoria estão preenchidos.
        addTodo(value, category);        // Adiciona a nova tarefa chamando a função addTodo com o título e a categoria.

        // Limpa os campos de entrada após a criação da tarefa.
        setValue("");   
        setCategory("");
    }

    return (
        <div className='todo-form'>
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} />     {/* Atualiza o estado do título quando o usuário digita.*/}
                <select value={category} onChange={(e) => setCategory(e.target.value)}>     {/* Atualiza o estado da categoria quando o usuário seleciona.*/}
                    <option value="">Selecione uma categoria</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    ) 
}

export default TodoForm