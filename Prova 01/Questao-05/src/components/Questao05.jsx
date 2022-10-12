import { useState, useEffect } from "react"
import axios from "axios"

const Questao05 = () => {

  const [pais, setPais] = useState([])
  const [paisMaisPopuloso, setPaisMaisPopuloso] = useState([])
  const [paisMenosPopuloso, setPaisMenosPopuloso] = useState([])
  const [continente, setContinente] = useState("africa")

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/region/${continente}?fields=name,population`)
      .then(response => {
        setPais(response.data)
      })
  }
  , [continente])

  useEffect(() => {
    setPaisMaisPopuloso(pais.sort((a, b) => b.population - a.population)[0])
  }
  , [pais])

  useEffect(() => {
    setPaisMenosPopuloso(pais.sort((a, b) => a.population - b.population)[0])
  }
  , [pais])

  const handleClick = (e) => {
    setContinente(e.target.value)
  }

  return (
    <div>
      <button value="africa" onClick={handleClick}>África</button>
      <button value="americas" onClick={handleClick}>América</button>
      <button value="asia" onClick={handleClick}>Ásia</button>
      <p>País mais populoso: {paisMaisPopuloso.name}</p>
      <p>País menos populoso: {paisMenosPopuloso.name}</p>
    </div>
  )
}

export default Questao05