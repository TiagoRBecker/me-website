import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import error from "../../assets/img/404.jpg";
import { Container } from "react-bootstrap";
import {Button} from "../../All"
export const Notfound = () => {
    const home = useNavigate();
    const backToHome = () => {
        window.scrollTo({
            top:0 ,
            behavior:'smooth'
        })
        home('/')

        
        }
  return (
    <Styled.PageArea>
      <Container>
        <Styled.Notfound>
          <img src={error} alt="error-404" />
        </Styled.Notfound>
        <Styled.Btn>
        
            <Button onClick={backToHome} text="Voltar para página inicial!!"/>
          
        </Styled.Btn>
      </Container>
    </Styled.PageArea>
  );
};
