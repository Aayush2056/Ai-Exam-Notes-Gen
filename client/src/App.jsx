import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Home from './Pages/Home'

export const serverUrl = "http://localhost:8000"
function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Auth/>}/>
   </Routes>
   </>
  )
}

export default App
