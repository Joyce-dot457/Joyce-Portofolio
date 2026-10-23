import { useState ,useEffect,useRef} from "react"

function useReveal(options= { threshold :0.3}) {
    const ref=useRef(null)
    const[estVisible,setEstVisible]=useState(false)

    useEffect(()=>{
        const observer= new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setEstVisible(true)
                    observer.unobserve(entry.target)
                }
            })
        },options);
        if (ref.current) observer.observe(ref.current);
        return ()=> observer.disconnect();
    },[])
    return [ref,estVisible]
}
export default useReveal