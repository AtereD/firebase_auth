import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Signup from './signup'
import Login from './login'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default Rout