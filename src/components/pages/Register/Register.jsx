import { Link } from "react-router";
import NavBar from "../../NavBar/NavBar.jsx";
import "./Register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext.jsx";

export default function RegisterPage() {

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { saveUser } = useContext(UserContext);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        saveUser(user.email, user.accessToken);

        navigate("/");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
      });
  }


  return (
    <div
      className="d-flex align-items-start justify-content-center"
      style={{
        minHeight: "100vh",
        background: "#f5f6fb",
        padding: "40px",
      }}
    >
      <NavBar />

      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "780px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.60)",
          backdropFilter: "blur(14px) saturate(180%)",
        }}
      >
        <div className="p-4" style={{ borderBottom: "1px solid #eef0f4" }}>
          <h2
            className="h5 text-center mb-0 fw-bold"
            style={{ fontSize: "18px", color: "#2c2c2c" }}
          >
            Registro
          </h2>
        </div>

        <form className="p-4" style={{ paddingTop: "24px" }}>
          <div className="row gy-3">
            <div className="col-12">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="email@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="col-12">
              <button
                type="button"
                className="btn"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#0016c0",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                onClick={handleRegister}
              >
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
