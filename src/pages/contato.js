export default function contato() {

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
          if (!field.name) return;
          formData[field.name] = field.value;
        });
      
        fetch('/api/mail', {
          method: 'post',
          body: JSON.stringify(formData)
        })
      }

    return (
        <form className="form" id="send-message" method="post" onSubmit={handleSubmit}>
            <h1 className="form-title">Contato</h1>
            <label form="send-message" htmlFor="nome">
                Nome
            </label>
            <input
                id="nome"
                name="nome"
                className="form-input"
                type="text"
                required
                placeholder="Digite seu nome aqui..." />

            <label form="send-message" htmlFor="telefone">
                Telefone para contato
            </label>
            <input
                id="telefone"
                name="telefone"
                className="form-input"
                type="tel"
                required
                placeholder="Apenas números. Ex: 051912345678" />

            <label form="send-message" htmlFor="mensagem">
                Mensagem*
            </label>
            <textarea
                id="mensagem"
                name="mensagem"
                className="form-input"
                rows="5"
                required
                placeholder="Especificar o modelo da moto,
                        locais de origem e destino.">
            </textarea>
            <input
                className="form-input form-submit"
                type="submit"
                value="Enviar" />

        </form>)
}