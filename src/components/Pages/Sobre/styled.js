import styled from "styled-components"
export const Contato = styled.div`
width:100%;
height:100% ;
min-height:100vh;
background-color:#611037 ;
padding:50px 0 ;
display:flex ;
align-items:center ;
justify-content:center ;
flex-direction:column ;
h1{
    color:#9becc5;
    font-weight:bold ;
    font-size:2rem ;
    text-align:center ;
    text-transform:uppercase ;
}

`
export const Perfil = styled.div`
width:100%;
height:100%;
margin:6rem 0 ;
display:flex;
align-items:center;
justify-content:center;
@media screen and (max-width:760px){
    flex-direction:column ;
}`
export const Img = styled.div`
width:100%;
height:100%;
max-width:250px;
max-height:250px;
padding:1rem ;

img{
    width:100% ;
    height:100% ;
    border-radius:50% ;
}`

export const Descript = styled.div`
width:100%;
max-width:500px;
height:100% ;
color:#9becc5;
display:flex ;
align-items:center ;
justify-content:center ;
padding:1rem ;
h3{
    font-size:1.6rem ;
    a{
        text-decoration:none ;
        cursor:pointer ;
        color: #000;
    }
}
`
export const Cursos = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin:6rem 0;`
export const Title = styled.div``
export const Formacao = styled.div`
width:100% ;
height:100% ;
display:flex ;
align-items:center ;
justify-content:center;
.cursos{
    width:100% ;
    height:100% ;
    align-items:center;
    display:flex ;
    justify-content:space-between ;
    padding:2rem 0 ;
    @media screen and (max-width:760px){
        flex-direction:column ;
        padding:1rem ;
        
    }
    
    h2,p{
        
        color:#9becc5;
        margin:0 ;
        padding:0;
        }
        h2{
            font-size:1.5rem ;
        }
      
       
    .title,.name,.data{
        width:30% ;
        @media screen and (max-width:760px){
            width:100% ;
            padding:0.4rem  0;
            display:flex ;
            align-items:center ;
            justify-content:center ;
        }
    }
}
`