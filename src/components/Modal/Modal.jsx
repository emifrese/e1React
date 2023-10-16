import ReactDOM from "react-dom";

import { BackdropDiv, ModalDiv, ModalOverlayDiv } from "./ModalStyles";

const Backdrop = ({ Toggle }) => {
  return <BackdropDiv onClick={Toggle} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <ModalOverlayDiv>
      <ModalDiv>
        <>{children}</>
      </ModalDiv>
    </ModalOverlayDiv>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, Toggle }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop Toggle={Toggle} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
