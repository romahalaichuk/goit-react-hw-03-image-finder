import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleClickImage = e => {
    e.stopPropagation();
    handleToggleModal();
  };

  return (
    <li className="gallery-item" onClick={handleToggleModal}>
      <img src={image.webformatURL} alt="" onClick={handleClickImage} />

      {isModalOpen && (
        <Modal onClose={handleToggleModal}>
          <img src={image.largeImageURL} alt="" />
        </Modal>
      )}
    </li>
  );
};

export default ImageGalleryItem;
