
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from "./components/Skills"
import Project from "./components/Project.jsx"
import Contact from './components/projectsComponents/Contact'

import './App.css'

function App() {


  return (
    <div className="App">
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </div>
  )
}

export default App;
