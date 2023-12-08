import React from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import firebase from './firebaseConfig'



const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const submit = async(e) =>
  {
    e.preventDefault()
    try 
   
    {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      
      if (user) {
        // alert('Login Succesfully!');
        navigate('/home');
      }
    } 
    catch (error)
    {
      alert(error)
    }
  }
  
  return (
    <>
    <div className='main-container-signup'>
      <div className='header'>
        <h2>Login</h2>
      </div>
      <div className='box'>
        <input type='email' value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
      </div>
      <div className='box'>
        <input type='password' value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
      </div>
      <p>Don't have an account?
        <span>
        <Link to='/'>
           Create Account
        </Link></span>
      </p>
      <button onClick={ submit}>Login</button>
    </div>
    </>
  )
}

export default Login