import { useState } from 'react';
import '../styles/portfolio.scss';
import { photos } from '../data/photo';
import { Category, categories } from '../data/category';
import PhotoModal from '../components/PhotoModal';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const handlePhotoClick = (photoSrc: string) => {
    setSelectedPhoto(photoSrc);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const filteredPhotos = selectedCategory === "All" ? photos : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="frame">
      <div className="filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className={`photo ${photo.category.toLowerCase()}`} onClick={() => handlePhotoClick(photo.src)}>
            <img src={photo.src} alt={`Category: ${photo.category}`} />
          </div>
        ))}
      </div>
      {selectedPhoto && <PhotoModal photoSrc={selectedPhoto} onClose={closePhotoModal} />}
    </div>
  );
};

export default Portfolio;
