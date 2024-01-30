// Modal.jsx
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

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

  const modalContent = React.Children.only(children);

  return (
    <div
      className="overlay"
      onClick={e => e.target.classList.contains('overlay') && onClose()}
    >
      <div className="modal">{modalContent}</div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
