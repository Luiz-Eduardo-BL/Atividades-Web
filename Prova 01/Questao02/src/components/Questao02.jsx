import { useState } from 'react'

const Questao02 = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)

  const handleSum = () => {
    setResult(number1 + number2)
  }

  const handleSubtraction = () => {
    setResult(number1 - number2)
  }

  const handleMultiplication = () => {
    setResult(number1 * number2)
  }

  const handleDivision = () => {
    setResult(number1 / number2)
  }

  const handleClear = () => {
    setNumber1(0)
    setNumber2(0)
    setResult(0)
  }

  return (
    <div>
      <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
      <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
      <button onClick={handleSum}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <button onClick={handleClear}>Clear</button>
      <p>{result}</p>
    </div>
  )
}

export default Questao02