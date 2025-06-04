import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Skill from './pages/Skill'
import About from './pages/About'
import Project from './pages/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <Skill/>
      <About/>
      <Project/>
    </div>
  )
}

export default App
