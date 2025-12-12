import Home from './pages/Home.jsx'
import AddTask from './pages/AddTask.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Adicionar Tarefa</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTask />} />
      </Routes>
    </div>
  )
}
