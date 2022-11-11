import './networks.css'
import Header from '../../components/Header'
import Input from '../../components/Input'

import { MdAddLink } from 'react-icons/md'

function Networks() {
  return (
    <div className="admin-container">
      <Header />
      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form">
        <label className="label">Link do facebook</label>
        <Input placeholder="Digite a Url do facebook." />
        <label className="label">Link do instagram</label>
        <Input placeholder="Digite a Url do instagram." />
        <label className="label">Link do youtube</label>
        <Input placeholder="Digite a Url do youtube." />

        <button type="submit" className="btn-register">
          Salvar links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </div>
  )
}

export default Networks
