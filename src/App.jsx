import React from 'react'
import { ThemeProvider } from './components/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from "./components/Skills"
import Project from "./components/Project.jsx"
import Contact from './components/Contact'
import './App.css'




function App() {
  return (
    <ThemeProvider>
    <div className="App" >

    <Header/>
    <Hero  />
    <About />
    <Skills />
    <Project />
    <Contact />
    </div>
   </ThemeProvider>
  )
}

export default App;
