import NextImage from "common/components/Next/Image";
import styles from "./PresentationSection.module.sass";
import { useState } from "react";
import old from "./old.png";
import blue from "./blue.png";
import pedro from "./pedro.jpg";
import orange from "./orange.jpg";

const PresentationSection = () => {
  const [Clicked, setClicked] = useState(false);

  const textBeforeClick = "Assistir ao vídeo";
  const textAfterClick = "Esconder vídeo";

  const [text, setText] = useState(textBeforeClick);

  const setAsClicked = () => {
    setClicked(!Clicked);
    setText((prev) =>
      prev == textAfterClick ? textBeforeClick : textAfterClick
    );
  };
  return (
    <>
      <div className={styles.container}>
        <div id="intro" className={styles.intro}>
          <p className={styles.enguicou}>
            <strong>Enguiçou?</strong> <br />
            <strong>Ficou sem gasolina?</strong> <br />
          </p>
          <div className={styles.precisa}>
            <p>Precisa:</p>
            <ul className={styles.smaller}>
              <li>fazer revisões</li>
              <li>fazer vistorias</li>
              <li>transportar a moto para o litoral?</li>
            </ul>
          </div>
          <p className={styles.socorro}>
            <strong>Socorro</strong>, <strong>resgate</strong> e{" "}
            <strong>leva e traz de motos</strong> é com a Monteiro Guincho de
            Moto!
          </p>
          <div className={styles.buttonContainer}>
            <button>Fazer um orçamento</button>
          </div>
        </div>
        <div id="historia" className={styles.historia}>
          <h2>História</h2>
          <p>
            A <strong>Monteiro Guincho de Moto</strong> nasceu em 2016 com o
            intuito de se estabelecer como <strong>referência</strong> no
            transporte especializado de motocicletas na Grande Porto Alegre.
          </p>
          <NextImage className={styles.imageContainer} src={old} />
          <p>
            Desde então milhares de clientes satisfeitos já usufruíram da nossa
            rampa automatizada com reboque basculante, que funciona 24 horas por
            dia, 7 dias por semana!
          </p>
        </div>
        <h3>Regiões em que atuamos</h3>
        <ul>
          <li>Porto Alegre</li>
          <li>Alvorada</li>
          <li>Cachoeirinha</li>
          <li>Viamão</li>
          <li>Canoas</li>
        </ul>
        <p>
          Atuamos com guincho de moto em Porto Alegre e região metropolitana, e
          fazemos o transporte de motos para outras regiões.
        </p>
        <NextImage src={blue} className={styles.imageContainer} />
        <h3>Método de Trabalho</h3>
        <p>
          Damos urgência e cuidamos com toda a dedicação da sua moto,
          transportando-a com segurança e qualidade para onde você quiser
          levá-la. Pode contar com nossos serviços sempre que precisar.
        </p>
        <NextImage src={pedro} className={styles.imageContainer} />
        <h4>Agendamentos</h4>
        <p>
          Aceitamos transportes agendados para moto para que você possa se
          programar na data e horário que melhor atendam às suas necessidades.
        </p>
        <NextImage src={orange} className={styles.imageContainer} />
        <h4>Porte de Motocicletas</h4>
        <p>
          Trabalhamos no transporte especializado de motocicletas esportivas, de
          grande porte, para eventos, competições e viagens para o litoral,
          interior e até mesmo transporte de motos para outros estados.
        </p>
        <p>
          Ajudamos você a chegar até a oficina quando precisar, para realizar
          perícias ou consertos de urgência na sua moto.
        </p>
        <h4>Vídeo Institucional</h4>
        <p>
          <button onClick={setAsClicked}>{text}</button>
          {Clicked && (
            <div className={styles.player}>
              <iframe
                src="https://www.youtube.com/embed/Zw9nMCUJNRY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </p>
      </div>
    </>
  );
};
export default PresentationSection;
