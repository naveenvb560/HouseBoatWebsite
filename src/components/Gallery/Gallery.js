import React from "react";
import './Gallery.component.scss';

const Gallery = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../../assets/gallery/', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="gallery-parent-container" id="Gallery">
      <p>Gallery</p>
      <div className="gallery-container">
        {
          images.map((image) => (
            <img src={image} alt={String(image)} />)
          )
        }
      </div>
    </div>

  )
}


export default Gallery;