import Head from "next/head"
import Link from "next/link"

import styles from "./NotFound.module.sass"

const NotFound = () => {
    return (<>
        <Head>
            <title>Monteiro Guincho de Moto - Página não encontrada</title>
        </Head>
        <div className={styles.notFound}>
            <h1>Página não encontrada</h1>
            <p>Opa, parece que essa página não está disponível.</p>
            <Link href="/">Retornar para a página inicial</Link>
        </div>
    </>)
}

export default NotFound;