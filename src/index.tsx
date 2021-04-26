import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";
import Game from "./components/Game";
import reportWebVitals from "./reportWebVitals";

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-flow: column;
`;

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <Game />

    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
