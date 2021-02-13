import React from 'react';
import styled from '@emotion/styled';

const HeaderDiv = styled.div`
  display: flex;
  background-color: gray;
`;

export const Header = () => (
  <HeaderDiv>
    <div>Logo</div>
    <div>Contact</div>
  </HeaderDiv>
);
