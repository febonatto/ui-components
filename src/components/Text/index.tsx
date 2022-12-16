import { ReactNode } from 'react';
import { Content } from './styles';

interface TextProps {
  children: ReactNode;
  size?: 'sm' | 'md';
}

export function Text(props: TextProps) {
  const { children, size = 'sm' } = props;

  return (
    <Content size={size}>
      { children }
    </Content>
  );
}
