import styled from "styled-components";

export const BoxTechs = styled.div`
width:100% ;
height:100% ;
min-height:100vh ;
background-color:#333 ;
padding:25px ;
`
export const Techs = styled.div`
width:100% ;
height:100% ;
display:flex ;
align-items:flex-start ;
justify-content:center ;
flex-direction:column ;
gap:5rem;

`
export const Tech = styled.div`
display:flex;
align-items:center ;
justify-content:center ;
border-bottom:2px solid #999;
width:100% ;
height:100% ;
padding:2rem ;
@media screen and (max-width:760px){
    flex-direction:column ;
    text-align:center ;
    padding:1px ;
  
  
}

`
export const Left = styled.div`
width:170px;
height:170px;
img{
    width:100% ;
    height:100% ;
}`

export const Rigth  = styled.div`
flex:1;
width:100%;
height:100% ;
padding:0 15px ;
color:white ;
@media screen and (max-width:760px){
    padding:0 ;
    li{
       
        width:100%;
        font-size:0.9rem;
        margin:0 ;
    }
}
`