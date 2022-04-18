import styled from "styled-components";
import contato from "../assets/img/banner-contato.png";

export const AreaContato = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #ccc;
  background-image: url(${contato});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: center;
  position: relative;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
export const BoxForm = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #dfa70c;
    padding: 10px;
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .name,
  .email,
  .area,
  .btn {
    width: 80%;
    height: 100%;
    margin-bottom: 1.2rem;
    color: #000;
    font-size: 1.1rem;
  }
  .name input {
    width: 100%;
    height: 45px;
    padding-left: 5px;
    border: none;
    outline: none;
    border-radius: 4px;
  }
  .email input {
    width: 100%;
    padding-left: 5px;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 4px;
  }
  .area textarea {
    width: 100%;
    min-height: 20vh;
    padding-left: 5px;
    padding-top: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
  }
  .btn {
    padding: 0;
  }
  .btn input {
    width: 100%;
    height: 45px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ccc;
    background-color: #dfa70c;
    transition: ease 0.6s all;
    &:hover {
      background-color: #dfa74d;
      color: #000;
    }
  }
`;
export const Sociais = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Contato = styled.div`
  width: 100%;
  height: 100%;
  .email{
    cursor:pointer ;
  }
  .city,
  .email {
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #fff;
    border-bottom: 2px solid #fff;
    @media screen and (max-width: 760px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
  h1 {
    font-size: 1.6rem;
  }
  .sociais {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #fff;
    @media screen and (max-width: 760px) {
      align-items: center;
      justify-content: center;
    }
    h1 {
      color: #fff;
      font-size: 1.6rem;
    }
    .icons {
      svg {
        padding-right: 1rem;
        fill: #fff;
        font-size: 3rem;
        cursor:pointer ;
      }
    }
  }
`;
