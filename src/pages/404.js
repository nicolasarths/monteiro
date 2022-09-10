import Head from "next/head"
import Link from "next/link"

export default function NotFound() {
    return (<>
        <Head>
            <title>Monteiro Guincho de Moto - Página não encontrada</title>
        </Head>
        <div className="not-found padding-small">
            <h1 className="not-found-title primary-red">Página não encontrada</h1>
            <p>Opa, parece que essa página não está disponível.</p>
            <p className="primary-red">
                <Link href="/">Retornar para a página inicial</Link>
            </p>
        </div>
    </>)
}