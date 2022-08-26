export default function SkillCard(props) {
  const { name, picture } = props;
  return (  
    <div className="skill-card" data-testid="skill-card">
      <h3 className="skill-name">{name}</h3>
      <img className="skill-img" src={ picture } alt={ `${name}-img` } />
    </div>
  )
}
