import NavBar from "../NavBar/NavBar";

function Contact() {
  return (
    <div>
      <NavBar />

      <div className="container py-5">
        <h2 className="my-5 text-center">¡Envíanos un mensaje!</h2>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="form-control form-hover"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-hover"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="asunto" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              className="form-control form-hover"
              placeholder="Consulta sobre productos, reparaciones, etc."
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="form-control form-hover"
              rows="5"
              placeholder="Escribí tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-dark btn-sm px-4">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
