
import FadeContent from '../fade.jsx';
import { scrollToId } from '../scroll.js';


function NavBar() {
    return(
        <>
            <nav>
                  <FadeContent blur={true} duration={750} easing="ease-out" initialOpacity={0}>
                    <h3 className="cursor-target">.My_Portfolio</h3>
                  </FadeContent>
                  
              

                 <FadeContent blur={true} duration={750} easing="ease-out" initialOpacity={0}>

                   <div className="container1">
                     <button type="button" className="cursor-target" onClick={scrollToId('about')}>About_me</button>
                     <button type="button" className="cursor-target" onClick={scrollToId('skills')}>Skills</button>
                     <button type="button" className="cursor-target" onClick={scrollToId('projects')}>Projects</button>
                     <button type="button" className="cursor-target" onClick={scrollToId('contact')}>Contact</button>
                  </div>

                 </FadeContent>
               
               
                
                
                
            </nav>
        </>
    )
}

export default NavBar;