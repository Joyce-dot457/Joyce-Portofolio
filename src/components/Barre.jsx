import useReveal from "../hooks/useReveal";
export function Barre({nom,icone,pourcentage}) {
    const[ref,estVisible]=useReveal();
    return(
      <div id="realisations" ref={ref}>
         <div className="presentation-barre">
              <p id="html"><span id="icone-language">{icone} </span> {nom}</p>
              <span id="pourcentage">{pourcentage}%</span>
          </div>        
          <div className="barre-piste"> 
                 <div id="barre" style={{width :estVisible ? pourcentage + "%" : "0%"}}></div>
             </div>
        </div>
    )
}
export function Carte({id,titre,children}) {
     const[ref,estVisible]=useReveal();
     return(
        <section id={id} ref={ref} className={estVisible ? "carte visible" : "carte"}>
         <h5 id="titre">{titre}</h5>
         {children}
        </section>
     )
}