import { useState } from "react";

const Modal = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleModal = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <div className="button-container">
        <button onMouseOver={handleModal} className="button"></button>

      {isOpen && <div className="modal-container"></div>}
      </div>
    </div>
  );
};

export default Modal;
