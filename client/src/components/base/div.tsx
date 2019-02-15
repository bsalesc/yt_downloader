import React from 'react';
import styled from 'styled-components';

export const DivCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const DivCenterSpaceBetween = styled(DivCenter)`
  flex-direction: row;
  align-content: space-between;

  * {
    margin: 10px 3px;
  }
`;

export const DivColumnCenter = styled(DivCenter)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivResponsive = styled(DivCenterSpaceBetween)`
  width: 90%;

  @media (min-width: 769px) {
    max-width: 500px;
  }
`;
