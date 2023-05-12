import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Example from "./Components/Example";
import "./Components/Example.css";
import {
  Button,
  ButtonStyle2,
  ButtonStyle3,
  ButtonStyle4,
} from "./Components/Buttons";
const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`;
const Button1 = styled.button`
  width: 100px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
`;
const Button2 = styled(Button1)`
  border: none;
  background-color: yellowgreen;
  font-size: 14px;
  font-weight: bold;
`;

const Button3 = styled(Button1)`
  color: white;
  background-color: black;
  font-size: 20px;
  border-radius: 15px;
`;

function App() {
  return (
    <>
      <Button>버튼1</Button>
      <ButtonStyle2>버튼2</ButtonStyle2>
      <Button3>버튼3</Button3>
    </>
  );
}

export default App;
