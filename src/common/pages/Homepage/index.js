import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/future/image";
import { hrefs } from "common/data";

import images from "./images";

import styles from "./Homepage.module.sass";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Monteiro Guincho de Moto</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.text}>
          <h2>Guincho de Moto</h2>
          <p>
            Transporte realizado com agilidade e segurança 24 horas na capital
            Porto Alegre e região metropolitana. Demais localidades com
            agendamento.
          </p>
        </div>

        <Image
          alt="imagem de exemplo de guincho de moto"
          layout="fill"
          src={images.FIRST_EXAMPLE}
        />

        <div className={styles.text}>
          <h2>Transporte de motos</h2>
          <p>
            Transporte de motos para revisões em oficinas, realização de
            vistorias, para o litoral, interior e outros estados.
          </p>
        </div>

        <Image
          alt="imagem de exemplo de transporte de moto"
          layout="fill"
          src={images.SECOND_EXAMPLE}
        />

        <div className={styles.text}>
          <h2>Resgate e socorro</h2>
          <p>
            Resgate e socorro de motos em caso de acidente, pane mecânica, pane
            seca, entre outros.
          </p>
        </div>

          <Image
            alt="imagem de exemplo de resgate de motos"
            layout="fill"
            src={images.THIRD_EXAMPLE}
          />

        <div className={styles.text}>
          <h2>Reboque de motos</h2>
          <p>Reboque de motos com reboque basculante 24h.</p>
        </div>

          <Image
            alt="imagem de exemplo de reboque de motos"
            layout="fill"
            src={images.FOURTH_EXAMPLE}
          />
      </main>
      <span className={styles.whatsappButton}>
        <a href={hrefs.SEND_WHATSAPP_MESSAGE}>
          <FontAwesomeIcon
            icon={faWhatsapp}
          />
          <span>Solicitar resgate</span>
        </a>
      </span>
    </>
  );
};

export default Homepage;
