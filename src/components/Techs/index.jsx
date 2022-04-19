import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "../All";
import { Skills } from "../mocks/AllMocks";
import * as Styled from "./styled";
const Techs = () => {
  return (
    <Styled.BoxArea>
      <Container data-aos="fade-left">
        <h1>Tecnologias</h1>
       
        <Styled.BoxSkills>
        {Skills.map((skill) => (
          <Styled.Skills key={skill.id}>
            
            <Styled.Left>{skill.icon}</Styled.Left>
           
          </Styled.Skills>
          
        ))}
        </Styled.BoxSkills>
        
        <Styled.BoxBtn>
          <Link to = "/tecnologias">
          <Button text="Saiba mais" />
          </Link>
        </Styled.BoxBtn>
      </Container>
    </Styled.BoxArea>
  );
};
export default Techs;
