import personalInfo from '../data/personalInfo';

function PersonalInfoSection() {
  return (
    <section>

        <h3>{personalInfo.presentation}</h3>
      <p>{personalInfo.celular}</p>
      <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      {/* Agrega aquí otros datos personales si los tienes */}
    </section>
  );
}

export default PersonalInfoSection;