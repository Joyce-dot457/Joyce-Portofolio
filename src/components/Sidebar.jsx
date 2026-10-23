import { useState } from "react"
import { FaTimes,FaBars } from "react-icons/fa";
function Sidebar() {
    const[sidebarOuvert,setSidebarOuvert]=useState(false)
   const handleClick = () => {
   setSidebarOuvert((prev) => !prev);
  };
    return(
        <>
        <div id="flex1">
          <div id="accueil">
             <h3 id="welcome">Welcome .</h3>
             <button id="bars" onClick={handleClick}>{sidebarOuvert? <FaTimes size={20} />: <FaBars size={20}/> }</button>
            </div>
            <nav className={sidebarOuvert ? "sidebar ouverte" : "sidebar"}>
               <a href="#accueil-container" onClick={handleClick}>Accueil</a>
               <a href="#propos" onClick={handleClick}>Propos</a>
               <a href="#competences" onClick={handleClick}>Compétences</a>
               <a href="#projets" onClick={handleClick}>Projets</a>
               <a href="#contact" onClick={handleClick}>Contact</a>
            </nav>
       </div>
      </>
    )
}
export default Sidebar