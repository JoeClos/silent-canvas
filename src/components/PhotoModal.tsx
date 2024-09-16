import React from 'react';
import '../styles/photoModal.scss'; 

interface PhotoModalProps {
  photoSrc: string;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photoSrc, onClose }) => {
  return (
    <div className="photo-modal-overlay" onClick={onClose}>
      <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={photoSrc} alt="Selected" />
        <button className="photo-modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PhotoModal;
