import styled from "styled-components";
export const BoxArea = styled.div`
  width: 100%;
  background-color: #333;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    text-transform:uppercase ;
  }
`;
export const TechsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
export const BoxTech = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  padding: 20px 0;
  cursor: pointer;
  filter: grayscale(1);
  transition: ease 0.6s all;
  &:hover {
    filter: grayscale(0);
  }
  @media screen and (max-width: 700px) {
    width: 20%;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;

export const Skills = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  color: #fff;
  &:nth-child(3) :first-child svg {
    fill: #264ed4;
  }
  &:nth-child(4) :first-child svg {
    fill: #f0db4f;
  }
  &:nth-child(5) :first-child svg {
    fill: #00d8ff;
  }
  &:nth-child(6) :first-child svg {
    fill: #c885b0;
  }
  &:nth-child(7) :first-child svg {
    fill: #5eead4;
  }
  &:nth-child(8) :first-child svg {
    fill: #42b883;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 3rem;
    fill: #e34c26;
  }
`;
export const Rigth = styled.div`
  width: 50vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 1rem;
  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;

export const Bars = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 19px;
  border: 1px solid grey;
  overflow: hidden;
  background-color: #e6e1dc;
  padding: 1.5px;

  .progress {
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 0%;

    height: 100%;
    overflow: hidden;
    opacity: 1;
    background: #cc2b5e;
    background: -webkit-linear-gradient(to right, #753a88, #cc2b5e);
    background: linear-gradient(to right, #753a88, #cc2b5e);
    span {
      line-height: 20px;
      font-size: 0.8rem;
      font-weight: bold;
      margin-right: 0.3rem;
      color: #fff;
      transition: width 0.5s;
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
