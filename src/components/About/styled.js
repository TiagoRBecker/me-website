import styled from "styled-components";

export const BoxArea = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #000;
  height: 100%;
  min-height: 100vh;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  flex-direction:column ;
  transition:ease 0.9s all ;
 
  
  h1{
    text-align: center;
    color: #fff;
    font-size: 2rem;
    text-transform:uppercase ;
  }

`;

export const Perfil = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
border-radius:5px;
padding:2rem 0;`

export const Img = styled.div`
width:100%;
height:100% ;
min-height:10vh;
display:flex ;
align-items:center ;
justify-content:center ;
padding:4rem ;

img{
  width:25% ;
  height:25% ;
  border-radius:50% ;
  background-size:contain ;
  border:solid 2px #ccc ;
  background-position:center ;
  @media screen and (max-width:760px){
    width:100%;
    height:100% ;
  }
}
`;

export const Button = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;`