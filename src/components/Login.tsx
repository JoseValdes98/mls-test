import { useMsal } from "@azure/msal-react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate, useLocation } from "react-router-dom";
import { loginRequest } from "../authConfig";

export function Login() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();

  const from = (
    location.state as { from?: { pathname?: string } } | null
  )?.from?.pathname ?? "/cliente";

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const iniciarSesion = () => {
    instance.loginRedirect(loginRequest);
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Iniciar sesión</h1>
        <p>Accede con tu cuenta corporativa de Microsoft Entra ID.</p>

        <button
          className="button button-primary"
          type="button"
          onClick={iniciarSesion}
        >
          Iniciar sesión con Microsoft
        </button>
      </section>
    </main>
  );
}