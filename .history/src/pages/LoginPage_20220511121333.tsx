import IlustrationIMG from '../assets/login-page/Ilustration.svg' 

export function LoginPage() {
  return (
    <div className="auth">
      <aside>
        <img src={IlustrationIMG} alt="ilustração da pagina de login" />

      </aside>
      <main>
        <div className="main-content">
          <strong>WELCOME BACK</strong>
          <p>Welcome back! Please enter your detalis</p>
          <div className="form">
            <p>Email</p>
            <form>

            </form>

            <input type="form" value={"Password"} />
          </div>
        </div>
      </main>
    </div>
  )
}