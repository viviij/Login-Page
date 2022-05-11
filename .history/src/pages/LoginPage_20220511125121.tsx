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
            <form>

            </form>

            <input type="form"  />
          </div>
        </div>
      </main>
      <aside>
        <img src={IlustrationIMG} alt="ilustração da pagina de login" />

      </aside>
    </div>
  )
}