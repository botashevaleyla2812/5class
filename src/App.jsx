import './App.css'

function App() {
  return (
    <div className="page">
      <main className="resume">
        <header className="header">
          <div className="avatar">Л</div>

          <div className="header-info">
            <h1>Лейла</h1>
            <h2>Начинающий веб-разработчик</h2>
            <p>Студентка · Бишкек, Кыргызстан</p>
          </div>
        </header>

        <section className="section">
          <h2>Обо мне</h2>
          <p>
            Я студентка, изучаю информационные технологии
            и веб-разработку. Интересуюсь созданием сайтов,
            дизайном интерфейсов и программированием.
            Хочу получать новые знания и развивать свои навыки.
          </p>
        </section>

        <section className="section">
          <h2>Мои навыки</h2>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>GitHub</span>
          </div>
        </section>

        <section className="section">
          <h2>Образование</h2>
          <div className="item">
            <h3>Кыргызско-Германский институт прикладной информатики</h3>
            <p>Информационные технологии</p>
            <p>Студентка</p>
          </div>
        </section>

        <section className="section">
          <h2>Мои проекты</h2>

          <div className="item">
            <h3>Резюме на React</h3>
            <p>Персональный сайт-резюме, созданный с помощью React и CSS.</p>
          </div>

          <div className="item">
            <h3>Учебные проекты на Python</h3>
            <p>Небольшие программы для практики программирования.</p>
          </div>
        </section>

        <section className="section">
          <h2>Контакты</h2>
          <p>Email: укажи свою электронную почту</p>
          <p>GitHub: добавь ссылку на свой профиль</p>
        </section>

        <footer>
          <p>© 2026 Лейла · Резюме</p>
        </footer>
      </main>
    </div>
  )
}

export default App