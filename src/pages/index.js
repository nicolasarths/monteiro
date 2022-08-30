import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Settings from "../components/Settings.json"

export default function Home() {
  return (
    <>
      <Head>
        <title>Monteiro Guincho de Moto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid justify">
        <div className="grid-text grid-item-1">
          <h2 className="grid-title">
            Guincho de Moto
          </h2>
          <p>
            Transporte realizado com agilidade e segurança
            24 horas na capital Porto Alegre e região metropolitana.
            Demais localidades com agendamento.
          </p>
        </div>
        <div className="grid-image grid-item-2">
          <Image
            alt="imagem de exemplo de guincho de moto"
            layout="fill"
            src="/exemplo-guincho-de-moto-3.jpg" />
        </div>

        <div className="grid-text grid-item-4">
          <h2 className="grid-title">
            Transporte de motos
          </h2>
          <p>
            Transporte de motos para revisões em oficinas,
            realização de vistorias, para o litoral, interior
            e outros estados.
          </p>
        </div>

        <div className="grid-image grid-item-3">
          <Image
            alt="imagem de exemplo de transporte de moto"
            layout="fill"
            src="/exemplo-transporte-1.jpg" />
        </div>

        <div className="grid-text grid-item-5">
          <h2 className="grid-title">
            Resgate e socorro
          </h2>
          <p>
            Resgate e socorro de motos em caso de acidente,
            pane mecânica, pane seca, entre outros.
          </p>
        </div>

        <div className="grid-image">
          <Image
            alt="imagem de exemplo de resgate de motos"
            layout="fill"
            src="/exemplo-resgate.jpg" />
        </div>

        
        <div className="grid-text grid-item-6">
          <h2 className="grid-title">
            Reboque de motos
          </h2>
          <p>
            Reboque de motos com reboque basculante 24h.
          </p>
        </div>

        <div className="grid-image">
          <Image
            alt="imagem de exemplo de reboque de motos"
            layout="fill"
            src="/exemplo-reboque.jpg" />
        </div>


      </main>
      <span className="rescue-button rescue-button-bg hide">
        <a href={Settings.whatsappLink}>
          <FontAwesomeIcon icon={faWhatsapp} className="rescue-button-whatsapp-icon rescue-button-bg" />
          Solicitar resgate
        </a>
      </span>
    </>
  );
}