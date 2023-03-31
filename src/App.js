import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <button id="buyWithMoonPay" onClick={openModal}>
        Buy with MoonPay
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div id="modalContent" className="modal-content">
          <iframe
            id="moonpayIframe"
            src="https://buy-sandbox.moonpay.com/?apiKey=pk_test_123&theme=dark"
            title="MoonPay"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default App;
