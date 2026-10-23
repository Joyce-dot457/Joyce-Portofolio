import profil from "../assets/profil.jpeg"
import Cart from "../components/Cart"
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";


function Accueil() {
 
    return (
        <div id="page-container">
          <div id="texte">
           <h4 id="hello">Hello je suis Joyce Tcheumeni,</h4>
           <p id="developpeuse">Dévéloppeuse Front-End</p>
           <p>Je concois et developpe des interfaces web modernes,responsives et accessibles aux besoins des utlisateurs</p>
        
           <button id="appeler"><a href="tel:+237692074424">Me contacter</a></button>
           <div id="accessibilite">
             <a href="https://www.linkedin.com/in/joyce-tcheumeni" id="link"><FaLinkedin size={24} /></a>
             <a href="https://github.com/Joyce-dot457" id="link">  <FaGithub size={24} /></a>
             <a href="https://wa.me/237692074424" id="link">  <FaWhatsapp size={24} /></a>
           </div>
           </div>
          <div>
          <div id="image-profil" >
            <div id="cadre">
            <img src={profil} alt="" id="photo-profil"/>
            </div>
          </div>
          <Cart/>
          </div>
        </div>
    )
}
export default Accueil