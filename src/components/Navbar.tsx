import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../authConfig";

export function Navbar() {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const usuario = accounts[0];

  const iniciarSesion = () => {
    instance.loginRedirect(loginRequest);
  };

  const cerrarSesion = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "http://localhost:5173",
    });
  };

  return (
    <header className="navbar">
      <nav className="navbar-content">
        <Link className="brand" to="/">
          TiendaTech
        </Link>

        <Link className="nav-link" to="/catalogo">
          Catálogo
        </Link>

        <div className="nav-actions">
          {isAuthenticated ? (
            <>
              <button
                className="nav-user"
                type="button"
                onClick={() => navigate("/cliente")}
                title="Ir a mi cuenta"
              >
                {usuario?.name ?? usuario?.username ?? "Mi cuenta"}
              </button>

              <button
                className="button button-outline"
                type="button"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              className="button button-primary"
              type="button"
              onClick={iniciarSesion}
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}