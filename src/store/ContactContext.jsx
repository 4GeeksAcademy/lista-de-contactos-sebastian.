import React, { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Juan Pérez", address: "Quito", phone: "099999999", email: "juan@mail.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Ana Gómez", address: "Guayaquil", phone: "088888888", email: "ana@mail.com", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Luis Martínez", address: "Cuenca", phone: "077777777", email: "luis@mail.com", img: "https://randomuser.me/api/portraits/men/3.jpg" }
  ]);

  const addContact = (contact) => setContacts([...contacts, contact]);
  const updateContact = (updatedContact) =>
    setContacts(contacts.map(c => (c.id === updatedContact.id ? updatedContact : c)));
  const deleteContact = (id) => setContacts(contacts.filter(c => c.id !== id));

  return (
    <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
