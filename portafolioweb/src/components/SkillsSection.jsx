import { useEffect, useState } from "react";
import skills from "../data/skills";

function SkillsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section>
      <h2>Habilidades</h2>
      {skills.map((skill, idx) => (
        <div className="skill-bar-container" key={idx}>
          <div className="skill-label">{skill.name}</div>
          <div
            className="skill-bar"
            style={{
              width: animate ? skill.level : "0",
              transition: "width 1.2s cubic-bezier(.4,2,.6,1)",
            }}
          >
            {skill.level}
          </div>
        </div>
      ))}
    </section>
  );
}

export default SkillsSection;