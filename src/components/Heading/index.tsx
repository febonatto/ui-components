import { ReactNode } from 'react';

import { Content } from './styles';

interface HeadingProps {
    size?: 'md' | 'lg';
    children: ReactNode;
}

export function Heading(props: HeadingProps) {
  const { children, size = 'md' } = props;

  return (
    <Content size={size}>
      { children }
    </Content>
  );
}
