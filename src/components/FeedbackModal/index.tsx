import { ReactNode, useEffect, useRef } from 'react';

import { Check, X } from 'phosphor-react';

import { OverlayContainer, Overlay, ModalContainer, ModalStatus, ModalContent, ActionsContainer } from './styles';
import { Heading } from '../Heading';

interface FeedbackModalRootProps {
  children?: ReactNode;
}

function FeedbackModalRoot(props: FeedbackModalRootProps) {
  const { children } = props;

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(overlayRef.current && modalRef.current) {
      const { current: overlay } = overlayRef;
      const { current: modal } = modalRef;
      overlay.style.animation = 'openOverlay 400ms ease-out forwards';
      modal.style.animation = 'openModal 350ms ease forwards 325ms';
    }
    return () => {
      if(overlayRef.current && modalRef.current) {
        const { current: overlay } = overlayRef;
        const { current: modal } = modalRef;
        overlay.style.animation = 'closeOverlay 400ms ease-out forwards 325ms';
        modal.style.animation = 'closeModal 350ms ease forwards';
      }
    };
  }, []);

  return (
    <Overlay ref={overlayRef}>
      <OverlayContainer>
        <ModalContainer ref={modalRef}>
          { children }
        </ModalContainer>
      </OverlayContainer>
    </Overlay>
  );
}

interface FeedbackModalStatusProps {
  status: 'success' | 'error';
}

function FeedbackModalStatus(props: FeedbackModalStatusProps) {
  const { status } = props;

  return (
    <ModalStatus status={status}>
      {
        status === 'success'
          ? <Check weight="bold" size={24} color="#fafafa" />
          : <X weight="bold" size={24} color="#fafafa" />
      }
    </ModalStatus>
  );
}

interface FeedbackModalTextProps {
  children: ReactNode;
}

function FeedbackModalText(props: FeedbackModalTextProps) {
  const { children } = props;

  return (
    <ModalContent>
      <Heading>{ children }</Heading>
    </ModalContent>
  );
}

interface FeedbackModalActionsProps {
  children: ReactNode;
}

function FeedbackModalActions(props: FeedbackModalActionsProps) {
  const { children } = props;

  return (
    <ActionsContainer>
      { children }
    </ActionsContainer>
  );
}

export const FeedbackModal = {
  Root: FeedbackModalRoot,
  Status: FeedbackModalStatus,
  Text: FeedbackModalText,
  Actions: FeedbackModalActions,
};
