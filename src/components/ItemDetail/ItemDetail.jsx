import { ShoppingCart } from 'lucide-react';
import ItemCount from "../ItemCount/ItemCount"; 
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import useCount from '../hooks/useCount';

function ItemDetail({ product }) {

  const {addCartProduct} = useContext(CartContext);

  const { count, add, less } = useCount({initialCount: 1, stock: product.stock });

  const handleAddToCart = () => {
    const productToAdd = {
      image: product.image,
      title: product.title,
      id: product.id,
      quantity: count,
      price: product.price,
    };
    addCartProduct(productToAdd);
  }

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
        <p className="card-text fs-4 fw-bold">${product.price}</p>

        <div className="d-flex justify-content-around w-100 mb-3">
            <a className="btn btn-primary d-flex align-items-center" onClick={handleAddToCart}>
                <ShoppingCart className="me-2" size={20} />
                Añadir al carrito
            </a>
            <ItemCount count={count} add={add} less={less} />
        </div>


        <Link to={`/product-detail/${product.id}`} className="btn btn-outline-primary">
          Detalle
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
