import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "./NotFound.module.sass";

const NotFound = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/");
  }, []);
  return (
    <>
      <Head>
        <title>Monteiro Guincho de Moto - Redirecionando</title>
      </Head>
      <div className={styles.notFound}>
        <h1>Redirecionando</h1>
        <p>
          Se você não for redirecionado para a página inicial, clique no botão
          abaixo.
        </p>
        <Link href="/">Retornar para a página inicial</Link>
      </div>

      {/* <Head>
        <title>Monteiro Guincho de Moto - Página não encontrada</title>
      </Head>
      <div className={styles.notFound}>
        <h1>Página não encontrada</h1>
        <p>Opa, parece que essa página não está disponível.</p>
        <Link href="/">Retornar para a página inicial</Link>
      </div>
     */}
    </>
  );
};

export default NotFound;
