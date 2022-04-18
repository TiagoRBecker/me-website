import * as Styled from "./styled";
import { AiOutlineGithub } from "react-icons/ai";
import { Button } from "../../All";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { Projects } from "../../mocks/AllMocks";
export const Projetos = () => {
  const [cat, setCat] = useState(Projects);
  const filterItem = (category) => {
    const listCate = Projects.filter((currEl) => {
      return currEl.category === category;
    });
    setCat(listCate);
    console.log(cat);
  };

  return (
    <Styled.Projects>
      <Container>
        <h1> Projetos</h1>

        <Styled.Categories>
          <Styled.Buttons>
            <Button onClick={() => setCat(Projects)} text="All" />
            <Button onClick={() => filterItem("app")} text="Apps" />
            <Button onClick={() => filterItem("games")} text="Games" />
            <Button onClick={() => filterItem("website")} text="Web-Site" />
            <Button onClick={() => filterItem("delivery")} text="Delivery" />
          </Styled.Buttons>
          <Styled.Box data-aos="fade-rigth">
            {cat.map((project) => (
              <Styled.BoxItem key={project.id}>
                <Styled.Img >
                  <img src={project.url} alt={project.slug} />
                </Styled.Img>
                <Styled.Btns>
                  <Styled.Git>
                  <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${project.gb}`}
                    >
                      <AiOutlineGithub size={30} fill={"#000"} />
                   </a>
                  </Styled.Git>
                  <Styled.Demo>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${project.vercel}`}
                    >
                      Live Demo
                    </a>
                  </Styled.Demo>
                </Styled.Btns>
              </Styled.BoxItem>
            ))}
          </Styled.Box>
        </Styled.Categories>
      </Container>
    </Styled.Projects>
  );
};
