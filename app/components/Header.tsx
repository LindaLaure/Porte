import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="titreHeader"> Linda Douanla</h1>
      <div className="header-icons">
        <a href="https://wa.me/+237657044777" target="_blank" rel="nooper">
          <FaWhatsapp className="iconH" />
        </a>
        <a href="douanla.linda.laure@gmail.com" target="_blank" rel="nooper">
          <FaEnvelope className="iconH" />
        </a>
      </div>
    </header>
  );
};

export default Header;
