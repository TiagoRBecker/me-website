import { Container } from "react-bootstrap";
import { Button } from "../All";
import { Skills } from "../mocks/AllMocks";
import * as Styled from "./styled";
const Techs = () => {
  return (
    <Styled.BoxArea>
      <Container data-aos="fade-up-left">
        <h1>Tecnologias</h1>
        {Skills.map((skill) => (
          <Styled.Skills key={skill.id}>
            <Styled.Left>{skill.icon}</Styled.Left>
            <Styled.Rigth>
              {skill.skills}
              <Styled.Bars>
                <div className="progress" style={{ width: `${skill.porc}` }}>
                  <span>{skill.porc}</span>
                </div>
              </Styled.Bars>
            </Styled.Rigth>
          </Styled.Skills>
        ))}
        <Styled.BoxBtn>
          <Button text="Saiba mais" />
        </Styled.BoxBtn>
      </Container>
    </Styled.BoxArea>
  );
};
export default Techs;
