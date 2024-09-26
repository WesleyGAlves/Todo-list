import { useState } from 'react'
import "./App.css"
import Todo from "./components/Todo"
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {

  //predefinições para o projeto
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

   // Estado para armazenar o valor da busca.
  const [search, setSearch] = useState("")

  // Estado para armazenar o filtro atual (todos, completos ou incompletos).
  const [filter, setFilter] = useState("All")

  // Estado para armazenar a ordem de classificação (ascendente ou descendente).
  const [sort, setSort] = useState("Asc")

  // Função para adicionar uma nova tarefa (todo) à lista.
  const addTodo = (text, category) => {
    const newTodos = [...todos, 
      {
      id: Math.floor(Math.random() * 10000),    // Gera um ID único para a nova tarefa.
      text,                                     // O texto da tarefa.
      category,                                 // A categoria da tarefa.
      isCompleted: false,                       // Define que a nova tarefa não está completa.
      },
    ];

    setTodos(newTodos);  // Atualiza o estado de todos com a nova lista de tarefas.
  }

  // Função para remover uma tarefa da lista pelo ID.
  const removeTodo = (id) => {
    const newTodos = [...todos] // Cria uma cópia da lista atual de tarefas.
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null); // Filtra a tarefa a ser removida. 
    setTodos (filteredTodos); // Atualiza o estado com a nova lista, sem a tarefa removida.
  }

  // Função para marcar uma tarefa como completa/incompleta.
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo); // Alterna o estado de "completa" da tarefa pelo ID.
    setTodos(newTodos);
  }

  return ( 
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
          .filter((todo) => 
            filter === "All" ? true     // Se o filtro for "All", mostra todas as tarefas.
            : filter === "Completed" 
            ? todo.isCompleted :        // Se o filtro for "Completed", mostra apenas as tarefas completas.
            !todo.isCompleted)          // Caso contrário, mostra as incompletas.
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase())  // Filtra as tarefas que coincidem com o termo de busca.
            )
            .sort((a, b) => sort === "Asc"
            ? a.text.localeCompare(b.text)    // Ordena as tarefas em ordem alfabética ascendente.
            : b.text.localeCompare(a.text)    // Ordena as tarefas em ordem alfabética descendente.
            )
            .map((todo) => ( // Mapeia cada tarefa para o componente Todo, passando as funções de remover e completar.
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
