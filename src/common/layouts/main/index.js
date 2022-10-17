import { hrefs } from "common/data";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  faHome,
  faCheckSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coverImage from "./assets/cover-image.png";

import styles from "./MainLayout.module.sass";

const Layout = ({ children }) => {
  const router = useRouter();

  const isActive = (currentPath) => {
    return router.pathname == currentPath
      ? styles.menuOption + " " + styles.active
      : styles.menuOption;
  }

  return (
    <>
      <div className={styles.cover}>
        <Image
          src={coverImage}
          alt="Logo da Monteiro Mototransporte,
                    guincho de motos especializado"
        />
      </div>
      <div className={styles.menu}>
        <Link href="/">
          <div className={isActive("/")}>
            <FontAwesomeIcon icon={faHome} />
            <label>Início</label>
          </div>
        </Link>
        <Link href="/contato">
          <div className={isActive("/contato")}>
            <FontAwesomeIcon icon={faCheckSquare} />
            <label>Contato</label>
          </div>
        </Link>
        <Link href={hrefs.PHONE_NUMBER}>
          <div className={styles.menuOption}>
            <FontAwesomeIcon icon={faPhone} />
            <label>Ligar</label>
          </div>
        </Link>
      </div>
      {children}
      <footer className={styles.footer}>
        <span className={styles.list}>
          <Link href={hrefs.PHONE_NUMBER}>Ligar</Link>
          <Link href="/contato">Enviar e-mail</Link>
          <Link href={hrefs.SEND_WHATSAPP_MESSAGE}>
            Enviar mensagem via Whatsapp
          </Link>
        </span>

        <span className={styles.rights}>Monteiro Guincho de Moto</span>
        <span className={styles.list}>
          <span className={styles.credits}>
            Design by{" "}
            <a href="https://www.nicolasarths.com.br">@nicolasarths</a>
          </span>
        </span>
      </footer>
    </>
  );
}
export default Layout;