import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch("/jsons/products.json");
        const data = await response.json();
        const foundProduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error al cargar producto:", error);
      }
    };

    loadProduct();
  }, [id]);

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
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className="col-md-5 mt-4 mt-md-0 align-self-center border-start border-0 border-md-start ps-md-4">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted">{product.description}</p>
            <h4 className="text-primary mb-4">${product.price}</h4>
            <div>
              <button className="btn btn-primary me-2 mb-2">Comprar ahora</button>
              <button className="btn btn-light me-2 mb-2"><ShoppingCart className="me-1" /> Agregar al carrito</button>
            </div>
          </div>
        </div>
    </div>

    </div>
  );
}

export default ProductDetail;
