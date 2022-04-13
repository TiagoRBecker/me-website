import styled from "styled-components";

export const BoxArea = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #333;
  height: 100%;
  min-height: 100vh;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  flex-direction:column ;
  h1{
    color:#fff;
    font-size:1.6rem ;
  }

`;

export const Perfil = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;`

export const Img = styled.div`
width:100% ;
height:100% ;
min-height:25vh ;
display:flex ;
align-items:center ;
justify-content:center ;
padding:4rem ;
img{
  width:50% ;
  height:50% ;
  border-radius:50% ;
  background-size:contain ;
  background-position:center ;
}
`;

export const Button = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;`