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
      </main>
    </div>
  )
}

export default Home
