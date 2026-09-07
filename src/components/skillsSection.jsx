
import Card from './card';


function SkillsSection() {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-header">
          <h1>My Skills</h1>
          <p> Here are some of the skills I have acquired over the years </p>
        </div>

        <div className="skills-cards">
          <Card title="Python" description="Proficient in Python programming and backend development." imageUrl="/python.svg" />
        
          <Card title="Java" description="Experienced in Java programming and object-oriented design." imageUrl="/java.svg" />
          <Card title="C++" description="Skilled in C++ programming and system-level development." imageUrl="/cpp.svg" />
          <Card title="Css" description="Proficient in CSS for styling web applications and creating responsive designs." imageUrl="/css.png" />
          <Card title="Html" description="Experienced in HTML for structuring web content and creating semantic markup." imageUrl="/html.png" />
         
        </div>

      </section>
    </>
  )
}

export default SkillsSection;