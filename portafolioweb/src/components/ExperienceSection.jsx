import experience from '../data/experience';

function ExperienceSection() {
  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {experience.map((exp, idx) => (
          <li key={idx}>
            <strong>{exp.role}</strong> - {exp.company} <br />
            <span>{exp.period}</span>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExperienceSection;