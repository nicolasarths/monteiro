import { hrefs } from "common/data";
import Link from "common/components/Next/Link";

import styles from "./ContactSuccess.module.sass";

const ContactSuccess = () => {
  return (
    <div className={styles.container}>
      <h1>Sucesso ao contatar!</h1>
      <p>Nós recebemos sua mensagem e logo iremos lhe responder.</p>
      <h4>Outras formas de nos contatar:</h4>
      <ul>
        <li>
          <Link href={hrefs.PHONE_NUMBER}>Ligação</Link>
        </li>
        <li>
          <Link href={hrefs.SEND_WHATSAPP_MESSAGE}>WhatsApp</Link>
        </li>
        <li>
          <Link href={hrefs.SEND_MAIL}>E-mail</Link>
        </li>
      </ul>

      <button>Voltar para a página inicial</button>
    </div>
  );
};
export default ContactSuccess;
