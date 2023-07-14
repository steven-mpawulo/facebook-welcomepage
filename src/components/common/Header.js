import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

const Header = () => {
  return (
    <div><div>
    <header>
        <div className="my-header">
            <p className='facebook-text'>facebook</p>
            <div className="my-form">
            <form>
                <input type="email" name='email' id='email' placeholder='Email'/>
                <input type="password" name='password' id='password' placeholder='Password' className='input-password-header'/>
                <button className='login-button-header'>Login</button>
            </form>
            </div>
            <div className="forgot-account-header">
            <Link to='forgot-account'>Forgot Account?</Link>
            </div>
        </div>
    </header>
</div></div>
  )
}

export default Header