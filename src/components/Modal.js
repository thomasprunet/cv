import React from 'react';
import ReactModal from 'react-modal';
import './Popup.css';

const CustomModal = ({ isOpen, onClose, title, text }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-header">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </ReactModal>
  );
};

export default CustomModal;