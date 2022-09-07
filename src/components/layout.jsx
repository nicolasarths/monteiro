import Settings from './Settings.json'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  faHome,
  faCheckSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Layout({ children }) {
  const router = useRouter();

  function isActive(currentPath) {
    return router.pathname == currentPath
      ? "menu-option active"
      : "menu-option";
  }

  return (
    <>
      <div className="cover">
        <div className="cover-bg">
          <Image
            src="/big-cover.png"
            layout="fill"
            objectFit={"cover"}
            alt="plano de fundo da capa"
          />
        </div>
        <Image
          src="/logo-monteiro.png"
          layout="fill"
          objectFit={"contain"}
          alt="Logo da Monteiro Mototransporte,
                    guincho de motos especializado"
        />
      </div>
      <div className="menu">
        <Link href="/">
          <div className={isActive("/")}>
            <FontAwesomeIcon icon={faHome} className="menu-option-icon" />
            <label>Início</label>
          </div>
        </Link>
        <Link href="/contato">
          <div className={isActive("/contato")}>
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="menu-option-icon"
            />
            <label>Contato</label>
          </div>
        </Link>
        <Link href={Settings.phoneHref}>
          <div className="menu-option">
            <FontAwesomeIcon icon={faPhone} className="menu-option-icon" />
            <label>Ligar</label>
          </div>
        </Link>
      </div>
      {children}
      <footer className="footer">
        <span className="footer-list">
          <Link href={Settings.phoneHref}>Ligar</Link>
          <Link href="/contato">Enviar e-mail</Link>
          <Link href={Settings.whatsappLink}>Enviar mensagem via Whatsapp</Link>
        </span>

        <span className="footer-rights">Monteiro Guincho de Moto</span>
        <span className="footer-list">
          <span className="footer-credits">Design by <Link href="https://www.nicolasarths.com.br">@nicolasarths</Link></span>
          <Link href="https://www.nicolasarths.com.br/contato">Contatar</Link>
          <Link href="https://www.nicolasarths.com.br/contato">Feedback</Link>
        </span>
      </footer>
    </>
  );
}
