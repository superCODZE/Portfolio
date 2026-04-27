import { useEffect, useState } from "react";





function NavBar() {
    return(
        <>
            <nav>
               
                <h3 className="cursor-target">.My_Portfolio</h3>

                <div className="container1">
                    <a className="cursor-target" href="">About_me</a>
                    <a className="cursor-target" href=""> Skills</a>
                    <a className="cursor-target" href=""> Projects</a>
                    <a className="cursor-target" href="">Contact </a>
                   
                   
                   
                </div>
                
            </nav>
        </>
    )
}

export default NavBar;