import styled from "styled-components";

export const ProjectsArea = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #333;
  padding: 80px 0;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    text-transform:uppercase ;
  }
  @media screen and (max-width: 760px) {
    padding: 10px;
  }
`;
export const BoxProjects = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.6rem;
  @media screen and (max-width: 760px) {
    margin-top: 20px;
  }
`;

export const BoxProject = styled.div`
  width: 40%;
  height: 100%;
  max-height: 350px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: ease 1s all;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 100%;
  }
`;

export const BoxImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;
export const BoxTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #999;
  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 1.6rem;
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
