
import SkillCard from './skillCard';


function SkillsSection() {
  return (
    <>
    
      <section  className="skills-section">
        <div className="skills-header">
          
          <h1>My Skills</h1>
          <p> Here are some of the skills I have acquired over the years </p>
        </div>

        <div className="skills-info">
          <SkillCard Title="Frameworks & Libraries" urls={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", "https://cdn.simpleicons.org/django/32CD32", "https://flet.dev/img/logo.svg"]} />
          <SkillCard Title="Programming Languages" urls={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"]} />
          <SkillCard Title="Tools & Platforms" urls={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", "https://cdn.simpleicons.org/cisco", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"]} />
          <SkillCard Title="Databases" urls={["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"]} />
          
        </div>

      </section>
    </>
  )
}

export default SkillsSection;