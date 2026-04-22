import { useEffect, useState } from "react";
import figlet from "figlet";
import standard from "figlet/importable-fonts/ANSI Shadow.js";

figlet.parseFont("ANSI Shadow", standard);

function AsciiTitle({ text }) {
  const [ascii, setAscii] = useState("");

  useEffect(() => {
    figlet.text(text, { font: "ANSI Shadow" }, (err, result) => {
      if (!err) setAscii(result);
    });
  }, [text]);

  return (
    <pre style={{
     
      fontFamily: "monospace",
      fontSize: "clamp(5px, 1vw, 13px)",
      lineHeight: 1.2,
      whiteSpace: "pre",
      overflow: "hidden",
      background: "linear-gradient(0deg, #00bba9, #00e18e)",
      
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textAlign: "center",
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
      <h1>HI, I am</h1>
      <AsciiTitle text={"MAZOUZ ABDERRAHMANE"} />
      <p>Computer Science specialist with a sharp focus on web development. I build fast, scalable, and modern web applications — from pixel-perfect frontends to solid backends. Clean code is not a habit, it's a standard.</p>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1> 
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1> 
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1> 
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      
     </header>
      
    </>
  );
}

export default Header;