import { useParams } from "react-router-dom";
import ItemDetail from "./../ItemDetail/ItemDetail.jsx";
import { useProducts } from "../hooks/useProducts"; // tu hook con useEffect

function ItemListContainer() {
  const { category } = useParams();
  const products = useProducts(category);

  let title;
  if (category) {
    title = category;
  } else {
    title = "Todos los productos";
  }

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4 text-center">{title}</h2>

      <div className="d-flex flex-wrap justify-content-around">
        {products.map(function(product) {
          return <ItemDetail key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
