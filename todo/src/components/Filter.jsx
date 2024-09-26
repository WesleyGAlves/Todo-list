
const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">  {/* Filtro por status: Todas, Completas ou Incompletas */}
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>  {/* Opção para mostrar todas as tarefas */}                          
                    <option value="Completed">Completas</option>   {/* Opção para mostrar apenas tarefas completas */}
                    <option value="Incomplete">Incompletas</option>     {/* Opção para mostrar apenas tarefas incompletas */}
                </select>
            </div>
            <div>
                <p>Ordem Alfabética</p>
                <button onClick={() => setSort("Asc")}>Asc</button>   {/* Botão para ordenar em ordem ascendente */}
                <button onClick={() => setSort("Desc")}>Desc</button>   {/* Botão para ordenar em ordem descendente */}
            </div>
        </div>
    </div>
  )
}

export default Filter