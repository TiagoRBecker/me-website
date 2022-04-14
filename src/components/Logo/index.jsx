import * as Styled from "./styled";
import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Styled.Logo data-aos="fade-rigth">
      <Link to="/" >
      <img src={logo} alt="logo"/>
      </Link>
    </Styled.Logo>
  );
};
export default Logo;
