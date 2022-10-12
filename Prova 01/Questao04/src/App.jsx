import { useState } from 'react'
import './App.css'
import Questao04 from './components/Questao04'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Questao04 />
    </div>
  )
}

export default App
