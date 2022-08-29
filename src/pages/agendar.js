export default function contato() {
    return (
        <form className="form" id="send-message" method="post" action="">
            <h1 className="form-title">Agendar transporte</h1>
            <label form="send-message" htmlFor="nome">
                Nome
            </label>
            <input
                id="nome"
                className="form-input"
                type="text"
                required
                placeholder="Digite seu nome aqui..." />

            <label form="send-message" htmlFor="telefone">
                Telefone para contato
            </label>
            <input
                id="telefone"
                className="form-input"
                type="tel"
                required
                placeholder="Apenas números. Ex: 51912345678" />

            <label form="send-message" htmlFor="data">
                Data
            </label>
            <input
                className="form-input form-date-input"
                id="data"
                type="date"
                required/>

            <label form="send-message" htmlFor="mensagem">
                Mensagem*
            </label>
            <textarea
                id="mensagem"
                className="form-input"
                rows="5"
                required
                placeholder="Especificar o modelo da moto,
                        locais de origem e destino
                        em casos de orçamento.">
            </textarea>
            <input
                className="form-input form-submit"
                type="submit"
                value="Enviar" />

        </form>)
}