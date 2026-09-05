
import Card from './card';


function SkillsSection() {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-header">
          <h2>My Skills</h2>
          <p>Here are some of the skills I have acquired over the years</p>
        </div>

        <div className="skills-cards">
          <Card title="Python" description="Proficient in Python programming and backend development." imageUrl="public/python-pixel-transparent.png" />
          <Card title="Java" content="Experienced in Java programming and object-oriented design." imageUrl="public/java-pixel.png" />
          
        </div>

      </section>
    </>
  )
}

export default SkillsSection;