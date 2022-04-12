import styled from "styled-components";

export const MenuDesktop = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
    list-style: none;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  li {
    padding: 0 10px;
  }
  a {
    text-decoration: none;
    font-size: 1rem;
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
  height: 100%;
  align-items: center;
  justify-content: flex-end;

  button {
    display: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    @media screen and (max-width: 700px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .show {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    top: 100px;
    z-index: 30;
    left: 0;
    text-align: center;
    list-style: none;
    transition: ease 1s all;
    transform: translateY(0px);
    overflow: hidden;
    @media screen and (min-width: 700px) {
      display: none;
    }
  }
  .closed {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #333;
    z-index: 30;
    top: 100px;
    left: 0;
    list-style: none;
    text-align: center;
    transform: translateY(-130vh);
    transition: ease 1s all;
    overflow: hidden;
  }
  li {
    padding: 12px 0;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #000;
    font-weight: bold;
    transition: ease-in-out 0.9s all;
    &:hover {
      color: #333;
      border-bottom: 1px solid #000;
    }
  }
`;
