import React from 'react';
import './LogInSignUp.css'



const LoginSingUp = () => {
      return (
            <div className='logInSignup'>
                  <div className="logInSingUp-container">
                        <h1>Sing Up</h1>
                        <div className="logInSingUp-fields">
                              <input type="text" placeholder='Your Name'/>
                              <input type="email" placeholder='Email Address'/>
                              <input type="password" placeholder='Password'/>
                        </div>
                        <button>Continue</button>
                        <p className="loginInSignUp-login">
                              Already have an account? <span>login here</span>
                        </p>
                        <div className="logInSignUp-agree">
                              <input type="checkbox" name='' id='' />
                              <p>By continuing, i agree to the terms of use & privacy policy</p>
                        </div>
                  </div>
            </div>
      );
};

export default LoginSingUp;