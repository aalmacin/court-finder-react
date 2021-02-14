import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { Header } from './app/Header';
import { DropdownSection } from './app/DropdownSection';
import { InfoSection } from './app/InfoSection';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const globalStyles = css`
  @font-face {
    font-family: Benne;
    src: url('fonts/Benne-Regular.ttf');
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  html {
    font-size: 10px;
    @media only screen and (max-width: 600px) {
      font-size: 8px;
    }
  }
  body {
    font-family: Benne;
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
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const App: React.FC = () => (
  <>
    <Global styles={globalStyles} />
    <AppDiv>
      <Header />
      <DropdownSection />
      <InfoSection />
    </AppDiv>
  </>
  );
