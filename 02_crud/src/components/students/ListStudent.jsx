import { useState, useEffect } from 'react'
import { studentsList } from './data'
import axios from 'axios'

const ListStudent = () => {

  const [students, setStudents] = useState(studentsList)

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then(response => {
        setStudents(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [students])

  const generateTableBody = () => {
    return students.map(
      (element, index) => <tr>
        <td>{element.name}</td>
        <td>{element.curso}</td>
        <td>{element.IRA}</td>
      </tr> 
    )
  }

  return (
      <div style={{marginTop: 15}}>
        <h1>Lista Estudante</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome: </th>
              <th>Curso: </th>
              <th>Ira: </th>
            </tr>
          </thead>

          <tbody>
            {generateTableBody()}
          </tbody>

        </table>
      </div>
  )
}

export default ListStudent