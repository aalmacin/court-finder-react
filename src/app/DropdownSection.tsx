import React from 'react';
import styled from '@emotion/styled';
import { Dropdown } from './dropdownSection/Dropdown';


const DropdownSectionDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 2rem;
max-width: 120rem;
  align-self: center;
  width: 80%;
  min-width: 60rem;
`;

export const DropdownSection = () => (
  <DropdownSectionDiv>
    <Dropdown />
    <Dropdown />
    <Dropdown />
  </DropdownSectionDiv>
);
