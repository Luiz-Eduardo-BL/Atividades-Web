import { useState, useEffect } from "react"
import axios from "axios"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

const Questao04 = () => {

  const [pais, setPais] = useState([])
  const [paisMaisPopuloso, setPaisMaisPopuloso] = useState("")
  const [populacao, setPopulacao] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios.get("https://restcountries.com/v2/region/africa?fields=name,population")
      .then(response => {
        setPais(response.data)
      })
  }
  , [])

  const handlePaisMaisPopuloso = () => {
    let maiorPopulacao = 0
    let paisMaisPopuloso = ""
    pais.forEach(pais => {
      if (pais.population > maiorPopulacao) {
        maiorPopulacao = pais.population
        paisMaisPopuloso = pais.name
      }
    })
    setPaisMaisPopuloso(paisMaisPopuloso)
    setPopulacao(maiorPopulacao)
  }

  const handleLimpar = () => {
    setPaisMaisPopuloso("")
    setPopulacao(0)
  }


  const handlePaisesMaisPopulosos = () => {
    setShow(true)
    setPaisMaisPopuloso("")
    setPopulacao(0)
    let paisesOrdenados = pais.sort((a, b) => {
      return b.population - a.population
    })
    let paisesMaisPopulosos = paisesOrdenados.slice(0, 5)
    setPais(paisesMaisPopulosos)
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>País mais populoso da África</h1>
          <button className="btn btn-primary" onClick={handlePaisMaisPopuloso}>Buscar</button>
          <button className="btn btn-danger" onClick={handleLimpar}>Limpar</button>
          <p>País: {paisMaisPopuloso}</p>
          <p>População: {populacao}</p>

          <button className="btn btn-primary" onClick={handlePaisesMaisPopulosos}>Mostrar os 5 países mais populosos</button>
          {
            show ? (
              <ul>  
              {pais.map(pais => {
                return (
                  <li key={pais.name}>{pais.name} - {pais.population}</li>
                )
              })}
            </ul>
            )
            :
            (
              <div></div>
            )
          }
         
        </div>
      </div>
    </div>
  )
}

export default Questao04