import styled from "styled-components";
import Banner from "../assets/img/banner.jpg";
export const ContainerBanner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  @media screen and (max-width: 760px) {
    background-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  div {
    z-index: 12;
    line-height: 4rem;
    @media screen and (max-width: 750px) {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      h2,
      h1,
      p {
        font-size: 1.6rem;
      }
    }
  }
  h2 {
    text-align: center;
    font-size: 1.8rem;
    color: #eeee;
    text-transform: uppercase;
  }
  h1 {
    font-size: 2.4rem;
    color: #dfa70c;
    text-transform: uppercase;
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    color: #eeee;
    text-transform: uppercase;
  }
`;
