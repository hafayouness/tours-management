import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryImage from "./GalleryImage";

function MansoryImagesGallery() {
  return (
    <ResponsiveMasonry coloumnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {GalleryImage.map((item, index) => (
          <img
            className="gallery-image "
            key={index}
            src={item}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MansoryImagesGallery;
