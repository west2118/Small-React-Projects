import React, { Fragment } from "react";
import { createPortal } from "react-dom";

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-75 z-30" />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="w-full h-screen fixed left-0 top-0 flex items-center justify-center z-50">
      <div className="w-2/4 h-auto bg-white rounded-2xl text-black p-4 m-12">
        {children}
      </div>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");

const Modal = ({ children }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
