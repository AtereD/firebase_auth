import React from 'react'
import './signup.css'
import Login from './login'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import firebase from './firebaseConfig'

const Signup = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  
  const submit = async(e) =>
  {
    e.preventDefault()
    try 
    {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      
      if (user) {
        alert('Account Created Succesfully!');
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
        <h2>SignUp</h2>
      </div>
      <div className='box'>
        <input type='text' value={name} placeholder='UserName' onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div className='box'>
        <input type='email' value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
      </div>
      <div className='box'>
        <input type='password' value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
      </div>
      <p>Already have an Account? 
        <span>
        <Link to='/login'>
          Login
        </Link></span>
      </p>
      <button onClick={submit}>Sign Up</button>
    </div>
    </>
  )
}

export default Signup