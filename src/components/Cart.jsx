import { useState ,useEffect} from "react"

function Cart() {
    const [texteAffiché,setTexteAffiché]=useState("")
    const phrases=["Joyce est une développeuse passionnée par le web",
        "Elle est particulierement á l'aise pour transformer une idée en projet concret et réel",
        "Sérieuse et determinée, elle aime les defis et challenges",
        "Future développeuse fullstack",
        "ouverte aux stages et aux collaborations"]
    const [indexPhrase,setIndexPhrase]=useState(0)
    const[effacePhrase,setEffacePhrase]=useState(false)
    useEffect(() => {
        const phraseActuelle=phrases[indexPhrase]
    if (!effacePhrase && texteAffiché.length< phraseActuelle.length) {
      const affiche = setTimeout(() => {setTexteAffiché(phraseActuelle.slice(0,texteAffiché.length +1))}, 100);
      return () => clearTimeout(affiche);
    }
    if (!effacePhrase && texteAffiché.length === phraseActuelle.length) {
        const affiche =setTimeout(() =>{setEffacePhrase(true)}, 1000);
      return () => clearTimeout(affiche);
    }
    if (effacePhrase && texteAffiché.length > 0) {
        const affiche =setTimeout(() =>{setTexteAffiché(texteAffiché.slice(0, -1))}, 50);
      return () => clearTimeout(affiche);
    }
    if (effacePhrase && texteAffiché.length === 0) {
       setIndexPhrase((prev)=> (prev+1) % phrases.length);
       setEffacePhrase(false)
    }
  }, [texteAffiché,indexPhrase,effacePhrase,phrases]);
    return(
        <div id="cart-container">
          <div id="carte">
            <span id="point1"></span>
            <span id="point2"></span>
            <span id="point3"></span>
            <span id="nom-terminal">Joyce@PORTOFOLIO</span>
          </div>
           <div>
             <p id="affiche">{texteAffiché}</p>
            </div>
        </div>
    )
}
export default Cart