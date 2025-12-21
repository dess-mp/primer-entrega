import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { useEffect, useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext.jsx";

function NavBar() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { deleteUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const counter = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetch("/jsons/products.json");
        const data = await response.json();

        const uniqueCategories = [...new Set(data.map((i) => i.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error(error);
      }
    };

    loadCategories();
  }, []);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      deleteUser();
      navigate("/login");
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold fs-4"
          style={{ color: "#0003f6" }}
          to="/"
        >
          Apple Kingdom
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto fw-semibold gap-lg-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categorías
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/" className="dropdown-item">
                    Todos los productos
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
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
              <NavLink to="/contact" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <NavLink to="/login" className="nav-link">
              Iniciar sesión
            </NavLink>

            <NavLink to="/register" className="nav-link">
              Registrarse
            </NavLink>

            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-outline-danger"
            >
              Salir
            </button>

            <Link
              to="/cart-detail"
              className="nav-link position-relative p-2"
              style={{ fontSize: "1.25rem" }}
            >
              <CartWidget />

              {counter > 0 && (
                <span
                  className="position-absolute badge rounded-pill bg-danger"
                  style={{
                    top: "2px",
                    right: "2px",
                    fontSize: "0.65rem",
                    padding: "4px 6px",
                    lineHeight: 1,
                  }}
                >
                  {counter}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
