import { useEffect, useRef, useState, forwardRef } from "react";

/**
 * MatrixCube
 *
 * Props:
 *  color         "matrix"|"cyan"|"amber"|"purple"   (défaut: "matrix")
 *  speed         0.2 – 3                            (défaut: 1)
 *  trail         3 – 30                             (défaut: 12)
 *  shadowBlur    5 – 80                             (défaut: 35)
 *  shadowSurface 0.2 – 2.5                          (défaut: 0.75)
 *  charSize      8 – 36   taille des caractères     (défaut: 18)
 *  width         pixels                             (défaut: 560)
 *  height        pixels                             (défaut: 420)
 *  showControls  true|false                         (défaut: true)
 *
 * Usage:
 *  <MatrixCube charSize={24} color="cyan" />
 *  <MatrixCube charSize={32} shadowBlur={50} shadowSurface={1.2} />
 */

const CHARS = "日アウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|\\/*".split("");

const PALETTES = {
  matrix: { bright:"#00ff41", mid:"#00cc33", dim:"rgba(0,50,15,0.5)",  edge:"#00ff41", r:0,   g:255, b:65  },
  cyan:   { bright:"#00ffff", mid:"#00aacc", dim:"rgba(0,60,90,0.5)",  edge:"#00ffff", r:0,   g:255, b:255 },
  amber:  { bright:"#ffb300", mid:"#cc8800", dim:"rgba(70,35,0,0.5)",  edge:"#ffb300", r:255, g:179, b:0   },
  purple: { bright:"#cc44ff", mid:"#8822cc", dim:"rgba(50,0,80,0.5)",  edge:"#cc44ff", r:204, g:68,  b:255 },
};

const VERTS = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
const EDGES = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
const FACES = [[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[0,3,7,4],[1,2,6,5]];
const NORMALS_BASE = [[0,0,-1],[0,0,1],[0,-1,0],[0,1,0],[-1,0,0],[1,0,0]];
const MAX_TRAIL = 30;

function rot(v,rx,ry,rz){
  let [x,y,z]=v;
  let y1=y*Math.cos(rx)-z*Math.sin(rx),z1=y*Math.sin(rx)+z*Math.cos(rx);y=y1;z=z1;
  let x1=x*Math.cos(ry)+z*Math.sin(ry),z2=-x*Math.sin(ry)+z*Math.cos(ry);x=x1;z=z2;
  return [x*Math.cos(rz)-y*Math.sin(rz),x*Math.sin(rz)+y*Math.cos(rz),z];
}
function project(v,cx,cy){const fov=5,z=v[2]+fov,sc=92;return[cx+v[0]*sc*fov/z,cy+v[1]*sc*fov/z,z];}
function lightAlpha(n){const l=[0.5,-0.7,0.5],len=Math.sqrt(l.reduce((s,v)=>s+v*v,0));return Math.max(0.05,(n.reduce((s,v,i)=>s+v*l[i]/len,0)+1)/2);}

function drawFaceChars(ctx, pts, grid, pal, alpha, fontSize) {
  const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]);
  const minX=Math.min(...xs), maxX=Math.max(...xs);
  const minY=Math.min(...ys), maxY=Math.max(...ys);
  const fw=maxX-minX, fh=maxY-minY;
  if(fw<10||fh<10) return;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(pts[0][0],pts[0][1]);
  pts.slice(1).forEach(p=>ctx.lineTo(p[0],p[1]));
  ctx.closePath();
  ctx.clip();

  const GN=5, cw=fw/(GN+1), ch=fh/(GN+1);
  const fs = Math.max(9, Math.min(16, Math.floor(Math.min(cw,ch)*0.88)));

  ctx.font = `900 ${fs}px monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";

  for(let r=0; r<GN; r++) {
    for(let c=0; c<GN; c++) {
      const cx2 = minX + cw*(c+1);
      const cy2 = minY + ch*(r+1);
      const ch2 = grid[r*GN+c];
      const bright = Math.random() > 0.82;
      ctx.globalAlpha = alpha * (bright ? 1.0 : 0.5 + Math.random()*0.35);
      if(bright) {
        ctx.strokeStyle = pal.bright;
        ctx.lineWidth = 0.8;
        ctx.strokeText(ch2, cx2, cy2);
        ctx.fillStyle = pal.bright;
        ctx.shadowColor = pal.bright;
        ctx.shadowBlur = 5;
      } else {
        ctx.fillStyle = pal.mid;
        ctx.shadowBlur = 0;
      }
      ctx.fillText(ch2, cx2, cy2);
    }
  }
  ctx.shadowBlur=0; ctx.globalAlpha=1; ctx.restore();
}

function drawEdgeTrails(ctx, edgeHistory, trailLen, pal) {
  const tl=Math.min(trailLen,MAX_TRAIL);
  for(let ei=0;ei<12;ei++){
    const hist=edgeHistory[ei]; if(hist.length<2)continue;
    const len=Math.min(hist.length,tl);
    for(let j=1;j<len;j++){
      const seg=hist[hist.length-j]; if(!seg)continue;
      const t=1-j/len,alpha=t*t*0.85,lw=t*3.5;
      ctx.beginPath();ctx.moveTo(seg.ax,seg.ay);ctx.lineTo(seg.bx,seg.by);
      ctx.strokeStyle=`rgba(${pal.r},${pal.g},${pal.b},${alpha*0.35})`;ctx.lineWidth=lw*3;ctx.lineCap="round";ctx.stroke();
      ctx.beginPath();ctx.moveTo(seg.ax,seg.ay);ctx.lineTo(seg.bx,seg.by);
      ctx.strokeStyle=`rgba(${pal.r},${pal.g},${pal.b},${alpha})`;ctx.lineWidth=lw;ctx.lineCap="round";ctx.stroke();
    }
  }
}

function drawCubeShadow(ctx, pv, blurAmount, shadowSurface, pal) {
  const xs=pv.map(p=>p[0]),ys=pv.map(p=>p[1]);
  const cx=(Math.min(...xs)+Math.max(...xs))/2;
  const cy=(Math.min(...ys)+Math.max(...ys))/2;
  const rx=(Math.max(...xs)-Math.min(...xs))/2*shadowSurface;
  const ry=(Math.max(...ys)-Math.min(...ys))/2*shadowSurface;
  ctx.save();
  [[0.20,1.0,1.0],[0.13,1.4,1.8],[0.07,1.9,2.6]].forEach(([alpha,scale,blurScale])=>{
    ctx.beginPath();
    ctx.ellipse(cx,cy,Math.max(1,rx*scale),Math.max(1,ry*scale),0,0,Math.PI*2);
    ctx.shadowColor=`rgba(${pal.r},${pal.g},${pal.b},1)`;
    ctx.shadowBlur=blurAmount*blurScale;
    ctx.fillStyle=`rgba(${pal.r},${pal.g},${pal.b},${alpha})`;
    ctx.fill();
  });
  ctx.shadowBlur=0; ctx.restore();
}

export default forwardRef(function MatrixCube({
  width         = 400,
  height        = 400,
  color         = "cyan",
  speed         = 0.8,
  trail         = 15,
  shadowBlur    = 35,
  shadowSurface = 0.6,
  charSize      = 18,
  showControls  = false,
  style,
  className,
  ...rest
}, ref) {
  const canvasRef = useRef(null);
  // Forward ref integration
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') ref(canvasRef.current);
      else ref.current = canvasRef.current;
    }
  }, [ref]);
  const [palKey, setPalKey] = useState(color);
  const [spd,    setSpd]    = useState(speed);
  const [trl,    setTrl]    = useState(trail);
  const [blur,   setBlur]   = useState(shadowBlur);
  const [srf,    setSrf]    = useState(shadowSurface);
  const [fnt,    setFnt]    = useState(charSize);

  const stateRef = useRef({ palKey, spd, trl, blur, srf, fnt });
  useEffect(()=>{ stateRef.current.palKey=palKey; },[palKey]);
  useEffect(()=>{ stateRef.current.spd=spd;       },[spd]);
  useEffect(()=>{ stateRef.current.trl=trl;       },[trl]);
  useEffect(()=>{ stateRef.current.blur=blur;     },[blur]);
  useEffect(()=>{ stateRef.current.srf=srf;       },[srf]);
  useEffect(()=>{ stateRef.current.fnt=fnt;       },[fnt]);

  useEffect(()=>{ setPalKey(color);      },[color]);
  useEffect(()=>{ setSpd(speed);         },[speed]);
  useEffect(()=>{ setTrl(trail);         },[trail]);
  useEffect(()=>{ setBlur(shadowBlur);   },[shadowBlur]);
  useEffect(()=>{ setSrf(shadowSurface); },[shadowSurface]);
  useEffect(()=>{ setFnt(charSize);      },[charSize]);

  useEffect(()=>{
    const canvas=canvasRef.current; if(!canvas)return;
    const ctx=canvas.getContext("2d");
    const W=canvas.width, H=canvas.height;
    const faceGrids=FACES.map(()=>Array.from({length:25},()=>CHARS[Math.floor(Math.random()*CHARS.length)]));
    const edgeHistory=Array.from({length:12},()=>[]);
    let gridTick=0, animId;

    const loop=(ts)=>{
      const {palKey:pk,spd:sp,trl:tl,blur:bl,srf:sf,fnt:fs}=stateRef.current;
      const pal=PALETTES[pk]||PALETTES.matrix;
      ctx.clearRect(0,0,W,H);

      gridTick++;
      if(gridTick%3===0) faceGrids.forEach(g=>{
        for(let i=0;i<Math.floor(Math.random()*4)+1;i++)
          g[Math.floor(Math.random()*g.length)]=CHARS[Math.floor(Math.random()*CHARS.length)];
      });

      const t=ts*0.001*sp,rx=t*0.7,ry=t*1.1,rz=t*0.4;
      const cx=W/2, cy=H/2;
      const rv=VERTS.map(v=>rot(v,rx,ry,rz));
      const pv=rv.map(v=>project(v,cx,cy));
      const rn=NORMALS_BASE.map(n=>rot(n,rx,ry,rz));

      EDGES.forEach(([ai,bi],ei)=>{
        const [ax,ay]=pv[ai],[bx,by]=pv[bi];
        edgeHistory[ei].push({ax,ay,bx,by});
        if(edgeHistory[ei].length>MAX_TRAIL) edgeHistory[ei].shift();
      });

      drawCubeShadow(ctx,pv,bl,sf,pal);
      drawEdgeTrails(ctx,edgeHistory,tl,pal);

      FACES.map((f,i)=>({f,i,z:f.reduce((s,vi)=>s+pv[vi][2],0)/4,a:lightAlpha(rn[i])}))
        .sort((a,b)=>b.z-a.z)
        .forEach(({f,i,a})=>{
          const pts=f.map(vi=>pv[vi]);
          ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);pts.slice(1).forEach(p=>ctx.lineTo(p[0],p[1]));ctx.closePath();
          ctx.globalAlpha=a*0.65;ctx.fillStyle=pal.dim;ctx.fill();ctx.globalAlpha=1;
          drawFaceChars(ctx,pts,faceGrids[i],pal,a,fs);
        });

      EDGES.forEach(([ai,bi])=>{
        const [ax,ay]=pv[ai],[bx,by]=pv[bi];
        ctx.save();
        ctx.beginPath();ctx.moveTo(ax,ay);ctx.lineTo(bx,by);
        ctx.shadowColor=`rgba(${pal.r},${pal.g},${pal.b},1)`;ctx.shadowBlur=12;
        ctx.strokeStyle=pal.edge;ctx.lineWidth=1.5;ctx.lineCap="round";ctx.stroke();
        ctx.restore();
      });

      pv.forEach(([px,py])=>{
        ctx.save();
        ctx.beginPath();ctx.arc(px,py,2.5,0,Math.PI*2);
        ctx.shadowColor=`rgba(${pal.r},${pal.g},${pal.b},1)`;ctx.shadowBlur=10;
        ctx.fillStyle=pal.bright;ctx.fill();
        ctx.restore();
      });

      animId=requestAnimationFrame(loop);
    };
    animId=requestAnimationFrame(loop);
    return()=>cancelAnimationFrame(animId);
  },[]);

  const pal=PALETTES[palKey]||PALETTES.matrix;
  const c={color:pal.bright,fontFamily:"monospace",fontSize:12};

  return(
    <>
      <canvas ref={canvasRef} width={width} height={height} style={{display:"block", ...style}} className={className} {...rest} />
      {showControls&&(
        <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center",marginTop:14,justifyContent:"center"}}>

          <span style={c}>Vitesse</span>
          <input type="range" min="0.2" max="3" step="0.1" value={spd}
            style={{accentColor:pal.bright,width:70}} onChange={e=>setSpd(+e.target.value)}/>
          <span style={{...c,minWidth:28}}>{spd.toFixed(1)}×</span>

          <span style={c}>Traînée</span>
          <input type="range" min="3" max="30" step="1" value={trl}
            style={{accentColor:pal.bright,width:70}} onChange={e=>setTrl(+e.target.value)}/>
          <span style={{...c,minWidth:28}}>{trl}</span>

          <span style={c}>Shadow blur</span>
          <input type="range" min="5" max="80" step="1" value={blur}
            style={{accentColor:pal.bright,width:70}} onChange={e=>setBlur(+e.target.value)}/>
          <span style={{...c,minWidth:28}}>{blur}</span>

          <span style={c}>Shadow surface</span>
          <input type="range" min="0.2" max="2.5" step="0.05" value={srf}
            style={{accentColor:pal.bright,width:70}} onChange={e=>setSrf(+e.target.value)}/>
          <span style={{...c,minWidth:36}}>{srf.toFixed(2)}</span>

          <span style={c}>Taille char</span>
          <input type="range" min="8" max="36" step="1" value={fnt}
            style={{accentColor:pal.bright,width:70}} onChange={e=>setFnt(+e.target.value)}/>
          <span style={{...c,minWidth:28}}>{fnt}</span>

          <span style={c}>Couleur</span>
          <select value={palKey} onChange={e=>setPalKey(e.target.value)}
            style={{fontFamily:"monospace",fontSize:11,padding:"3px 6px",borderRadius:3}}>
            <option value="matrix">Matrix vert</option>
            <option value="cyan">Cyan</option>
            <option value="amber">Ambre</option>
            <option value="purple">Violet</option>
          </select>
        </div>
      )}
    </>
  );
});