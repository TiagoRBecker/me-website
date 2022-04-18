import styled from "styled-components";
export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  .fixed {
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    font-weight: bold;
    background-color: #dfa70c;
    transition: ease 0.6s all;
    position: fixed;
    bottom: 50px;
    right: 50px;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    &:hover {
      background-color: #dfa74d;
      color: #000;
    }
    @media screen and (max-width:760px){
        right:20px ;
        bottom:20px ;
        width:35px ;
        height:35px ;
    }
  }
`;
