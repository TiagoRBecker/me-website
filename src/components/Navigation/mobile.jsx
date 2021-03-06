import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as Styled from "./styled";
const Mobile = () => {
  const [isActive, setIsActive] = useState(false);
  const hamburguer = <AiOutlineMenu size={34} fill={"#fff"} />;
  const closed = <AiOutlineClose size={34} fill={"#fff"} />;
  const changeButton = () => {
    setIsActive(!isActive);
  };
  const closedMenu = () => {
    setIsActive(false);
  };
  return (
    <Styled.Mobile>
      <ul className={isActive ? "closed" : "show"} onClick={closedMenu}>
        <li>
          <Link to="/">Home</Link>
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
      <button onClick={changeButton}>{isActive ? closed : hamburguer}</button>
    </Styled.Mobile>
  );
};
export default Mobile;
