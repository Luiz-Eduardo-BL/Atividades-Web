import { useState } from 'react'

const VoltaCidade = () => {

  const [quixada, setQuixada] = useState(0)
  const [crateus, setCrateus] = useState(0)
  const [limoeiro, setLimoeiro] = useState(0)

  const contadorQx = () => {
    setQuixada(quixada + 1)
  }

  const contadorCt = () => {
    setCrateus(crateus + 1)
  }

  const contadorLm = () => {
    setLimoeiro(limoeiro + 1)
  }

  const maisVotado = () => {
    if(quixada > crateus && quixada > limoeiro){
      return "Quixadá"
    }else if(crateus > quixada && crateus > limoeiro){
      return "Crateús"
    }else if(limoeiro > quixada && limoeiro > crateus){
      return "Limoeiro"
    }else{
      return "Empate"
    }
  }

  return (
  <div>
    <div>
      <h2>Quixadá: {quixada}</h2>
      <h2>Limoeiro do Norte: {limoeiro}</h2>
      <h2>Crateus: {crateus}</h2>
    </div>

    <div>
      <button onClick = {contadorQx}>Votar Quixadá</button>
      <button onClick = {contadorLm}>Votar Limoeiro do Norte</button>
      <button onClick = {contadorCt}>Votar Crateus</button>
    </div>

    <div className="container">
      <h2>Mais Votado: {maisVotado()}</h2> 
     </div>
  </div>
  )
}

export default VoltaCidade