import '../styles/login-page.scss'

import IlustrationIMG from '../assets/login-page/Ilustration.svg' 

export function LoginPage() {
  return (
    <div id="auth">
      <main>
        <div className="main-content">
          <strong>WELCOME BACK</strong>
          <p>Welcome back! Please enter your detalis</p>
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
          </div>
        </div>
      </main>
      <aside>
        

      </aside>
    </div>
  )
}