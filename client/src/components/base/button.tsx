import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #edf2f4;
  border: 0;
  background-color: #8d99ae;
  border-radius: 4px;
  min-width: 36px;
  min-height: 36px;

  &[disabled] {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.15);
  }
  &:active {
    filter: brightness(0.75);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: #8d99ae;
`;

export const ButtonSecondary = styled(Button)`
  background-color: #d90429;
`;
