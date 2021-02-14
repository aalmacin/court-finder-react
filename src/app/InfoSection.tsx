import React from 'react';
import styled from '@emotion/styled';
import { colors } from './designTokens/colors';
import { Accordion } from './components/Accordion';

const HR = styled.div`
  border-top: 0.1rem solid ${colors.main};
`;
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
  padding: 1rem;
`;

export const InfoSection = () => (
  <>
    <HR />
    <InfoSectionDiv>
      <Section>
        <Accordion header="Payment Options" defaultExpanded>
          Dummy Payment Options
        </Accordion>
      </Section>
      <Section>Section Right</Section>
    </InfoSectionDiv>
  </>
);
