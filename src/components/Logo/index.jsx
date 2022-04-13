import * as Styled from "./styled";
import logo from "../assets/img/logo.png"
const Logo = () => {
  return (
    <Styled.Logo data-aos="fade-rigth">
      <img src={logo} alt="logo"/>
    </Styled.Logo>
  );
};
export default Logo;
