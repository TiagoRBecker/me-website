import styled from "styled-components";
export const Projects = styled.div`
width:100% ;
height:100% ;
min-height:100vh ;
background-color:#333 ;
transition:ease 1s all ;
padding:3rem 0;
h1{
    color:#fff;
    font-weight:bold ;
    font-size:2rem ;
    text-align:center ;
    text-transform:uppercase ;
}
`

export const Categories = styled.div`

width:100%;
height:100%;
`
export const Buttons = styled.div`
width:100% ;
height:100% ;
align-items:center ;
justify-content:center ;
display:flex ;
align-items:center;
justify-content:center;

flex-wrap:wrap ;
button{
  margin:0.6rem ;
   
    cursor:pointer ;

}
`
export const Box = styled.div`
display:flex;
transition: ease all 1s;
align-items:center;
justify-content:center;
width:100%;
height:100%;
flex-wrap:wrap ;
@media screen and (max-width:760px){
    flex-direction:column ;
}`
export const BoxItem = styled.div`
width:50%;
height:100%;
padding:0.4rem ;

@media screen and (max-width:760px){
    width:100% ;
}
`
export const Img = styled.div`
width:100% ;
height:100% ;
img{
    width:100% ;
    height:100% ;
    background-color:#fff ;
    
}
`
export const Btns = styled.div`
display:flex ;
transition: ease 1s all;
background-color:#fff;
width:100%;
height:45px;`
export const Git = styled.div`
width:50%;
height:100% ;
display:flex;
border-right:4px solid #999 ;
align-items:center ;
justify-content:center ;
cursor:pointer ;
transition:all ease 0.9s ;
&:hover{
  background-color:#ccc; ;
}
a{
    color:#000;
    font-weight:bold ;
    text-decoration:none;
    width:100% ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
}

`
export const Demo = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center ;
justify-content:center ;
cursor:pointer ;
transition:all ease 0.9s ;
&:hover{
  background-color:#ccc; ;
}
a{
    color:#000;
    font-weight:bold ;
    text-decoration:none;
}
`