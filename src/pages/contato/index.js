import { useState } from "react";
import Link from "next/link";
import Settings from "../../components/Settings.json";
import Head from "next/head";

export default function Contato() {
  const [result, setResult] = useState();

  async function handleSubmit(e) {
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
      setResult(Success);
    } else {
      setResult(Failure);
    }
  }

  function handleCloseAlert(){
    setResult()
  }

  function Success() {
    location.href = "/contato/sucesso";
  }

  function Failure() {
    return (
      <>
      <Head>
        <title>Monteiro Guincho de Moto - Contato</title>
      </Head>
        <span className="form-alert bg-failure relative">
          <span className="close-x" onClick={handleCloseAlert}>
            x
          </span>
          <p className="no-margin">
            Ocorreu um erro! Tente novamente ou nos contate por
            <Link href={Settings.phoneHref}>
              <strong className="form-alert-a">&#160;ligação&#160;</strong>
            </Link>
            ou
            <Link href={Settings.whatsappLink}>
              <strong className="form-alert-a">&#160;whatsapp</strong>
            </Link>
            .
          </p>
        </span>
      </>
    );
  }

  function Loading() {
    return (
      <>
        <span className="form-alert bg-gray padding">
          Enviando formulário. Aguarde...
        </span>
      </>
    );
  }

  return (
    <form
      className="form"
      id="send-message"
      method="post"
      onSubmit={handleSubmit}
    >
      <h1 className="form-title">Contato</h1>
      <label className="form-label" form="send-message" htmlFor="nome">
        Nome
      </label>
      <input
        id="nome"
        name="nome"
        className="form-input"
        type="text"
        required
        placeholder="Digite seu nome aqui..."
      />

      <label className="form-label" form="send-message" htmlFor="telefone">
        Telefone para contato
      </label>
      <input
        id="telefone"
        name="telefone"
        className="form-input"
        type="tel"
        required
        placeholder="Apenas números. Ex: 051912345678"
      />

      <label className="form-label" form="send-message" htmlFor="mensagem">
        Mensagem*
      </label>
      <textarea
        id="mensagem"
        name="mensagem"
        className="form-input"
        rows="5"
        required
      ></textarea>
      <input className="form-input form-submit" type="submit" value="Enviar" />
      {result}
    </form>
  );
}
