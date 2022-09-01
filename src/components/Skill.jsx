import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { skills } from "../data";
import './css/skill.css';
import SkillCard from "./SkillCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Skill() {
  return (
    <section className="skill-main" id="skills">
      <h2>Habilidades</h2>
      <div className="skill-container">
        <Carousel responsive={responsive}>
          {
            skills.map((skill) => (
              <SkillCard key={ skill.name } { ...skill } />
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}
