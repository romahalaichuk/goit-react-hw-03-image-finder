// Modal.js
import React, { useEffect } from 'react';

const Modal = ({ imageUrl, onClose }) => {
  // Dodajemy obsługę zdarzeń klawiatury dla zamknięcia modala po naciśnięciu klawisza ESC
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="overlay" onClick={handleClickOutside}>
      <div className="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
