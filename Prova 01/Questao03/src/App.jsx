import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Questao03 from './components/Questao03'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Questao03 />
    </div>
  )
}

export default App
