import * as Styled from "./styled";
import { Button } from "../All";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {Projects} from "../mocks/AllMocks"

const Project = () => {
  return (
    <>
      <Styled.ProjectsArea >
        <h1 data-aos="fade-up-right">Projetos</h1>
        <Container data-aos="fade-up-right">
          <Styled.BoxProjects  >
            {Projects.map((project) => (
              <Styled.BoxProject key={project.id}>
                <Styled.BoxImg>
                  <img src={project.url} alt={project.slug} />
                </Styled.BoxImg>
                <Styled.BoxTitle>
                  <h1>{project.slug}</h1>
                </Styled.BoxTitle>
              </Styled.BoxProject>
            ))}
          </Styled.BoxProjects>
          <Styled.BoxBtn>
            <Link to="/Portfolio">
              <Button text="Saiba mais" />
            </Link>
          </Styled.BoxBtn>
        </Container>
      </Styled.ProjectsArea>
    </>
  );
};
export default Project;
