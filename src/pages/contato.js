import { useState } from "react";
import Link from "next/link";
import Settings from '../components/Settings.json'

export default function Contato() {
    const [result, setResult] = useState()

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
          if (!field.name) return;
          formData[field.name] = field.value;
        });
      
        const response = await fetch('/api/mail', {
          method: 'post',
          body: JSON.stringify(formData)
        })

        if (response.status > 300) {setResult(Failure)}
        else {setResult(Success)}
      }

    function Success () {
        return (<>
            <span className="form-alert bg-success">Mensagem enviada com sucesso!</span>
        </>)
    }

    function Failure () {
        return (<>
            <span className="form-alert bg-failure">
                Ocorreu um erro! Tente novamente ou nos contate por <Link href={Settings.phoneHref}><strong>ligação</strong></Link> ou <Link href={Settings.whatsappLink}><strong>whatsapp</strong></Link>.
            </span>
        </>)
    }

    return (
        <form className="form" id="send-message" method="post" onSubmit={handleSubmit}>
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
                placeholder="Digite seu nome aqui..." />

            <label className="form-label" form="send-message" htmlFor="telefone">
                Telefone para contato
            </label>
            <input
                id="telefone"
                name="telefone"
                className="form-input"
                type="tel"
                required
                placeholder="Apenas números. Ex: 051912345678" />

            <label className="form-label" form="send-message" htmlFor="mensagem">
                Mensagem*
            </label>
            <textarea
                id="mensagem"
                name="mensagem"
                className="form-input"
                rows="5"
                required>
            </textarea>
            <input
                className="form-input form-submit"
                type="submit"
                value="Enviar" />
                {result}
        </form>)
}