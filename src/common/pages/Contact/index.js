import { useState } from "react";
import Link from "next/link";
import { hrefs } from "common/data";
import Head from "next/head";

import styles from "./Contact.module.sass";

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
      location.href = "/contato/sucesso";
    } else {
      alert(Failure);
    }
  }

  const handleCloseAlert = () => {
    setResult("");
  }

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
          <p className="no-margin">
            Ocorreu um erro! Tente novamente ou nos contate por
            <Link href={hrefs.PHONE_NUMBER}>
              <strong className="form-alert-a">&#160;ligação&#160;</strong>
            </Link>
            ou
            <Link href={hrefs.SEND_WHATSAPP_MESSAGE}>
              <strong className="form-alert-a">&#160;whatsapp</strong>
            </Link>
            .
          </p>
        </span>
      </>
    );
  }

  const Loading = () => {
    return (
      <>
        <span className="form-alert bg-gray padding">
          Enviando formulário. Aguarde...
        </span>
      </>
    );
  }

  return (
    <div className={styles.container}>
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
            Telefone para contato
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
            Mensagem*
          </label>
          <textarea id="mensagem" name="mensagem" rows="3" required></textarea>
          <input className={styles.submit} type="submit" value="Enviar" />
        </section>
        {result}
      </form>
    </div>
  );
}
export default ContactPage;