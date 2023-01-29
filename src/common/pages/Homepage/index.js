import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { hrefs } from "common/data";

import Carousel from "./Carousel";
import PresentationSection from "./PresentationSection";
import ContactSection from "./ContactSection";

import images from "./images";

import styles from "./Homepage.module.sass";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Monteiro Guincho de Moto</title>
      </Head>
      <main className={styles.container}>
        <Carousel images={images} />
        <PresentationSection />
        <ContactSection />
      </main>
      <span className={styles.whatsappButton}>
        <a href={hrefs.SEND_WHATSAPP_MESSAGE}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>Solicitar resgate</span>
        </a>
      </span>
    </>
  );
};

export default Homepage;
