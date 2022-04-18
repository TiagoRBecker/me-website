import * as Styled from "./styled";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Styled.MenuDesktop data-aos="fade-left">
      <ul>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/tecnologias">Tecnologias</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfólio</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </Styled.MenuDesktop>
  );
};
export default Menu;
