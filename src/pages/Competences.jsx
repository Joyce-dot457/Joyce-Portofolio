import {Barre,Carte} from "../components/Barre"
import { FaReact,FaCss3Alt,FaHtml5,FaNodeJs,FaGitAlt } from "react-icons/fa";
import { SiTailwindcss,SiPostgresql,SiExpress,SiPostman,SiFigma,SiSqlite,SiClaudecode } from "react-icons/si";

function Competences() {
    return(
        <div id="competence-container">
        <Carte id="front-end" titre="Extremités et langages">
          <Barre icone={<FaHtml5 size={20}/>} nom="Html"pourcentage={100}/>
          <Barre icone={<FaCss3Alt size={20}/>} nom="Css"pourcentage={90}/>
           <Barre icone={<SiTailwindcss size={20}/>} nom="Tailwind"pourcentage={70}/>
           <Barre icone={<FaReact size={20}/>} nom="React"pourcentage={70}/>
        </Carte>
         <Carte id="backend" titre="Backend et Base de données">
          <Barre icone={<FaNodeJs size={20}/>} nom="Node JS"pourcentage={30}/>
          <Barre icone={<SiExpress size={20}/>} nom="Express"pourcentage={30}/>
          <Barre icone={<SiSqlite size={20}/>} nom="SQL"pourcentage={50}/>
          <Barre icone={<SiPostgresql size={20}/>} nom="Postgre SQL"pourcentage={90}/>
        </Carte>
        <Carte id="outils" titre="Outils et Versionnage">
          <Barre icone={<SiPostman size={20}/>} nom="Postman"pourcentage={70}/>
          <Barre icone={<SiFigma size={20}/>} nom="Figma"pourcentage={80}/>
          <Barre icone={<SiClaudecode size={20}/>} nom="Claude code"pourcentage={50}/>
          <Barre icone={<FaGitAlt size={20}/>} nom="Git"pourcentage={90}/>
        </Carte>

        
  </div>
    )
}
export default Competences