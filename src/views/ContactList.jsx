import React, { useContext } from "react";
import { ContactContext } from "../store/ContactContext";
import ContactCard from "../components/ContactCard";

const ContactList = () => {
  const { contacts, loading } = useContext(ContactContext);

  if (loading) return <p>Cargando contactos...</p>;

  return (
    <div className="container">
      <h1>Lista de Contactos</h1>
      {contacts.length === 0 && <p>No hay contactos aún</p>}
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} />
      ))}
    </div>
  );
};

export default ContactList;
