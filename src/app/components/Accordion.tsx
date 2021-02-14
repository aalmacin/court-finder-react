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
  background-color: ${colors.tertiary}77;
  color: black;
`;

const HeaderText = styled.div`
  font-size: 2rem;
`;

const HeaderIcon = styled.div``;

const Content = styled.div`
  font-size: 1.8rem;
  padding: 1rem;
  border: 0.1rem solid ${colors.main};
  border-top: none;
`;

type AccordionProps = {
  defaultExpanded?: boolean;
  header: string;
  className?: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  defaultExpanded = false,
  header,
  className,
  children
}) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className={className}>
      <Header onClick={toggleExpanded}>
        <HeaderText>{header}</HeaderText>
        <HeaderIcon>{isExpanded ? '-' : '+'}</HeaderIcon>
      </Header>
      {isExpanded && <Content>{children}</Content>}
    </div>
  );
};
