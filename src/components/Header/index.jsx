import * as Styled from "./styled";
import { Menu, Mobile, Logo } from "../All";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Styled.Header>
        <Container>
        <Logo />
        <Mobile/>
        <Menu />
        </Container>
      </Styled.Header>
    </>
  );
};
export default Header;
