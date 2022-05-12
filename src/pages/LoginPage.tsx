import '../styles/login-page.scss'

import googleIconIMG from '../assets/login-page/googleicon.svg' 

export function LoginPage() {
  return (
    <div id="auth">
      <main>
        <div className="main-content grid">
          <div className="welcome">
            <strong>WELCOME BACK</strong>
            <p>Welcome back! Please enter your detalis</p>
          </div>
         
          <div className="form">
            <p>Email</p>
            <input type='text' name='Email' placeholder='Enter your email' />
             

            
            <p>Password</p>
            <input type="text" name='Password' placeholder='*******'
            checked />

          </div>
          <div className="checkbox">
            
        
            <input type="checkbox" />
            <span>Remember me</span>
       

            <a href="#">Forgot password</a>
          </div>
          <button className='SignIn'>
            Sign In
          </button>

          <button className='SignIn-google'>
            <i><img src={googleIconIMG} alt="" /></i>
            <span>Sign in with Google</span>
          </button>

          <p className='Signup'>Don't have an account? <a href="#">Sign up for free!</a></p>

        </div>
      </main>
      <aside>
        

      </aside>
    </div>
  )
}