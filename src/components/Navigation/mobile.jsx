import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as Styled from "./styled";
export const Mobile = () => {
  const [isActive, setIsActive] = useState(false);
  const hamburguer = <AiOutlineMenu size={34} fill={"#fff"} />;
  const closed = <AiOutlineClose size={34} fill={"#fff"} />;
  const changeButton = () => {
    setIsActive(!isActive);
  };
  const closedMenu = ()=>{
    setIsActive(false)
  }
  return (
    <Styled.Mobile>
      <ul
        className={isActive ? "show" : "closed"}
        onClick={closedMenu}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tecnologias">Tecnologias</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <button onClick={changeButton}>{isActive ? closed : hamburguer}</button>
    </Styled.Mobile>
  );
};
