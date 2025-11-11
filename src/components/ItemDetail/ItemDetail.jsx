import { ShoppingCart } from 'lucide-react';
import ItemCount from "../ItemCount/ItemCount"; 
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  return (
    <div className="card flex-direction-column m-3" style={{ width: "22rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ width: "20rem", objectFit: "cover", height: "auto", alignSelf: "center" }}
      />

      <div className="card-body align-items-center text-center d-flex flex-column justify-content-center">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fs-4 fw-bold">${product.price}</p>

        <div className="d-flex justify-content-around w-100 mb-3">
            <a href="#" className="btn btn-primary d-flex align-items-center">
                <ShoppingCart className="me-2" size={20} />
                Añadir al carrito
            </a>
            <ItemCount />
        </div>


        <Link to={`/product-detail/${product.id}`} className="btn btn-outline-primary">
          Detalle
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
