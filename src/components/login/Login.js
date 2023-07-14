import React from 'react'
import '../../styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="main-container">
            <div className="first-container">
                <p className='facebook'>facebook</p>
                <p className='welcome-message'>connect with friends and the world</p>
                <p className='welcome-message'>around you on facebook.</p>
            </div>
            <div className="second-container">
                <div className="login-card">
                    <form>
                        <div className="email">
                            <input type="email" name="email" id="email" placeholder='Email or Phone number' className='input-email-login'/>
                        </div>
                        <div className="password">
                            <input type="password" name="password" id="password" placeholder='Password' className='input-password-login'/>
                        </div>

                        <button className='login-button'>Login</button>

                    </form>
                    <div className="forgot-password">
                        {/* <a href="#forgot">Forgot Password?</a> */}
                        <Link to='forgot-password' className='forgot-password-link'>ForgotPassword?</Link>
                        
                    </div>
                    <hr />
                    <button className='create-account-button'>Create new account</button>

                </div>
                <div className="create-page">
                <p><strong><Link to='create-page' className='create-page-link'>Create Page</Link></strong> for a celebrity, brand or business</p>
                </div>
                
            </div>
        </div>
    )
}

export default Login