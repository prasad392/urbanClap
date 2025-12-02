
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/pages/login'
import Home from './components/pages/home'
import { AppProvider } from './components/context/AppContext'
import Products from './components/pages/products'

function App() {
  return (
   <>
    <AppProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/' />
        <Route element={<Home/>} path='/home'/>
        <Route element={<Products/>} path='/products'/>
      </Routes>
    </BrowserRouter>
    </AppProvider>
   </>
  )
}

export default App
