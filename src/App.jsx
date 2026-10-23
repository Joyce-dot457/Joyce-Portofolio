import "./App.css";
import Accueil from "./pages/Accueil";
import Propos from "./pages/Propos";
import Projets from "./pages/Projets";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App(){
    useEffect(()=>{
    const field= document.getElementById("particules")
    for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className='particules';
        p.style.left=Math.random()*100+'vw';
        p.style.top=Math.random()*100+'vh';
        p.style.animationDelay=(Math.random()*5)+'s';
        p.style.animationDuration=(4+Math.random()*4)+'s';
        field.appendChild(p)
    }
    return ()=>{field.innerHTML = ''}
    }, []);
    return(
        <div id="container">
            <Sidebar/>
            <div id="particules"></div>
            <section id="accueil-container"><Accueil /></section>
           <section id="propos"><Propos/></section> 
           <section id="competences"><Competences/></section> 
           <section id="projets"> <Projets/></section>
            <section id="contact"><Contact/></section>
        </div>
    )
}
export default App
