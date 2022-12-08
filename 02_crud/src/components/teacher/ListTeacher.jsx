import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import FirebaseContext from '../../utils/FirebaseContext'

import TeacherService from '../../services/TeacherService'

const ListTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <ListTeacher firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const ListTeacher = (props) => {
  
      const [teachers, setTeachers] = useState([])
      const [reload, setReload] = useState(false)
  
      useEffect(
          () => {
              TeacherService.list(
                  props.firebase.getFirestoreDb(),
                  (teachers) => {
                      setTeachers(teachers)
                  }
              )
          }
          ,
          []
      )
  
      function deleteTeacher(id) {
          if (window.confirm('Deseja excluir?')) {
              TeacherService.delete(
                  props.firebase.getFirestoreDb(),
                  ()=>{
                    let teachersTemp = teachers
                    for(let i=0;i<teachersTemp.length;i++){
                          if(teachersTemp[i].id===id){
                              teachersTemp.splice(i,1)
                              break
                          }
                    }
                    setTeachers(teachersTemp)
                    setReload(!reload)
                  },
                  id
              )//delete
          }
      }

      const generateTableBody = () => {

        return teachers.map(
            (teacher) => {
                return (
                    <tr>
                        <td>{teacher.id}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.course}</td>
                        <td>{teacher.salary}</td>
                        <td>
                            <Link to={'/editTeacher/' + teacher.id} className='btn btn-primary'>
                                Editar
                            </Link>
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={() => deleteTeacher(teacher.id)}>
                                Apagar
                            </button>
                        </td>
                    </tr>
                )
            }
        )
      }

  
      return (
        <div>
            <h1>Lista de Professores</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Salário</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
      )
  }

  export default ListTeacherPage