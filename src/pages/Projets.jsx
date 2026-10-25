import useReveal from "../hooks/useReveal";
import meteoImg from "../assets/meteo.jpeg"
import filtreImg from "../assets/filtre.png"
import todolistImg from "../assets/todolist.png"
import shopImg from "../assets/shop.png"
import dashboardImg from "../assets/dashboard.jpeg"
import { FaCheckCircle,FaGithub,FaChevronCircleRight} from "react-icons/fa";
const projets=[
        {
            titre:"Weather App",
            description:"Une application qui affiche la description climatique d'une ville recherchée",
            image: meteoImg,
            statut:"Terminé",
            points:["Recherche de ville avec l'API de géocodage Open-Meteo","Hook personnalisé useFetch pour gérer chargement ,erreurs et données","Interface adaptée a tous les ecrans"],
            techs:["React","API Open-Meteo","CSS"],
            github:"http://github.com/Joyce-dot457/meteo-app",
            projet:"https://meteo-app-eight-tawny.vercel.app/"
        },
        {
            titre:"Annuaire avec filtres",
            description:"Annuaire de citoyens qu'on peut filtrer par ville ,profession et age",
            image: filtreImg,
            statut:"Terminé",
            points:["Filtres multiples combinés,optomisés avec useMemo","Sélection multiple avec react-select badges des filtres actifs","Sidebar retractable"],
            techs:["React","react-select","CSS"],
            github:"http://github.com/Joyce-dot457/filtre-app",
            projet:"https://application-de-filtre.vercel.app/"
        },
        {
            titre:"TO DO LIST",
            description:"Gestionnaire de taches simples et fluides",
            image: todolistImg,
            statut:"Terminé",
            points:["Ajout,suppression et validation des taches, avec animation"," Sauvegarde dans le localstorage","Compteur de taches"],
            techs:["React","CSS"],
            github:"http://github.com/Joyce-dot457/to-do-list app",
            projet:"https://to-do-list-app-lemon-mu.vercel.app/"
        },
        {
            titre:"Dashboard de gestion de projet",
            description:"Tableau de bord avec connexion et inscription",
            image:  dashboardImg,
            statut:"En cours",
            points:["Authentification ,sidebar,cartes de statistiques et graphiques, avec animation","Design mobile first"," Backend en cours "],
            techs:["React","Tailwind Css","Recharts","Node js","PostgreSQL"],
        },
        {
            titre:"SHOP APP",
            description:"Boutique de fruits avec panier d'achat dynamique",
            image:  shopImg,
            statut:"Terminé",
            points:["Ajout ,retrait et quantité des produits,avec gestion des ruptures de stock","État global avec Zustand,animations","Recherche et filtre de disponibilité,panier mobile en «bottom sheet»"],
            techs:["React","Tailwind-css","Zustand"],
            github:"http://github.com/Joyce-dot457/Boutique-agro-alimentaires",
            projet:"https://boutique-de-produits.vercel.app/"
        }
    ]
function ProjetCarte({p,index}) {
    const[ref,estVisible]=useReveal()
    const cote= index %2 ===0 ? "droite": "gauche";
    return(
       <article ref={ref} className={`projet-carte ${cote} ${estVisible ? "visible" :" "}`}>
        <div id="projet-image">
            <img src={p.image} alt={p.titre} />
            <span id="badge">
              <FaCheckCircle size={12}/>{p.statut}
            </span>
        </div>
        <div id="projet-contenu">
         <h4>{p.titre}</h4>
         <p id="projet-description">{p.description}</p>
         <ul id="projet-points">
            {p.points.map((pt)=>(
                <li key={pt}><FaChevronCircleRight size={12}/>{pt}</li>
            ))}
         </ul>
         <div id="projet-techs">
            {p.techs.map((t)=>(
                <span key={t}>{t}</span>
            ))}
         </div>
         <div id="projet-liens">
         <a href={p.github} target="_blank" rel="noopener" id="projet-lien">
            <FaGithub size={10}/> Code source
         </a>
         <a href={p.projet}target="_blank" rel="noopener" id="projet-lien"> Voir le projet</a>
         </div>
        </div>
       </article>
    )
}
function Projets() {
   return(
        <div id="projet-container">
           <h3>Réalisations</h3>
           <p>une sélection de mes projets recents</p>
           <div>
            <div id="projet-liste">
            {projets.map((p,index)=>(
            <ProjetCarte p={p} key={p.titre} index={index}/>
            ))}
           </div>
           </div>
        </div>
    )
}
export default Projets