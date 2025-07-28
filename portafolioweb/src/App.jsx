import { useState, useEffect } from 'react'
import './App.css'

const SECTIONS = [
  { key: 'info', label: 'Información Personal' },
  { key: 'studies', label: 'Estudios' },
  { key: 'experience', label: 'Experiencia' },
  { key: 'skills', label: 'Skills' },
  { key: 'projects', label: 'Proyectos' }
]

function App() {
  const [activeSection, setActiveSection] = useState('info')
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    if (activeSection === 'skills') {
      setAnimateSkills(false)
      // Espera un pequeño tiempo para reiniciar la animación
      setTimeout(() => setAnimateSkills(true), 100)
    } else {
      setAnimateSkills(false)
    }
  }, [activeSection])

  return (
    <div className="container">
      <header>
        <h1>Johan David Giraldo Pinilla</h1>
        <p>Desarrollador Web | Madrid(Cundinamarca), Colombia</p>
      </header>

      <nav className="toggle-bar">
        {SECTIONS.map(section => (
          <button
            key={section.key}
            className={activeSection === section.key ? 'active' : ''}
            onClick={() => setActiveSection(section.key)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {activeSection === 'info' && (
        <section>
          <h2>Información Personal</h2>
          <p>
            Soy desarrollador web apasionado por crear soluciones digitales. Me especializo en React y tecnologías modernas de frontend.
          </p>
          <a
            href="/CV-JohanGiraldo.pdf"
            download
            className="download-btn"
          >
            Descargar CV
          </a>
        </section>
      )}

      {activeSection === 'studies' && (
        <section>
          <h2>Estudios</h2>
          <ul>
            <li>Tecnologia Analisis y Desarrollo De Software - SENA (2023-2025)</li>
          </ul>
        </section>
      )}

      {activeSection === 'experience' && (
        <section>
          <h2>Experiencia</h2>
          <ul>
            <li>Prácticas en Empresa Y (2023)</li>
          </ul>
        </section>
      )}

      {activeSection === 'skills' && (
        <section>
          <h2>Skills</h2>
          <div>
            <div className="skill-label">React</div>
            <div className="skill-bar-container">
              <div className={`skill-bar${animateSkills ? ' fill' : ''}`} data-width="90%">90%</div>
            </div>
            <div className="skill-label">JavaScript</div>
            <div className="skill-bar-container">
              <div className={`skill-bar${animateSkills ? ' fill' : ''}`} data-width="85%">85%</div>
            </div>
            <div className="skill-label">Java</div>
            <div className="skill-bar-container">
              <div className={`skill-bar${animateSkills ? ' fill' : ''}`} data-width="70%">70%</div>
            </div>
            <div className="skill-label">HTML & CSS</div>
            <div className="skill-bar-container">
              <div className={`skill-bar${animateSkills ? ' fill' : ''}`} data-width="95%">95%</div>
            </div>
            <div className="skill-label">Git</div>
            <div className="skill-bar-container">
              <div className={`skill-bar${animateSkills ? ' fill' : ''}`} data-width="80%">80%</div>
            </div>
            <div className="skill-label">Vite</div>
            <div className="skill-bar-container">
              <div className={`skill-bar${animateSkills ? ' fill' : ''}`} data-width="75%">75%</div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section>
          <h2>Proyectos</h2>
          <div className="project-card">
            <strong>Portafolio Web</strong> - <a href="https://github.com/tuusuario/portafolio_web" target="_blank">Ver en GitHub</a>
          </div>
          <div className="project-card">
            <strong>App de Tareas</strong> - <a href="https://github.com/tuusuario/app-tareas" target="_blank">Ver en GitHub</a>
          </div>
        </section>
      )}
    </div>
  )
}

export default App