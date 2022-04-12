import { Container } from "react-bootstrap";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import * as Styled from "./styled";

const Contact = () => {
  return (
    <Styled.AreaContato>
      <Container data-aos="fade-up-left">
        <Styled.Box>
          <Styled.BoxForm>
            <h1>Contate nos!</h1>
            <Styled.Form>
              <div className="name">
                <input type="text" placeholder="Nome.." />
              </div>
              <div className="email">
                <input type="text" placeholder="E-mail.." />
              </div>
              <div className="area">
                <textarea placeholder="Digite sua mensagem"></textarea>
              </div>
              <div className="btn">
                <input type="submit" value="Enviar" />
              </div>
            </Styled.Form>
          </Styled.BoxForm>
          <Styled.Sociais>
            <Styled.Contato>
              <div className="city">
                <h1>Localização</h1>
                <p>Cidade: Caxias Do Sul / RS</p>
                <p>Rua: Antares / Bairro: Cruzeiro</p>
                <p>Pais: Brasil</p>
              </div>

              <div className="email">
                <h1>E-mail</h1>
                <p>tiagoBecker@gmail.com</p>
              </div>

              <div className="sociais">
                <h1>Contatos</h1>
                <div className="icons">
                  <AiFillLinkedin />

                  <AiOutlineWhatsApp />

                  <AiOutlineGithub />
                </div>
              </div>
            </Styled.Contato>
          </Styled.Sociais>
        </Styled.Box>
      </Container>
    </Styled.AreaContato>
  );
};
export default Contact;
