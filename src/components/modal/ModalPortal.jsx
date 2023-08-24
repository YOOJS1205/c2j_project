import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
  const element = document.getElementById("modal");

  return createPortal(children, element);
};

export default ModalPortal;
