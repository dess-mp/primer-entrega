import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import { CartContext } from "../../context/CartContext.jsx";

function CartDetail() {
  const { cart, deleteCartProduct, editCartProduct, clearCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  

  return (
    <div>
      <NavBar />

      <div className="container mt-5 pt-5" style={{ maxWidth: "900px" }}>
        <h1 className="mb-5 text-center fw-bold">Tu carrito</h1>

        {cart.length === 0 ? (
          <p className="text-center text-muted fs-5">
            No hay productos en el carrito
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="card mb-4 shadow-sm"
              >
                <div className="card-body d-flex gap-4 align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "140px",
                      height: "140px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="mb-2 text-muted">
                      Precio unitario: ${item.price}
                    </p>

                    <div className="d-flex align-items-center gap-2 mb-3">
                      <button
                        className="btn btn-outline-secondary rounded-circle"
                        onClick={() =>
                          editCartProduct(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        −
                      </button>

                      <span className="fw-bold fs-5 px-2">
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-outline-secondary rounded-circle"
                        onClick={() =>
                          editCartProduct(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="fw-bold fs-5">
                      Subtotal: ${item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteCartProduct(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            {/* RESUMEN */}
            <div className="card shadow-sm mt-5">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="mb-0">
                        Total: <span className="text-primary">${total}</span>
                    </h3>

                    <button
                        className="btn btn-outline-danger"
                        onClick={clearCart}
                    >
                        Vaciar carrito
                    </button>
                    </div>

                    <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => navigate("/checkout")}
                    >
                        Comprar ahora
                    </button>
                    </div>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDetail;
