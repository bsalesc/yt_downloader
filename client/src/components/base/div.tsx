import React from 'react';
import styled from 'styled-components';

export const DivCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const DivCenterSpaceBetween = styled.div`
  flex-direction: row;
  align-content: space-between;
`;

export const DivColumnCenter = styled(DivCenter)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
