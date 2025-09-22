import React, { useContext, useState } from "react";
import { ContactContext } from "../store/ContactContext.jsx";
import { Link } from "react-router-dom";
import ModalConfirm from "./ModalConfirm.jsx";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card-contact">
      {/* Lado izquierdo: Imagen + información */}
      <div className="contact-left">
        <img
          src={contact.img || "https://cdn.pixabay.com/photo/2025/09/04/11/25/kokoshnik-9815386_1280.jpg"}
          alt={contact.name}
          className="contact-img"
        />
        <div className="contact-info">
          <h3>{contact.name}</h3>
          <p>📍 {contact.address}</p>
          <p>📞 {contact.phone}</p>
          <p>✉️ {contact.email}</p>
        </div>
      </div>

      {/* Lado derecho: acciones en línea */}
      <div className="contact-actions-inline">
        <Link to={`/edit/${contact.id}`} className="btn-edit">✏️</Link>
        <button onClick={() => setShowModal(true)} className="btn-delete">🗑️</button>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <ModalConfirm
          message={`¿Seguro que quieres eliminar a ${contact.name}?`}
          onConfirm={() => { deleteContact(contact.id); setShowModal(false); }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ContactCard;
