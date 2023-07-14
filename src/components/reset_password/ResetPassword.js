import React from 'react'
import Header from '../common/Header'
import '../../styles/reset_password.css'

const ResetPassword = () => {
  return (
    <div>
      <Header/>
      <div className="reset-password-container">
        <div className="find-your-account-card">
          <p className='card-text-first'>Find your account</p>
          <hr />  
          <p className='card-text-second'>Please enter your email or phone number to search for your account.</p>

          <div className='card-email-container'>
            <input type="text" name='email' id='email' className='card-email-input'/>
          </div>
          <hr />
          <div className='card-buttons-container'>
            <button className='cancel-button'>Cancel</button>
            <button className='search-button'>Search</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResetPassword