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
              contato@monteiromototransporte.com.br
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
            <Link href="/contato">Enviar mensagem pelo site</Link>
          </span>
          <span className={styles.listItem}>
            <Link href="mailto:contato@monteiromototransporte.com.br">
              Iniciar conversa por e-mail
            </Link>
          </span>
          <span className={styles.listItem}>
            <Link href="https://www.nicolasarths.com.br/">
              Página do Desenvolvedor
            </Link>
          </span>
        </div>
      </div>

      <div>
        <span className={styles.rights}>
          MONTEIRO GUINCHO DE MOTO<small>&#174;</small>
        </span>

        <span className={styles.credits}>
          designed and developed by{" "}
          <a href="https://www.nicolasarths.com.br">@nicolasarths</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
