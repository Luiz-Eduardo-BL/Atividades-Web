import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Questao05 from './components/Questao05'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Questao05 />
    </div>
  )
}

export default App
