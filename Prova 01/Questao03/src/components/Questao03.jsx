import { useState, useEffect } from "react"
import axios from "axios"
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const Questao03 = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(90)


  const getPokemons = async () => {
    setLoading(true)
    let offset = page*10
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
    setPokemons(data.results)
    setLoading(false)
  }

  const getPokemon = async (url) => {
    setLoading(true)
    const { data } = await axios.get(url)
    setPokemon(data)
    setLoading(false)
  }

  const nextClickHandler = () => {
    if (page < totalPages) {
      setPage(page+1)
    }
  }

  const previousClickHandler = () => {
    if (page>=0){
      setPage(page-1)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [page])


  return (
    <div> 
      <button onClick={nextClickHandler}>Next</button>
      <button onClick={getPokemons}>Get Pokemons</button>
      <button onClick={previousClickHandler}>Previous</button>
      {loading ? <p>Loading...</p> : (
        <ul class="list-group">
          {pokemons.map((pokemon, index) => (
            <li class="list-group-item" key={index} onClick={() => getPokemon(pokemon.url)}>{pokemon.name}</li>
          ))}
        </ul>
      )}
      {pokemon.name && (
        <div>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} class="rounded mx-auto d-block" alt={pokemon.name}/>
        </div>
      )}
    </div>
  )
}

export default Questao03
