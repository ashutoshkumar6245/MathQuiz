import { useState } from 'react'
import './App.css'
import QuizContainer from './assets/modules/quizContainer'
import User from './components/user'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Difficulty from './components/defficultyOption'
function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
     <Route path="/" element={<User/>}/>
     <Route path="/difficulty" element={<Difficulty/>}/>
    <Route path="/quiz/:id" element={<QuizContainer/>}/>
    </Route>
  
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
