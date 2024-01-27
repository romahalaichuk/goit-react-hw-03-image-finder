import React, { useEffect, useCallback } from 'react';

const Button = ({ onClick }) => {
  const handleKeyPress = useCallback(
    event => {
      if (event.code === 'Enter') {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <button className="button-load-more " type="button" onClick={onClick}>
      Click me
    </button>
  );
};

export default Button;
