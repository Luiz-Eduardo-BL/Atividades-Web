import { Link } from 'react-router-dom'
import './App.css';
import CRUDRoutes from './components/routes/CRUDRoutes';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'> 
        <Link to='/' className='navbar-brand' style={{ paddingLeft: 10 }}>CRUD</Link>
        <ul className='navbar-nav mr-auto'>
          
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>

          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/createStudent">Criar Estudantes</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/listStudent">Listar Estudantes</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/createTeacher">Criar Professor</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/listTeacher">Listar Professor</a>
                </li>
              </ul>
            </li>
        </ul>
      </nav>
      {<CRUDRoutes />}
    </div>
  );
}

export default App;
