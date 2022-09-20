import { useState } from 'react'

const Contador = () => {

  // let contador = 0;
  const [contador, setContador] = useState(0)
  const [sena, setSena] = useState(true)

  const contar = () =>{
    setContador(contador + 1)
  }

  const renderizarSena = () => {
    if(sena){
      return (
        <img src= "https://2.bp.blogspot.com/-OkcBN6LvfvM/XizBoWKkWiI/AAAAAAAAAh4/wM2b9w7dx6QUxzCFNXaAM4bcpjc-05kAgCLcBGAsYHQ/s1600/download-curso-danki-code-desenvolvimento-de-games-sharecursos.jpg"/>
      )
    }
  }

  const modificarSena = () => {
    setSena(!sena)
  }

  return(
    <div>
      <h2 pading="200px">Contador {contador}</h2>
      <button onClick={contar}>Acrescentar</button>
      <button onClick={modificarSena}>Sena</button>
      {
        renderizarSena()
      }
    </div>
  )
}

export default Contador