import * as Styled from "./styled";
import { Container } from "react-bootstrap";
import { Menu } from "../All";
import { Mobile } from "../Navigation/mobile";

const Header = () => {
  return (
    <>
      <Styled.Header>
        <Container>
          <Menu />
          <Mobile />
        </Container>
      </Styled.Header>
    
    </>
  );
};
export default Header;
