import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2px);
  transform: scale(0, 0);

  @keyframes openOverlay {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  @keyframes closeOverlay {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
`;

export const OverlayContainer = styled.div`
  position: relative;
  min-width: 16rem;
  min-height: 13rem;
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  position: absolute;
  bottom: -100%;
  width: 100%;
  height: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.25rem;
  padding-bottom: 0.5rem;
  background: #fafafa;
  border-radius: 0.75rem;

  @keyframes openModal {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }

  @keyframes closeModal {
    from {
      bottom: 0;
    }
    to {
      bottom: -100%;
    }
  }
`;

interface ModalStatusProps {
  status: 'success' | 'error';
}

export const ModalStatus = styled.div<ModalStatusProps>`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ status }) => {
    switch(status) {
    case 'success':
      return '#24d160';
    case 'error':
      return '#ff3860';
    }
  }};
  border: 1px solid #fafafa;
  border-radius: 50%;
`;

export const ModalContent = styled.div`
  height: calc(100% - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionsContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button:first-child {
    width: 75%;
  }

  button:last-child {
    width: 25%;
  }
`;
