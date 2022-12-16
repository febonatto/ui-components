import styled from 'styled-components';

interface ContentProps {
  size: 'sm' | 'md';
}

export const Content = styled.span<ContentProps>`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: ${({ size }) => {
    switch(size) {
    case 'sm':
      return '0.85rem';
    case 'md':
      return '1rem';
    }
  }};
  opacity: 0.8;
`;
