import * as Styled from "./styled";
import { Button } from "../All";
import { Link } from "react-router-dom";
import me from "../assets/img/me.jpg";
import { Container } from "react-bootstrap";
const About = () => {
  return (
    <Styled.BoxArea>
      <h1 data-aos="fade-right">Sobre</h1>
      <Container>
        <Styled.Perfil data-aos="fade-right">
          <Styled.Img>
            <img src={me} alt="eu" />
          </Styled.Img>
          <Styled.Button>
            <Link to="/about">
              <Button text="Saiba mais" />
            </Link>
          </Styled.Button>
        </Styled.Perfil>
       
      </Container>
    </Styled.BoxArea>
  );
};
export default About;
