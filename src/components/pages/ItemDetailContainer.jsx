import { ShoppingCart } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";

import { getProducts } from "../../firebase/db.js";
import { CartContext } from "../../context/CartContext.jsx";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const { addCartProduct } = useContext(CartContext);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const allProducts = await getProducts();
        const found = allProducts.find((item) => item.id === id);
        setProduct(found);
      } catch (error) {
        console.error("Error al cargar producto:", error);
      }
    };

    loadProduct();
  }, [id]);

  const handleBuyNow = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    addCartProduct(productToAdd);
    navigate("/checkout");
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    addCartProduct(productToAdd);
    console.log("Producto agregado al carrito:", productToAdd.id);
  };

  if (!product) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }

  return (
    <div>
      <NavBar />

      <div className="container mt-5 pt-5">
        <div className="row justify-content-between align-items-start">

          <div className="col-md-5">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-5 mt-4 mt-md-0 align-self-center border-start border-0 border-md-start ps-md-4">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted">{product.description}</p>
            <h4 className="text-primary mb-4">${product.price}</h4>

            <div className="d-flex gap-2">
              <button
                className="btn btn-primary"
                onClick={handleBuyNow}
              >
                Comprar ahora
              </button>

              <button
                className="btn btn-light"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="me-1" />
                Agregar al carrito
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
