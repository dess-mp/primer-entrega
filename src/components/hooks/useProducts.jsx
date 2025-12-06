import { useEffect, useState } from "react";
import { getProducts } from "../../firebase/db";

export const useProducts = (category) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const all = await getProducts();

      if (category) {
        const filtered = all.filter((p) => p.category === category);
        setProducts(filtered);
      } else {
        setProducts(all);
      }
    };

    load();
  }, [category]);

  return products;
};
