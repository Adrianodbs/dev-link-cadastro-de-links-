import './login.css'
import { Logo } from '../../components/Logo'

function Login() {
  return (
    <div className="login-container">
      <Logo />
      <form className="form">
        <input type="email" placeholder="Digite o seu email." />
        <input type="password" placeholder="*******" autoComplete="on" />
        <button type="submit">Acessar</button>
      </form>
    </div>
  )
}

export default Login
