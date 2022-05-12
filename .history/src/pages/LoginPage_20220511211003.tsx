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
            <input type='text' name='Email' placeholder='Email' />
            <p>Password</p>
            <div>
              <input type="text" name='Password' placeholder='Password'
              checked />


            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" id='remember-me' name="remember-me" />
            <label htmlFor="Password">Remember me</label>

            <a href="#">Forgot password</a>
          </div>
          <button>
            Sign In
          </button>
          <div className="login-google">
            <button>
              <i><img src={googleIconIMG} alt="" /></i>
              Sign in with Google
            </button>
          </div>

          <p>Don't have an account? <a href="#">Sign up for free!</a></p>

        </div>
      </main>
      <aside>
        

      </aside>
    </div>
  )
}