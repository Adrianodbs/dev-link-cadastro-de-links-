import Social from '../../components/Social'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import './home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>Adriano Alves</h1>
      <span>Veja meus links</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Instagram</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Telegram</p>
          </a>
        </section>

        <footer>
          <Social url="https://facebook.com/sujeitoprogramador">
            <FaFacebook size={35} color="#fff" />
          </Social>
          <Social url="https://instagram.com/_adrianoalvess_">
            <FaInstagram size={35} color="#fff" />
          </Social>
          <Social url="https://instagram.com/_adrianoalvess_">
            <FaYoutube size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  )
}

export default Home
