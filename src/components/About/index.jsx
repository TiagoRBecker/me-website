import * as Styled from "./styled";
import {Button} from "../All"
import me from "../assets/img/me.jpg"
import { Container } from "react-bootstrap";
const About = () => {

  return (
    <Styled.BoxArea>
      <h1>Sobre</h1>
      <Container>
       <Styled.Perfil>
         <Styled.Img>
             <img src={me} alt="eu" />
         </Styled.Img>
         <Styled.Button>
             <Button text="Saiba mais"/>
         </Styled.Button>
       </Styled.Perfil>
      </Container>
    </Styled.BoxArea>
  );
};
export default About;
