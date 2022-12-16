import { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: ${({ secondary }) => secondary ? '#E0115F' : '#FAFAFA'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background: ${({ secondary }) => secondary ? 'transparent' : '#E0115F'};
  border: ${({ secondary }) => secondary ? '1px solid #E0115F' : 'none'};
  border-radius: 0.50rem;
`;
