import { useState, useEffect } from "react";

export function useProducts(category) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/jsons/products.json");
        const data = await response.json();

        if (category) {
          const filtered = data.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    loadProducts();
  }, [category]);

  return products;
}

export default useProducts;