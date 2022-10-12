import { useState } from 'react'
import './App.css'

import Questao01 from './components/Questao01'
import Questao01A from './components/Questao01A'
import Questao01B from './components/Questao01B'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Questao01>
        <Questao01A/>
        <Questao01B/>
      </Questao01>
    </div>
  )
}

export default App
