import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ContactProvider } from "./store/ContactContext";
import ContactList from "./views/ContactList";
import AddContact from "./views/AddContact";
import "./styles/styles.css";

const App = () => {
  return (
    <ContactProvider>
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">📒 Contactos</Link>
          <Link to="/add">➕ Agregar</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
};

export default App;
