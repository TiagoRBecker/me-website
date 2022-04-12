import * as Styled from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const About = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://api.github.com/users/TiagoRBecker");
      setUser(res.data);
    };
    getUser();
  }, []);
  return (
    <Styled.BoxArea>
      <Container>
        <h1>About Me</h1>
        <Styled.BoxAbout>
          <>
            <Styled.Perfil>
              <h3>{user.name}</h3>
              <h4>{user.bio}</h4>
              <h4>{user.location}</h4>
            </Styled.Perfil>
            <Styled.PerfilImg></Styled.PerfilImg>
          </>
        </Styled.BoxAbout>
      </Container>
    </Styled.BoxArea>
  );
};
export default About;
