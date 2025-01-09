import Image from "common/components/Next/Image";
import Link from "common/components/Next/Link";
import logo from "common/assets/logo.png";

import { hrefs } from "common/data";

import styles from "./Footer.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.presentation}>
        <Image src={logo} alt="logo da Monteiro Guincho de Moto" />
        <p>
          Serviço especializado e focado na excelência. Sua satisfação é nossa
          busca!
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.list}>
          <h5>Contato</h5>
          <span className={styles.listItem}>
            <FontAwesomeIcon icon={faHome} />
            <span>Rua José Milton Paris, Jardim Algarve, Alvorada</span>
          </span>
          <span className={styles.listItem}>
            <FontAwesomeIcon icon={faPhone} />
            <span>(51) 9 8656-1694</span>
          </span>
          <span className={styles.listItem}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className={styles.email}>
              guinchodemoto@hotmail.com
            </span>
          </span>
        </div>
        <div className={styles.list}>
          <h5>Links Úteis</h5>
          <span className={styles.listItem}>
            <Link href={hrefs.PHONE_NUMBER}>Ligar agora</Link>
          </span>
          <span className={styles.listItem}>
            <Link href={hrefs.SEND_WHATSAPP_MESSAGE}>
              Enviar mensagem pelo Whatsapp
            </Link>
          </span>
          <span className={styles.listItem}>
            <Link href={hrefs.CONTACT_VIA_WEBSITE}>
              Enviar mensagem pelo site
            </Link>
          </span>
          <span className={styles.listItem}>
            <Link href={hrefs.SEND_MAIL}>Iniciar conversa por e-mail</Link>
          </span>
          <span className={styles.listItem}>
            <Link href={hrefs.DEV_WEBSITE}>Página do Desenvolvedor</Link>
          </span>
        </div>
      </div>

      <div>
        <span className={styles.rights}>
          MONTEIRO GUINCHO DE MOTO<small>&#174;</small>
        </span>

        <span className={styles.credits}>
          designed and developed by{" "}
          <a href={hrefs.DEV_WEBSITE}>@nicolasarths</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
