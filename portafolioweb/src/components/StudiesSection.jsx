import studies from '../data/studies';

function StudiesSection() {
  return (
    <section>
      <h2>Estudios</h2>
      <ul>
        {studies.map((study, idx) => (
          <li key={idx}>
            <strong>{study.degree}</strong> - {study.institution} <br />
            <span>{study.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StudiesSection;