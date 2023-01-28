import { useState } from "react";
import Link from "next/link";
import { hrefs } from "common/data";
import Head from "next/head";

import styles from "./ContactSection.module.sass";

const ContactPage = () => {
  const [result, setResult] = useState();

  const alert = (setter) => {
    setResult(setter);
    setTimeout(() => setResult(""), 10000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResult(Loading);

    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const response = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    if (response.status > 199 && response.status < 300) {
      location.href = hrefs.CONTACT_SUCCESS_PAGE;
    } else {
      alert(Failure);
    }
  };

  const handleCloseAlert = () => {
    setResult("");
  };

  const Failure = () => {
    return (
      <>
        <Head>
          <title>Monteiro Guincho de Moto - Contato</title>
        </Head>
        <span className={styles.alert}>
          <span className={styles.close} onClick={handleCloseAlert}>
            x
          </span>
          <p>
            Ocorreu um erro! Tente novamente ou nos contate por
            <Link href={hrefs.PHONE_NUMBER}>
              <strong>&#160;ligação&#160;</strong>
            </Link>
            ou
            <Link href={hrefs.SEND_WHATSAPP_MESSAGE}>
              <strong>&#160;whatsapp</strong>
            </Link>
            .
          </p>
        </span>
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <span className={styles.loading}>Enviando formulário. Aguarde...</span>
      </>
    );
  };

  return (
    <div id="contato" className={styles.container}>
      <h1>Contato</h1>
      <form id="send-message" method="post" onSubmit={handleSubmit}>
        <section>
          <label form="send-message" htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Digite seu nome aqui..."
          />

          <label form="send-message" htmlFor="telefone">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            placeholder="Apenas números. Ex: 051912345678"
          />
        </section>

        <section>
          <label form="send-message" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea id="mensagem" name="mensagem" rows="6" required></textarea>
          <input className={styles.submit} type="submit" value="Enviar" />
          <div className={styles.submitDisclaimer}>
            <input type="checkbox" required />
            <p>
              Dados contidos nesse formulário serão encaminhados por uma
              ferramenta de terceiros e, portanto, estão sujeitos a serem
              interceptados. Ao clicar em &quot;enviar&quot;, você concorda que
              os dados enviados não são sensíveis e podem se tornar públicos.
              Caso não concorde, você pode enviar um e-mail diretamente clicando{" "}
              <a href={hrefs.SEND_MAIL}>aqui</a>.
            </p>
          </div>
        </section>
      </form>
      {result}
    </div>
  );
};
export default ContactPage;
