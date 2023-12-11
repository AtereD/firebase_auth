import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-page'>
        <Link to='/login'>
            <button>Log out</button>
        </Link>
        <h3>
            You've successfully Logged in. Heloo
            
        </h3>
    </div>
  )
}

export default Home