import{Banner,About,Techs,Project,Contact} from "../../All"
import {AiOutlineArrowUp} from "react-icons/ai"
import * as Styled from "./styled"
import { useState,useEffect } from "react"
export const Home = ()=>{
    
        const [visible, setIsVisible] = useState(false);
        const Visibility = ()=>{
            if(window.pageYOffset >= 300){
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }
        }
        const scroolToTop = ()=>{
            window.scrollTo({
                top:0 ,
                behavior:"smooth"
            })
        }
        useEffect(()=>{
            window.addEventListener('scroll', Visibility)
            
            return ()=>{
                window.removeEventListener('scroll', Visibility)
            }
        })
  
  
    return(
        <Styled.ContainerHome>
        <Banner/>
        <About/>
        <Techs/>
        <Project/>
        <Contact/>
        {visible ? 
         <button className="fixed" onClick={scroolToTop}><AiOutlineArrowUp size={40} fill={"#ddd"}/></button>
         :
         ""
    
    
      }
        
        </Styled.ContainerHome>


    )
}