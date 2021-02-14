import React from 'react';
import styled from '@emotion/styled';
import { colors } from './designTokens/colors';
import { Accordion } from './components/Accordion';

const InfoSectionDiv = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 1.8rem;
  max-width: 120rem;
  align-self: center;
  flex-basis: 80%;
  width: 100%;
  border: 0.1rem solid ${colors.main};
`;

const Section = styled.div`
  padding: 1rem;
  width: 50%;
`;

const LeftSection = styled(Section)`
  border-right: 0.1rem solid ${colors.main};
`;

const MarginedAccordion = styled(Accordion)`
  margin-bottom: 2.5rem;
`;

export const InfoSection = () => (
  <InfoSectionDiv>
    <LeftSection>
      <MarginedAccordion header="Payment Options" defaultExpanded>
        Dummy Payment Options
      </MarginedAccordion>

      <MarginedAccordion header="Service and contact" defaultExpanded>
        Dummy Service and contact
      </MarginedAccordion>

      <MarginedAccordion header="French Language" defaultExpanded>
        Dummy French Language
      </MarginedAccordion>

      <MarginedAccordion header="Accessibility" defaultExpanded>
        Dummy Accessibility
      </MarginedAccordion>
    </LeftSection>
    <Section>
      <MarginedAccordion header="Practice Directions">
        Dummy Practice Directions
      </MarginedAccordion>

      <MarginedAccordion header="Submit Documents online via ???">
        Dummy Submit Documents online via
      </MarginedAccordion>
    </Section>
  </InfoSectionDiv>
);
