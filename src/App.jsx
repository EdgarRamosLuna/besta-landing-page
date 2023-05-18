import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Formulario from './pages/Formulario'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/formulario/:car" element={<Formulario />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
