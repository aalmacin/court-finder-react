import React from 'react';
import styled from '@emotion/styled';
import { colors } from './designTokens/colors';


const HR = styled.div`
  border-top: .1rem solid ${colors.main};
`
const InfoSectionDiv = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 1.8rem;
  max-width: 120rem;
  align-self: center;
  width: 80%;
`;

const Section = styled.div`
  width: 50%;
`

export const InfoSection = () => (
  <>
  <HR />
  <InfoSectionDiv>
    <Section>Section Left</Section>
    <Section>Section Right</Section>
  </InfoSectionDiv>
  </>
);
