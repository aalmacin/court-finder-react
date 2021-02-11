import React from "react";
import styled from "@emotion/styled";
import { Header } from "./app/Header";
import { Global, css } from "@emotion/react";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <AppDiv>
        <Header />
        Welcome to Court Finder
      </AppDiv>
    </>
  );
};
