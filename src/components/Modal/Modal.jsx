import React, { useEffect, useCallback } from 'react';

const Modal = ({ onClose, children }) => {
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleKeyPress = event => {
      handleKeyDown(event);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyDown, onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
