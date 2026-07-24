import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import { useEffect } from 'react'
import { getCurrentUser } from './services/api'
import { useDispatch, useSelector } from "react-redux";

export const serverUrl = "http://localhost:8000"
function App() {
  const dispatch = useDispatch();
useEffect( ()=>{
       getCurrentUser(dispatch);
    },[dispatch])
     const {userData} = useSelector((state)=>state.user)
     console.log(userData);
  return (
   
   <>
   <Routes>
    <Route path='/' element={userData ? <Home/> : <Navigate to = "/auth" replace />}/>
    <Route path='/auth' element={userData ?  <Navigate to = "/" replace />:<Auth/>}/>
   </Routes>
   </>
  )
}

export default App
