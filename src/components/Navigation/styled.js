import styled from "styled-components";

export const MenuDesktop = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  li {
    padding: 0 10px;
  }
  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
    transition: ease 0.9s all;
    &:hover {
      color: #999;
    }
  }
`;
export const Mobile = styled.nav`
  
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
 
  button {
    display: none;
    border: none;
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    top: 32px;
    right:32px ;
    background-color: transparent;
    @media screen and (max-width: 700px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .show {
    display:flex ;
    align-items:center ;
    justify-content:center ;
    flex-direction:column ;
    position: absolute;
    width: 100%;
    height:100% ;
    min-height:50vh ;
    background-color: #ccc;
    top: 100px;
    z-index: 30;
    left: 0;
    text-align: center;
    list-style: none;
    transition: ease-in-out 2s all;
    transform: translateY(-400vh);
    
   
  }
  .closed {
    position: absolute;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    justify-content:center ;
    width: 100%;
    height: 92vh;
    background-color: #ccc;
    z-index: 34;
    top: 100px;
    left: 0;
    list-style: none;
    text-align: center;
    transform: translateY(0);
    transition: ease 1s all;
    @media screen and (min-width: 700px) {
      display: none;
    }
    
  }
  li {
    padding: 12px 0;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #000;
    font-weight: bold;
    transition: ease-in-out 0.6s all;
    &:hover {
      color: #333;
     
    }
  }
`;
