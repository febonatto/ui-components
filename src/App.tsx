import { useState } from 'react';

import { ShoppingCart } from 'phosphor-react';

import { GlobalStyles } from './styles/globalStyles';

import { FeedbackModal } from './components/FeedbackModal';
import { Button } from './components/Button';

export function App() {
  const [ isModalEnabled, setIsModalEnabled ] = useState<boolean>(false);

  function handleModal() {
    setIsModalEnabled(prev => !prev);
  }

  return (
    <>
      <GlobalStyles />
      <Button.Root handleClick={handleModal}>
        <Button.Text>
          Abrir modal
        </Button.Text>
      </Button.Root>
      {
        isModalEnabled && (
          <FeedbackModal.Root>
            <FeedbackModal.Status status='success' />
            <FeedbackModal.Text>
              O produto foi adicionado ao carrinho!
            </FeedbackModal.Text>
            <FeedbackModal.Actions>
              <Button.Root
                handleClick={handleModal}
              >
                <Button.Text size="sm">
                  Voltar as compras
                </Button.Text>
              </Button.Root>
              <Button.Root
                secondary
                handleClick={handleModal}
              >
                <Button.Icon>
                  <ShoppingCart weight="bold" size={16} />
                </Button.Icon>
              </Button.Root>
            </FeedbackModal.Actions>
          </FeedbackModal.Root>
        )
      }
    </>
  );
}
