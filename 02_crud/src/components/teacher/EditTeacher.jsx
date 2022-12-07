import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import FirebaseContext from '../../utils/FirebaseContext'
import TeacherService from '../../services/TeacherService'

const EditTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <EditTeacher firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const EditTeacher = (props)=> {
  
      const [name, setName] = useState('')
      const [course, setCourse] = useState('')
      const [salary, setSalary] = useState(0.0)
  
      const navigate = useNavigate()
      const params = useParams()

      useEffect(
          ()=>{
              TeacherService.retrieve(
                  props.firebase.getFirestoreDb(),
                  (teacher)=>{
                      setName(teacher.name)
                      setCourse(teacher.course)
                      setSalary(teacher.salary)
                  },
                  params.id
              )
          }
          ,
          []
      )

      const handleSubmit = (event)=> {
          event.preventDefault()
          const teacherUpdated = {name,course,salary}
          TeacherService.update(
              props.firebase.getFirestoreDb(),
              (result)=>{
                alert('Professor atualizado com sucesso!')
                navigate('/listTeacher')
              },
              params.id,
              teacherUpdated
          )
      }

      return (
          <div style={{marginTop:20}}>
              <h2>Editar Professor</h2>
              <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                      <label>Nome: </label>
                      <input 
                      type='text' 
                      className='form-control' 
                      value={name} 
                      onChange={(event)=>setName(event.target.value)} 
                      />
                  </div>
                  <div className='form-group'>
                      <label>Curso: </label>
                      <input 
                      type='text' 
                      className='form-control' 
                      value={course} 
                      onChange={(event)=>setCourse(event.target.value)} 
                      />
                  </div>
                  <div className='form-group'>
                      <label>Salário: </label>
                      <input type='number' 
                      className='form-control' 
                      value={salary} 
                      onChange={(event)=>setSalary(event.target.value)} 
                      />
                  </div>
                  <div className='form-group'>
                      <input 
                      type='submit' 
                      value='Editar Professor' 
                      className='btn btn-primary' />
                  </div>
              </form>
          </div>
      )
  }

  export default EditTeacherPage