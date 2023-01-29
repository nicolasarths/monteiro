import styles from "./PresentationSection.module.sass";

const PresentationSection = () => {
  return (
    <div className={styles.container}>
      <p>
        A Monteiro Guincho de Moto nasceu em 2017 com o intuito de se
        estabelecer como referência no transporte especializado de motocicletas
        na Grande Porto Alegre.
      </p>
      <p>
        Desde então milhares de clientes satisfeitos já usufruíram da nossa
        rampa automatizada com reboque basculante, que funciona 24 horas por
        dia, 7 dias por semana!
      </p>
      <p>
        Enguiçou? Ficou sem gasolina? Precisa ir fazer revisões, vistorias ou
        transportar sua moto para o litoral? Socorro, resgate e leva e traz de
        motos é com a Monteiro Guincho de Moto!
      </p>
      <h3>Regiões em que atuamos</h3>
      <ul>
        <li>Porto Alegre</li>
        <li>Alvorada</li>
        <li>Cachoeirinha</li>
        <li>Viamão</li>
        <li>Canoas</li>
      </ul>
      <h3>Método de Trabalho</h3>
      <p>
        Damos urgência e cuidamos com toda a dedicação da sua moto,
        transportando-a com segurança e qualidade para onde você quiser levá-la.
        Pode contar com nossos serviços sempre que precisar.
      </p>
      <h4>Agendamentos</h4>
      <p>
        Aceitamos transportes agendados para moto para que você possa se
        programar na data e horário que melhor atendam às suas necessidades.
      </p>
      <h4>Porte de Motocicletas</h4>
      <p>
        Trabalhamos no transporte especializado de motocicletas esportivas, de
        grande porte, para eventos, competições e viagens para o litoral,
        interior e até mesmo transporte de motos para outros estados. Mas também
        ajudamos você a chegar até a oficina quando precisar, para realizar
        perícias ou consertos de urgência na sua moto.
      </p>
      <h4>Demonstração</h4>
      <p>Assista ao vídeo de uma de nossas rampas funcionando!</p>
      <iframe
        src="https://www.youtube.com/embed/Zw9nMCUJNRY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default PresentationSection;
