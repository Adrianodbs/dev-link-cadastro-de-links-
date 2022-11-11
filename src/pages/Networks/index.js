import './networks.css'
import Header from '../../components/Header'
import Input from '../../components/Input'

import { MdAddLink } from 'react-icons/md'
import { useState } from 'react'

import { db } from '../../services/firebaseconnection'
import { setDoc, doc, getDoc } from 'firebase/firestore'

function Networks() {
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [youtube, setYoutube] = useState('')

  function handleSave(e) {
    e.preventDefault()

    setDoc(doc(db, 'social', 'link'), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
      .then(() => {})
      .catch(() => {})
  }

  return (
    <div className="admin-container">
      <Header />
      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do facebook</label>
        <Input
          placeholder="Digite a Url do facebook."
          value={facebook}
          onChange={e => setFacebook(e.target.value)}
        />
        <label className="label">Link do instagram</label>
        <Input
          placeholder="Digite a Url do instagram."
          value={instagram}
          onChange={e => setInstagram(e.target.value)}
        />
        <label className="label">Link do youtube</label>
        <Input
          placeholder="Digite a Url do youtube."
          value={youtube}
          onChange={e => setYoutube(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Salvar links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </div>
  )
}

export default Networks
