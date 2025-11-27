
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/pages/login'
import Home from './components/pages/home'

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/' />
        <Route element={<Home/>} path='/home'/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
