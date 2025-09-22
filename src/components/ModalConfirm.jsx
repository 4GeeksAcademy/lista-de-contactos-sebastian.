import React from "react";

const ModalConfirm = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-box">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm}>✅ Sí</button>
          <button onClick={onCancel}>❌ Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
