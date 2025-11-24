import React from 'react';
import Image from 'next/image';

const CategoryCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <Image src={image} alt={title} width={300} height={200} className="image-card" />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default CategoryCard;