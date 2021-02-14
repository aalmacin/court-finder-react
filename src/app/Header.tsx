import React from 'react';
import styled from '@emotion/styled';
import { colors } from './designTokens/colors';

const HeaderContainer = styled.div`
  background-color: ${colors.main};
  padding: 1rem;
  width: 100%;
`;

const HeaderDiv = styled.div`
  display: flex;
  color: ${colors.white};
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1600px) {
    max-width: 60rem;
    margin: 0 auto;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
`;

const Contact = styled.a`
  font-size: 1.6rem;
`;

export const Header = () => (
  <HeaderContainer>
    <HeaderDiv>
      <Logo>Logo</Logo>
      <Contact>Contact</Contact>
    </HeaderDiv>
  </HeaderContainer>
);
