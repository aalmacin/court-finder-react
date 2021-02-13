import React from 'react';
import styled from '@emotion/styled';
import { colors } from './designTokens/colors';


const HeaderDiv = styled.div`
  display: flex;
  background-color: ${colors.main};
  color: ${colors.white};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 2rem;
`

const Contact = styled.a`
  font-size: 1.6rem;
`

export const Header = () => (
  <HeaderDiv>
    <Logo>Logo</Logo>
    <Contact>Contact</Contact>
  </HeaderDiv>
);
