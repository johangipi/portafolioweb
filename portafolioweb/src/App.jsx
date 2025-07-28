import { useState, useEffect } from 'react'
import './App.css'
import PersonalInfoSection from './components/PersonalInfoSection'
import StudiesSection from './components/StudiesSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'

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

      {activeSection === 'info' && <PersonalInfoSection />}
      {activeSection === 'studies' && <StudiesSection />}
      {activeSection === 'experience' && <ExperienceSection />}
      {activeSection === 'skills' && <SkillsSection animate={animateSkills} />}
      {activeSection === 'projects' && <ProjectsSection />}
    </div>
  )
}

export default App