import { useEffect, useState } from "react";
import figlet from "figlet";
import standard from "figlet/importable-fonts/ANSI Shadow.js";
import AnimatedContent from '../scale.jsx';




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

          <AnimatedContent distance={40} direction="vertical" reverse={false} duration={0.8} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
                <div className="header-content">
                   <h1>HI, I am</h1>
                   <AsciiTitle  text={"MAZOUZ \nABDERRAHMANE"} />
                   <p>computer science student passionate about web and software development. I have gained solid programming skills and a good understanding of modern web technologies. I am also interested in computer networks and how they operate, which gives me a broader perspective on the field of computer science. I am motivated, curious, and always looking to improve my skills and learn new technologies.</p>
                </div>
          </AnimatedContent>
          
         
      
         <AnimatedContent distance={40} direction="vertical" reverse={false} duration={0.8} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
           <img src="/image.png" alt="logo" />
         </AnimatedContent>
     </header>
      
    </>
  );
}

export default Header;