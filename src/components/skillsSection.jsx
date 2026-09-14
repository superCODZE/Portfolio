
import Card from './card';
import LanguagesPart from './languagesPart';


function SkillsSection() {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-header">
          <h1>My Skills</h1>
          <p> Here are some of the skills I have acquired over the years </p>
        </div>

        <div className="skills-info">
          <LanguagesPart Title="Programming Languages" />
          <LanguagesPart Title="Frameworks & Libraries" />
          <LanguagesPart Title="Databases" />
          <LanguagesPart Title="Tools & Platforms" />
          
        </div>

      </section>
    </>
  )
}

export default SkillsSection;