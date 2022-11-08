import './error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h1>Página não encontrada</h1>
      <p>Essa página não existe</p>

      <Link to="/" className="link">
        Voltar para a Home
      </Link>
    </div>
  )
}

export default Error
