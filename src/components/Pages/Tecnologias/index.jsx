import * as Styled from "./styled";
import { techs } from "../../mocks/AllMocks";
import { Container } from "react-bootstrap";
export const Tecnologias = () => {
  return (
    <Styled.BoxTechs>
      <Container>
        <Styled.Techs>
          {techs.map((tech) => (
            <Styled.Tech>
              <Styled.Left>
                <img src={tech.url} alt={tech.Title} />
              </Styled.Left>
              <Styled.Rigth>
                <h2>{tech.Title}</h2>
                <h3>{tech.descrip}</h3>
              <li>{tech.skills}</li>
              </Styled.Rigth>
            </Styled.Tech>
          ))}
        </Styled.Techs>
      </Container>
    </Styled.BoxTechs>
  );
};
