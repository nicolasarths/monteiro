import Head from "next/head";
import Link from "next/link";

import styles from "./Success.module.sass";

const Success = () => {
  return (
    <>
      <Head>
        <title>Monteiro Guincho de Moto - Contato - Sucesso</title>
      </Head>
      <div className={styles.success}>
        <h1 className="primary-red form-success-title">Sucesso!</h1>
        <p>Recebemos sua mensagem e em breve iremos lhe retornar!</p>
        <p className="primary-red">
          <Link href="/">Retornar para a página inicial</Link>
        </p>
      </div>
    </>
  );
};

export default Success;
