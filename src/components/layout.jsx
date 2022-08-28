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
            <label>Agendar</label>
          </div>
        </Link>
        <Link href="tel:51986561694">
          <div className="menu-option">
            <FontAwesomeIcon icon={faPhone} className="menu-option-icon" />
            <label>Ligar</label>
          </div>
        </Link>
      </div>
      {children}
      <footer className="footer">
        <span className="decor-none">
          <li><a href="">Contatar</a></li>
          <li><a href="">Aluguel de reboques</a></li>
          <li><a href="">Trabalhe conosco</a></li>
        </span>

        <span className="footer-rights">Monteiro Mototransporte 2022</span>
        <span className="footer-credits">
          Design by <a href="https://www.nicolasarths.com">@nicolasarths</a>
        </span>
      </footer>
    </>
  );
}
