import figlet from "figlet";
import standard from "figlet/importable-fonts/ANSI Shadow.js";
import AnimatedContent from '../scale.jsx';
import MatrixCube from "./cube.jsx";
import { scrollToId } from '../scroll.js';


figlet.parseFont("ANSI Shadow", standard);

function AsciiTitle({ text }) {
  const ascii = figlet.textSync(text, { font: "ANSI Shadow" });

  return (
    <>
      <pre className="ascii-title">
        {ascii}
      </pre>
      <h2 className="header-name">MAZOUZ ABDERRAHMANE</h2>
    </>
  );
}

function Header() {
  return (
    <>
     <header id="about">
          <div className="header-upper">
               <AnimatedContent distance={40} direction="vertical" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
                <div className="header-content">
                   <h1>HI, I am</h1>
                   <AsciiTitle  text={"MAZOUZ \nABDERRAHMANE"} />
                   <p>computer science student passionate about web and software development. I have gained solid programming skills and a good understanding of modern web technologies. I am also interested in computer networks and how they operate, which gives me a broader perspective on the field of computer science. I am motivated, curious, and always looking to improve my skills and learn new technologies.</p>
                   <div className="header-buttons">
                      <a href="My_cv.pdf" download>
                          <button className="cursor-target" >Download CV</button>
                      </a>
                    
                     <button className="cursor-target" onClick={scrollToId('contact')}>collaborate</button>
                   </div>
                  
                </div>
                
               </AnimatedContent>
          
         
      
             <AnimatedContent distance={40} direction="vertical" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
               <div className="header-cube">
                 <MatrixCube />
               </div>
             </AnimatedContent>
          </div>
      



          <div className="header-social">
            <AnimatedContent distance={40} direction="vertical" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
              
              <div className="header-social-icons">
                <h5>Follow me :</h5>

                <div className="header-social-links">
                  <a></a>
                  <a href="https://www.reddit.com/user/Pedroo-mas/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noreferrer">
                    <img className="cursor-target" src="reddit.svg" alt="reddit" />
                  </a>
                  <a href="mailto:mazathomazigh@gmail.com" >
                    <img className="cursor-target" src="gmail.svg" alt="gmail" />
                  </a>
                  <a href="https://www.linkedin.com/in/mazouz-abderrahmane-062807370">
                    <img className="cursor-target" src="linkedin.svg" alt="linkedin" />
                  </a>
                  <a href="https://github.com/superCODZE" >
                    <img className="cursor-target" src="github.svg" alt="github" />
                  </a>
                  <a href="https://discord.com/users/878014620697243701" target="_blank" rel="noreferrer">
                    <img className="cursor-target" src="discord.svg" alt="discord" />
                  </a>
                  

                </div>

              </div>
              
            </AnimatedContent>

            
          </div>




          <AnimatedContent distance={40} direction="vertical" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0} startImmediately>
          <div className="header-lower">
            <div className="scroll-track">
              <div className="scroll-infinite">
              <h4>coding</h4>
              <h4>Networking</h4>
              <h4>developing</h4>
              <h4>learning</h4>
              <h4>frontend</h4>
              <h4>backend</h4>
              <h4>collaboration</h4>
              <h4>Projects</h4>
              </div>
              <div aria-hidden className="scroll-infinite">
              <h4>coding</h4>
              <h4>Networking</h4>
              <h4>developing</h4>
              <h4>learning</h4>
              <h4>frontend</h4>
              <h4>backend</h4>
              <h4>collaboration</h4>
              <h4>Projects</h4>
              </div>

              <div aria-hidden className="scroll-infinite">
              <h4>coding</h4>
              <h4>Networking</h4>
              <h4>developing</h4>
              <h4>learning</h4>
              <h4>frontend</h4>
              <h4>backend</h4>
              <h4>collaboration</h4>
              <h4>Projects</h4>
              </div>
            </div>
          </div>
          </AnimatedContent>

       

     </header>
      
    
    </>
  );
}

export default Header;