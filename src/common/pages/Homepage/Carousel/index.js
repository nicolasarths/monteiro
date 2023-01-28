import { useState, useCallback, useEffect } from "react";

import Image from "common/components/Next/Image";

import styles from "./Carousel.module.sass";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const nextIndex = prev + 1;
      console.log("image ", nextIndex);
      if (nextIndex > images.length - 1) return 0;
      return nextIndex;
    });
  }, [images]);

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  };

  useEffect(() => {
    setInterval(() => {
      nextImage();
    }, 7000);
  }, [nextImage]);
  return (
    <div className={styles.carousel}>
      <Image
        className={styles[images[currentImageIndex].type]}
        alt={images[currentImageIndex].alt}
        src={images[currentImageIndex].src}
      />

      <h2>Guincho de Moto</h2>
      <p>{images[currentImageIndex].caption}</p>
    </div>
  );
};

export default Carousel;
