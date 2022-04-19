import { Container } from "react-bootstrap";
import toast from "react-hot-toast"
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiTwotoneMail,
} from "react-icons/ai";
import { useState } from "react";
import * as Styled from "./styled";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleChange = () => {
    
   if(name && email && msg){
      toast.success("Mensagem enviada com sucesso!")
      return 
    }
   if(!name || !email || !msg){
    toast.error('Preencha os campos obrigatoriamente para enviar sua mensagem.')
    return;
   }
  }
    
  return (
    <Styled.AreaContato>
      <Container data-aos="fade-left">
        <Styled.Box>
          <Styled.BoxForm>
            <h1>Contate nos!</h1>
            <Styled.Form
              action="https://api.staticforms.xyz/submit"
              method="POST"
              onSubmit={handleChange}
            >
              <input
                type="hidden"
                name="accessKey"
                value="5506b314-f843-47d0-86b9-474aa075dbcc"
              />
              <input
                type="hidden"
                name="redirectTo"
                value="https://tiagobecker.vercel.app"
              />
              <div className="name">
                <input
                  type="text"
                  placeholder="Nome.."
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  
                />
              </div>
              <div className="email">
                <input
                  type="text"
                  placeholder="E-mail.."
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              
                />
              </div>
              <div className="area">
                <textarea
                  placeholder="Digite sua mensagem"
                  name="message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                
                ></textarea>
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
                <p
                  onClick={() =>
                    (window.location = "mailto:beckertiago09@gmail.com")
                  }
                >
                  <AiTwotoneMail size={50} />
                </p>
              </div>

              <div className="sociais">
                <h1>Contatos</h1>
                <div className="icons">
                  <AiFillLinkedin
                    onClick={() =>
                      (window.location = "https://br.linkedin.com/")
                    }
                  />

                  <AiOutlineWhatsApp
                    onClick={() =>
                      (window.location =
                        "https://api.whatsapp.com/send?phone=5551997338612")
                    }
                  />

                  <AiOutlineGithub
                    onClick={() =>
                      (window.location = "https://github.com/TiagoRBecker")
                    }
                  />
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
