import { useEffect, useState } from "react";
import figlet from "figlet";
import * as THREE from 'three';
import standard from "figlet/importable-fonts/ANSI Shadow.js";



function Cube(){

}









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
      marginTop: "50px",
      fontFamily: "monospace",
      fontSize: "clamp(5px, 1vw, 13px)",
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
        <div className="contain1">
         <h1>HI, I am</h1>
          <AsciiTitle  text={"MAZOUZ \nABDERRAHMANE"} />
         
           <p>computer science student passionate about web and software development. I have gained solid programming skills and a good understanding of modern web technologies. I am also interested in computer networks and how they operate, which gives me a broader perspective on the field of computer science. I am motivated, curious, and always looking to improve my skills and learn new technologies.</p>
         
        </div>

        
        
     </header>
      
    </>
  );
}

export default Header;