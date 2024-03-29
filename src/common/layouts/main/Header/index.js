import Link from "common/components/Next/Link";
import Image from "common/components/Next/Image";
import { useRouter } from "next/router";
import { hrefs } from "common/data";
import logo from "common/assets/logo.png";

import {
  faHome,
  faCheckSquare,
  faPhone,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.sass";

const Menu = () => {
  const router = useRouter();

  const isActive = (currentPath) => {
    return router.pathname == currentPath
      ? styles.menuOption + " " + styles.active
      : styles.menuOption;
  };
  return (
    <div className={styles.menu}>
      <Link href="/">
        <div className={isActive("/")}>
          <FontAwesomeIcon icon={faHome} />
          <label>Início</label>
        </div>
      </Link>

      <Link href={hrefs.CONTACT_VIA_WEBSITE}>
        <div className={styles.menuOption}>
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
  );
};

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.cover}>
            <Image src={logo} alt="logo da Monteiro Guincho de Moto" />
          </div>
        </Link>
        <Menu />
      </div>
      <Menu />
    </>
  );
};

export default Header;
