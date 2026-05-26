
import AnimatedContent from '../scale.jsx';
import FadeContent from '../fade.jsx';




function NavBar() {
    return(
        <>
            <nav>
                  <FadeContent blur={true} duration={550} easing="ease-out" initialOpacity={0}>
                    <h3 className="cursor-target">.My_Portfolio</h3>
                  </FadeContent>
                  
              

                 <FadeContent blur={true} duration={550} easing="ease-out" initialOpacity={0}>

                   <div className="container1">
                     <a className="cursor-target" href="">About_me</a>
                     <a className="cursor-target" href=""> Skills</a>
                     <a className="cursor-target" href=""> Projects</a>
                     <a className="cursor-target" href="">Contact </a> 
                  </div>

                 </FadeContent>
               
               
                
                
                
            </nav>
        </>
    )
}

export default NavBar;