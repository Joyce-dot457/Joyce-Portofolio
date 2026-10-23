import { useState } from "react";
import { FaWhatsapp,FaPhone,FaEnvelope,FaMapMarkedAlt,FaCommentDots} from "react-icons/fa";
import emailjs from "@emailjs/browser";
function Contact() {
  const [email,setEmail]=useState("")
  const [nom,setNom]=useState("")
  const [messagers,setMessagers]=useState("")
  const [statut,setStaut]=useState("")
  const envoyerMessage= async (e)=>{
    e.preventDefault();
    setStaut("Envoi")
    try {
     await emailjs.send(
      "service_a4kq5uy",
      "template_zdqokvx",
      { name: nom, email: email, message: messagers },
      {publicKey: "4vTj54kFq6uB0zqcq"}
     )
        setStaut('succes')
        setNom("")
        setEmail("")
        setMessagers("")
        console.log("Messagee envoye !")
    } catch (error) {
      console.error("Erreur :", error)
      setStaut("erreur")
    }
  }
    return(
        <div id="contact-container">
          <div id="all">
             <div id="contacter">
                <span id="icone-second"> <FaCommentDots size={22}/></span>
                 <div id="flex-first">
                   <p id="call">Contact</p>
                   <p id="how"> comment me contacter</p>
                  </div>
               </div>
               
                 <h5 id="discuter">Discutons de votre prochain projet</h5>
                 <div id="email">
                   <span id="icone-second"><FaEnvelope size={18}/></span>
                   <div id="flex">
                     <p id="tel">E-mail</p>
                     <p>Réponse sous 24h général</p>
                     <a href="mailto:" id="lien">joycetcheumeni08@gmail.com</a> 
                   </div>
                 </div>
                 <div id="numero">
                   <span id="icone-second"><FaPhone size={18}/></span>
                   <div id="flex">
                     <p id="tel">Téléphone</p>
                     <p>Du lundi au vendredi, 9h -18h</p>
                     <a href="tel:+237692074424" id="lien">Appelez maintenant</a>
                   </div>
                 </div>
                  <div id="whatsapp">
                   <span id="icone-second"><FaWhatsapp size={20}/></span>
                   <div id="flex">
                     <p id="tel">Whatsapp</p>
                     <p>Le plus rapide pour discuter d'un projet</p>
                     <a href="http://wa.me/+237692074424" id="lien">Écrivez-nous</a>
                   </div>
                  </div>
                 <div id="localisation">
                    <span id="icone-second"><FaMapMarkedAlt/></span>
                    <div id="flex">
                      <p id="tel">Localisation</p>
                     <p>Douala, Cameroun</p>
                   </div>
                 </div>
                  </div>
                 <form method="post" onSubmit={envoyerMessage}>
                    <h4>Laissez-moi votre avis</h4>
                    <label>
                     <p>Nom :</p>
                     <input type="text" name="" id="name" placeholder="Votre nom..." value={nom} onChange={(e) => setNom(e.target.value)}/>
                   </label>
                   <label>
                     <p>E-mail :</p>
                     <input type="email" name="" id="name" placeholder="Votre email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                   </label>
                    <label>
                     <p>Message</p>
                     <textarea name="" id=""placeholder="votre commentaire" value={messagers} onChange={(e) => setMessagers(e.target.value)}></textarea><br />
                    </label>
                    <button type="onSubmit" disabled={statut === "Envoi"}> {statut=== "Envoi" ? "Envoi...." :"Envoyer"}</button>
                   {statut === "succes" && <p id="message-succes"> Message envoyé !</p>} 
                    {statut === "erreur" && (
                     <p id="message-erreur"> Une erreur s'est produite,Réssayez</p>
                    )}
                 </form>
              <footer>
               <hr/>
              <p>@ 2026 Joyce Tcheumeni . Tous droits réservés</p>
             </footer>
       </div>
    )
} 
export default Contact