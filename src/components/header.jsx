import { useEffect, useState } from "react";

import figlet from "figlet";
import standard from "figlet/importable-fonts/ANSI Shadow.js";
import AnimatedContent from '../scale.jsx';
import MatrixCube from "./cube.jsx";




figlet.parseFont("ANSI Shadow", standard);

function AsciiTitle({ text }) {
  const [ascii, setAscii] = useState("");

  useEffect(() => {
    figlet.text(text, { font: "ANSI Shadow" }, (err, result) => {
      if (!err) setAscii(result);
    });
  }, [text]);

  return (
    <pre  style={{
      marginTop: "35px",
      fontFamily: "monospace",
      fontSize: "clamp(5px, 1vw, 10px)",
      lineHeight: 1.2,
      whiteSpace: "pre",
      overflow: "hidden",
      background: "linear-gradient(0deg, #00bba9, #00e18e)",
      marginbottom: 0,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      
      filter: 'drop-shadow(0px 0px 3px rgb(0, 255, 136)) drop-shadow(0px 0px 20px rgba(86, 0, 166, 0.7))',
    }}>
      {ascii}
    </pre>
  );
}

function Header() {
  return (
    <>
     <header>
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
                    
                     <button className="cursor-target">Work together ?</button>
                   </div>
                  
                </div>
                
               </AnimatedContent>
          
         
      
             <AnimatedContent distance={40} direction="vertical" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
               <MatrixCube/>
             </AnimatedContent>
          </div>
      



          <div className="header-social">
            <AnimatedContent distance={40} direction="vertical" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
              
              <div className="header-social-icons">
                <h5>Follow me :</h5>
                <div className="header-social-links">
                  <a href="mailto:mazathomazigh@gmail.com" >
                    <img className="cursor-target" src="gmail.svg" alt="gmail" />
                  </a>
                  <a href="https://www.linkedin.com/in/mazouz-abderrahmane-062807370">
                    <img className="cursor-target" src="linkedin.svg" alt="linkedin" />
                  </a>
                  <a href="https://github.com/superCODZE" >
                    <img className="cursor-target" src="github.svg" alt="github" />
                  </a>
                  

                </div>

              </div>
              
            </AnimatedContent>

            
          </div>




         <AnimatedContent distance={40} direction="vertical" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
          <div className="header-lower">
            
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
        </AnimatedContent>

       

     </header>
      
    
    </>
  );
}

export default Header;