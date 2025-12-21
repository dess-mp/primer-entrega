import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import NavBar from "../NavBar/NavBar.jsx";

function Checkout() {
  const { cart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: formData,
      items: cart,
      total: cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      date: new Date(),
    };

    console.log("ORDEN GENERADA:", order);
    alert("Compra realizada con éxito");

  };

  if (cart.length === 0) {
    return <p className="text-center mt-5">No hay productos en el carrito</p>;
  }

  return (
    <div className="container mt-5">
        <NavBar />
      <h2 className="mb-4 pt-5">Finalizar compra</h2>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-3"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-3"
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <button className="btn btn-success w-100">
              Confirmar compra
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h5>Resumen del carrito</h5>
          {cart.map((item) => (
            <p key={item.id}>
              {item.title} x {item.quantity} — $
              {item.price * item.quantity}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
