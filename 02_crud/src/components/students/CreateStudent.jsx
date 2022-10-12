import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {

  const [name, setName] = useState('')
  const [curso, setcurso] = useState('')
  const [IRA, setIra] = useState(0.00)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newStudent = {name, curso, IRA}
    axios.post('http://localhost:3001/students', newStudent)
    .then((response)=>{
      console.log(response.data.id)
      navigate('/listStudent')
    })
    .catch(error => console.log(error))
  }

  return (
      <div style={{marginTop: 15}}>
        <h2>Cria Estudante</h2>

        <form>
          <div className='form-group'>
            <label>Nome: </label>
            <input 
              type="text" 
              className='form-control' value={name} 
              onChange={
                (event) => setName(event.target.value)  
              }
              
              placeholder="Digite seu Nome" 
              />
          </div>

          <div className='form-group'>
            <label>Curso: </label>
            <input 
              type="text" 
              className='form-control' value={curso} 
              onChange={
                (event) => setcurso(event.target.value)
              }
              placeholder="Digite seu Curso"
              />
          </div>

          <div className='form-group'>
            <label>IRA: </label>
            <input type='number' 
              className='form-control' value={IRA} 
              onChange={
                (event) => setIra(event.target.value)
              }
              placeholder="Escolha seu IRA!!"
              />
          </div>

          <div className='form-group' style={{marginTop: 15}}>
            <input 
              type='submit' 
              value='Criar Estudante'
              className='btn btn-primary'
              onClick={handleSubmit}
              />
          </div>

        </form>

      </div>
  )
}

export default CreateStudent