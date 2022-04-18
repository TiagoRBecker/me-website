import * as Styled from "./styled";
export default function Button({ text, onClick }) {
  return <Styled.Button onClick={onClick}>{text}</Styled.Button>;
}
