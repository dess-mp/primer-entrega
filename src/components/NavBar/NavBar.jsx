import { Link, Navigate, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { useEffect, useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext.jsx";

function NavBar() {

  const auth = getAuth();
  const navigate = useNavigate();
  const { deleteUser, saveUser } = useContext(UserContext);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      deleteUser();
      navigate("/login");
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  }

  const [categories, setCategories] = useState([]);
  
  const { cart } = useContext(CartContext);

  const counter = cart.reduce((acc, item) => acc + item.quantity, 0);

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
    <nav className="navbar navbar-expand-lg bg-light px-3 fixed-top py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-3 d-none d-sm-block" style={{ color : "#0003f6"}}to="/">Apple Kingdom</NavLink>

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
            
            <li className="nav-item">
              <NavLink 
                to="/register" 
                className="nav-link active bg-primary text-white fw-bold px-3 py-2 rounded"
              >
                Registrar
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/login" 
                className="nav-link active bg-dark text-white fw-bold px-3 py-2 rounded"
              >
                Iniciar Sesión
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                onClick={handleLogOut} 
                className="nav-link active bg-danger text-white fw-bold px-3 py-2 rounded border-0"
              >
                Cerrar Sesión
              </NavLink>
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
