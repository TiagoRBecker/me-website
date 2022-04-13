import * as Styled from "./styled";
import { Menu, Mobile, Logo } from "../All";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Styled.Header>
        <Container>
          <Logo data-aos="fade-right" />
          <Mobile />
          <Menu  />
        </Container>
      </Styled.Header>
    </>
  );
};
export default Header;
