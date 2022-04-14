import * as Styled from "./styled";
import me from "../../assets/img/me.jpg";
import {Link} from "react-router-dom"
import { Container } from "react-bootstrap";
export const Sobre = () => {
  return (
    <Styled.Contato>
      <h1>Sobre</h1>
      <Container>
        <Styled.Perfil>
          <Styled.Img>
            <img src={me} alt="eu" />
          </Styled.Img>
          <Styled.Descript>
            <h3>
              Olá Eu sou o Tiago Becker! Desenvolvedor front-end com 1 ano de
              experiência em freelancer, alguns dos meus projetos você pode
              encontar na área de portfólio ou clicando
               <Link to="/portfolio"> " Aqui! " </Link>.
            </h3>
          </Styled.Descript>
        </Styled.Perfil>
        <Styled.Cursos>
          <Styled.Title>
            <h1>Formação</h1>
          </Styled.Title>
          <Styled.Formacao>
            <div className="cursos">
              <div className="title">
                <h2>COD3BR</h2>
              </div>
              <div className="name">
                <p>Desenvolimento Web Moderno</p>
              </div>
              <div className="data">
                <p>2021</p>
              </div>
            </div>
          </Styled.Formacao>
          <Styled.Formacao>
            <div className="cursos">
              <div className="title">
                <h2>UDEMY</h2>
              </div>
              <div className="name">
                <p>Desenvolvedor de Software</p>
              </div>
              <div className="data">
                <p>2022</p>
              </div>
            </div>
          </Styled.Formacao>
          <Styled.Formacao>
            <div className="cursos">
              <div className="title">
                <h2>B7WEB</h2>
              </div>
              <div className="name">
                <p>Desenvolvedor FullStack</p>
              </div>
              <div className="data">
                <p>Em andamento</p>
              </div>
            </div>
          </Styled.Formacao>
          <Styled.Formacao>
            <div className="cursos">
              <div className="title">
                <h2>DANKI CODE</h2>
              </div>
              <div className="name">
                <p>Desenvolvedor Front end</p>
              </div>
              <div className="data">
                <p>2020</p>
              </div>
            </div>
          </Styled.Formacao>
        </Styled.Cursos>
      </Container>
    </Styled.Contato>
  );
};
