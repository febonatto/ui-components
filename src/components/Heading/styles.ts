import styled from 'styled-components';

interface ContentProps {
  size: 'md' | 'lg';
}

export const Content = styled.h2<ContentProps>`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: ${({ size }) => {
    switch(size) {
    case 'md':
      return '1.10rem';
    case 'lg':
      return '1.35rem';
    }
  }};
  text-align: center;
`;
