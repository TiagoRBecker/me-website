import * as Styled from "./styled";
import { techs, Backend } from "../../mocks/AllMocks";
import { Container } from "react-bootstrap";
export const Tecnologias = () => {
  return (
    <Styled.BoxTecnologia>
      <h1>Principais Tecnologias  </h1>
      <Container>
        <Styled.Front>
          <Styled.Title>
            <h2>Frontend!</h2>
          </Styled.Title>
          <Styled.Flex>
            {techs.map((tech, index) => (
              <Styled.Techs key={index}>
                <Styled.Tech>
                  <img src={tech.url} alt={tech.Title} />
                </Styled.Tech>
              </Styled.Techs>
            ))}
          </Styled.Flex>
        </Styled.Front>
        <Styled.Backend>
          <Styled.Title>
            <h2>Backend!</h2>
          </Styled.Title>
          <Styled.Flex>
            {Backend.map((tech, index) => (
              <Styled.Techs>
                <Styled.Tech>
                  <img src={tech.url} alt={tech.Title} />
                </Styled.Tech>
              </Styled.Techs>
            ))}
          </Styled.Flex>
        </Styled.Backend>
      </Container>
    </Styled.BoxTecnologia>
  );
};
