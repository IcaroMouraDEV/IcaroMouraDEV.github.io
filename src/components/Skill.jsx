import { skills } from "../data";
import './css/skill.css';
import SkillCard from "./SkillCard";

export default function Skill() {
  return (
    <section className="skill-main" id="skills">
      <h2>Habilidades</h2>
      <div className="skill-container">
        {
          skills.map((skill) => (
            <SkillCard key={ skill.name } { ...skill } />
          ))
        }
      </div>
    </section>
  )
}
