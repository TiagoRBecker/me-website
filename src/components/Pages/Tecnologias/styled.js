import styled from "styled-components";

export const BoxTecnologia = styled.div`
width:100% ;
height:100%;
min-height:80vh; ;
align-items:center ;
justify-content:center ;
background-color:#333;
h1{
  width:100% ;
  padding-top:2rem ;
  text-align:center ;
  color:#fff ;
}
`
export const Front = styled.div`
width:100% ;
height:100% ;
padding:4rem 0;

 ;

`
export const Backend = styled.div`
width:100% ;
height:100% ;
padding:4rem 0 ;

`
export const Title = styled.div`
width:100% ;
text-align:center ;
h2{
  color: #fff;
  font-size:1.5rem ;
  font-weight:bold ;
}

`
export const Flex = styled.div`
width:100% ;
height:100% ;
display:flex ;
justify-content:center ;
padding:2rem ;

@media screen and (max-width:760px){
  flex-wrap:wrap ;
  gap:1rem;
  justify-content:center ;
  }
`
export const Techs = styled.div`
width:20%;
height:100% ;
display:flex ;
justify-content:center ;
`
export const Tech = styled.div`
width:100% ;
height:100% ;
display:flex ;
max-width:100px ;
max-height:180px ;
img{
  width:100% ;
  height:100% ;
}
`