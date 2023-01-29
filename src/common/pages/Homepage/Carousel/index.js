import { useState, useCallback, useEffect } from "react";

import Image from "common/components/Next/Image";

import styles from "./Carousel.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const NextImageBtn = ({ nextImageFunction }) => {
  return (
    <button className={styles.next} onClick={nextImageFunction}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

const PreviousImageBtn = ({ previousImageFunction }) => {
  return (
    <button className={styles.prev} onClick={previousImageFunction}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const Menu = ({
  setCurrentImageIndexFunction,
  arrayOfIndexes,
  currentIndex,
}) => {
  return (
    <div className={styles.menu}>
      {arrayOfIndexes.map((i) => (
        <button
          onClick={() => setCurrentImageIndexFunction(i)}
          key={i}
          className={
            currentIndex === i
              ? styles.menuButton + " " + styles.active
              : styles.menuButton
          }
        >
          {""}
        </button>
      ))}
    </div>
  );
};

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const nextIndex = prev + 1;
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
      <NextImageBtn nextImageFunction={nextImage} />
      <Menu
        arrayOfIndexes={images.map((img, i) => i)}
        setCurrentImageIndexFunction={setCurrentImageIndex}
        currentIndex={currentImageIndex}
      />
      <PreviousImageBtn previousImageFunction={prevImage} />
    </div>
  );
};

export default Carousel;
