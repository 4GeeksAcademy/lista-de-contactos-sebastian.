import React, { useState, useContext, useEffect } from "react";
import { ContactContext } from "../store/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { addContact, updateContact, contacts } = useContext(ContactContext);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  // Si existe id, rellenamos formulario
  useEffect(() => {
    if (id) {
      const contact = contacts.find((c) => c.id === parseInt(id));
      if (contact) setForm(contact);
    }
  }, [id, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateContact(id, form);
    } else {
      addContact(form);
    }
    navigate("/");
  };

  return (
    <div className="container">
      <h1>{id ? "Editar Contacto" : "Agregar Contacto"}</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Dirección"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <button type="submit">{id ? "Actualizar" : "Guardar"}</button>
      </form>
    </div>
  );
};

export default AddContact;
