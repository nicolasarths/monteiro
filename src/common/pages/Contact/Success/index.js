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
        <h1>Sucesso!</h1>
        <p>Recebemos sua mensagem e em breve iremos lhe retornar!</p>
        <Link href="/">Retornar para a página inicial</Link>
      </div>
    </>
  );
};

export default Success;
