import { ReactNode } from 'react';
import { Text } from '../Text';
import { ButtonContainer } from './styles';

interface ButtonRootProps {
  children: ReactNode;
  secondary?: boolean;
  background?: string;
  borderColor?: string;
  handleClick?: () => void;
}

function ButtonRoot(props: ButtonRootProps) {
  const { children, secondary = false, handleClick } = props;

  return (
    <ButtonContainer
      type="button"
      secondary={secondary}
      onClick={() => {
        if(handleClick) handleClick();
      }}
    >
      { children }
    </ButtonContainer>
  );
}

interface ButtonTextProps {
    children: ReactNode;
    size?: 'sm' | 'md';
}

function ButtonText(props: ButtonTextProps) {
  const { children, size } = props;

  return (
    <Text size={size}>{ children }</Text>
  );
}

interface ButtonIconProps {
  children: ReactNode;
}

function ButtonIcon(props: ButtonIconProps) {
  const { children } = props;

  return (
    <>
      { children }
    </>
  );
}

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon,
};
