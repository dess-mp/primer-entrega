import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { useEffect, useState } from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);
  let counter = 0;

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetch("/jsons/products.json");
        const data = await response.json();

        const categories = data.map((item) => item.category);
        const uniqueCategories = [];

        for (let i = 0; i < categories.length; i++) {
          const category = categories[i];
          if (!uniqueCategories.includes(category)) {
            uniqueCategories.push(category);
          }
        }

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      }
  };

  loadCategories();
}, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light px-3 fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-3 d-none d-sm-block link-primary" to="/">Apple Kingdom</NavLink>

        <NavLink className="navbar-brand d-block d-sm-none" to="/">
          <img src="/img/logo.ico" alt="Apple Kingdom" style={{ height: "40px" }} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center fw-bold">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Inicio</NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink to="/" className="dropdown-item">Todos los productos</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <NavLink to={`/category/${cat}`} className="dropdown-item">
                      {cat}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </li>
          </ul>
        </div>

        <div className="cart d-flex align-items-center">
          <Link to="/cart-detail">
            <CartWidget />
          </Link>
          <p className="m-0 ms-2">{counter}</p>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;
