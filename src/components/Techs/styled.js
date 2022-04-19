import styled from "styled-components";
export const BoxArea = styled.div`
  width: 100%;
  background-color: #333;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content:space-around ;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    text-transform:uppercase ;
  }
`;
export const BoxSkills = styled.div`
display:flex;
align-items:center;
justify-content:center;
@media screen and (max-width:760px){
  flex-wrap:wrap ;
}`
export const Skills = styled.div`
  width: 30%;
  height:100% ;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  color: #fff;
  &:nth-child(2) :first-child svg {
    fill: #264ed4;
  }
  &:nth-child(3) :first-child svg {
    fill: #f0db4f;
  }
  &:nth-child(4) :first-child svg {
    fill: #00d8ff;
  }
  &:nth-child(5) :first-child svg {
    fill: #c885b0;
  }
  &:nth-child(6) :first-child svg {
    fill: #5eead4;
  }
  &:nth-child(7) :first-child svg {
    fill: #42b883;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:2rem 0 ;
 

  svg {
    font-size: 120px;
    fill: #e34c26;
    filter:grayscale(1) ;
    transition:ease all 1s ;
    &:hover{
      filter:grayscale(0) ;

    }
    
  }
`;

export const BoxBtn = styled.div`
  width: 100%;
  margin-top: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
