import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import CreateStudent from './components/students/CreateStudent'
import CreatProfessor from './components/students/CreatProfessor'
import EditStudent from './components/students/EditStudent'
import ListProfessor from './components/students/ListProfessor'
import ListStudent from './components/students/ListStudent'

function App() {
  return (
    <div className="container">
      <nav className='navbar navbar-expand-lg  navbar-dark bg-dark' >
        <Link to={'/'} className='navbar-brand' style={{ paddingLeft: 10 }}> CRUD </Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent' style={{display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li> 
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/createStudent">Criar Estudantes</a></li>
                <li><a class="dropdown-item" href="/listStudent">Listar Estudantes</a></li>
                <li><a class="dropdown-item" href="/editStudent">Editar Estudantes</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/creatProfessor">Criar Professor</a></li>
                <li><a class="dropdown-item" href="/listProfessor">Listar Professor</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='createStudent' element={<CreateStudent />} />
        <Route path='listStudent' element={<ListStudent />} />
        <Route path='editStudent' element={<EditStudent />} />
        <Route path='creatProfessor' element={<CreatProfessor/>} />
        <Route path='listProfessor' element={<ListProfessor/>} />
      </Routes>
    </div>
  );
}

export default App;
