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
            <Button onClick={() => filterItem("delivery")} text="E-commerce" />
          </Styled.Buttons>
          <Styled.Box>
            {cat.map((project) => (
              <Styled.BoxItem key={project.id}>
                <Styled.Img data-aos="fade-rigth">
                  <img src={project.url} alt={project.slug} />
                </Styled.Img>
                <Styled.Btns>
                  <Styled.Git>
                    <button
                      onClick={() =>
                        (window.location = `${project.link}`)
                      }
                    >
                      <AiOutlineGithub size={30} fill={"#000"} />
                    </button>
                  </Styled.Git>
                  <Styled.Demo>
                    <h1>Live Demo</h1>
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
