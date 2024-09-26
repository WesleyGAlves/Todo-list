

const Search = ({search,setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..."/> {/* Atualiza o estado de busca conforme o usuário digita.*/}
    </div>
  )
}

export default Search