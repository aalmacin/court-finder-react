import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../designTokens/colors';

const Header = styled.button`
  padding: 1rem;
  border: 0.1rem solid ${colors.main};
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  font-size: 2rem;
`;

const HeaderIcon = styled.div``;

const Content = styled.div`
  font-size: 1.8rem;
  padding: 1rem;
  border: 0.1rem solid ${colors.main};
`;

type AccordionProps = {
  defaultExpanded: boolean;
  header: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  defaultExpanded,
  header,
  children
}) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };
  return (
    <>
      <Header onClick={toggleExpanded}>
        <HeaderText>{header}</HeaderText>
        <HeaderIcon>{isExpanded ? '-' : '+'}</HeaderIcon>
      </Header>
      {isExpanded && <Content>{children}</Content>}
    </>
  );
};
