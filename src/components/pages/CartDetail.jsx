import { useContext } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import { CartContext } from "../../context/CartContext.jsx";

function CartDetail() {

    const { cart, deleteCartProduct, editCartProduct } = useContext(CartContext);

    console.log(cart);

    const handleEditQuantity = (item) => {
        const newQuantity = parseInt(prompt("Ingrese la nueva cantidad:", item.quantity));

        if (!newQuantity || newQuantity < 1) return;

        editCartProduct(item.id, newQuantity);
    }

    return (
        <div>
            <NavBar />
            
            <div className="container mt-5 pt-5">
                <h1 className="mb-4 text-center fw-bold">Carrito</h1>

                {cart.length === 0 && (
                    <p className="text-center mt-4">El carrito está vacío.</p>
                )}

                {cart.map(item => (
                    <div key={item.id} className="mb-4 border-bottom pb-3 d-flex align-items-center gap-3">
                        
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ 
                                width: "250px", 
                                height: "250px", 
                                objectFit: "cover",
                                borderRadius: "8px",
                                flexShrink: 0 
                            }}
                            className="me-3"
                        />
                        <div className="container">
                            <h2 className="h5">x{item.quantity} - {item.title} </h2>
                            <p className="fw-bold">${item.price * item.quantity}</p>

                            <div> 
                                <button 
                                    className="btn btn-outline-primary me-2"
                                    onClick={() => handleEditQuantity(item)}
                                >
                                    Editar Cantidad
                                </button>
                                <button 
                                    className="btn btn-outline-danger"
                                    onClick={() => deleteCartProduct(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartDetail;