import React, { useState } from 'react';

export default function ZoomOutImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src="https://aoasoftwaresolution.com/wp-content/uploads/2023/06/wde.jpg"
      alt="Example"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        height: '80%',
        objectFit: 'cover',
        borderRadius: '16px',
        border: isHovered ? 'none' : '2px solid #ccc',
        transform: isHovered ? 'scale(0.9)' : 'scale(1)',
        transition: 'transform 0.3s ease, border 0.3s ease'
      }}
    />
  );
}
