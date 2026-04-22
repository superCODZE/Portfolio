import { useState } from 'react'
import Header from './components/header'
import NavBar from './components/navBar';
import './App.css'
import { useEffect, useRef } from "react";

 function ScanlineOverlay({ speed = 60, intensity = 0.35, spacing = 4 }) {
  const canvasRef = useRef(null);
  const posY = useRef(0);
  const last = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (ts) => {
      if (last.current !== null) {
        const dt = (ts - last.current) / 1000;
        posY.current = (posY.current + speed * dt) % spacing;
      }
      last.current = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(0, 0, 0, ${intensity})`;

      let y = (posY.current % spacing) - spacing;
      while (y < canvas.height) {
        ctx.fillRect(0, Math.round(y), canvas.width, 1);
        y += spacing;
      }

      rafId.current = requestAnimationFrame(draw);
    };

    rafId.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
    };
  }, [speed, intensity, spacing]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}





function App() {
 
  return(
    <>
     <ScanlineOverlay speed={10} intensity={0.35} spacing={5} />
     
     <NavBar />
     <Header />
    
  
    </>
  ) 
 
  
}

export default App
