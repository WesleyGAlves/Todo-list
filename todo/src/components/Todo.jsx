import React from 'react'



const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}> {/* Define o estilo para a tarefa. Se ela estiver completa `isCompleted`,  o texto será riscado (line-through). Caso contrário, o estilo será o padrão. */}
        <div className="content">
            <p>{todo.text}</p>    {/* Exibe o texto da tarefa */}
            <p className="category">({todo.category})</p>    {/* Exibe a categoria da tarefa entre parênteses */}
        </div>
        <div>
            <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>  {/* Botão para marcar a tarefa como completa/incompleta */}
            <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>   {/* Botão para remover a tarefa */}
        </div>
    </div>
  )
}

export default Todo