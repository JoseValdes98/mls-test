import { useMsal } from "@azure/msal-react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";

function InicioPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Tecnología para tu próximo equipo</p>
        <h1>Computadores, componentes y periféricos</h1>
        <p>
          Explora nuestro catálogo de notebooks, PCs, tarjetas gráficas,
          procesadores, memorias RAM, discos SSD y accesorios.
        </p>
      </section>
    </main>
  );
}

function CatalogoPage() {
  return (
    <main className="page">
      <h1>Catálogo</h1>
      <p>
        Próximamente agregaremos productos mock para notebooks, tarjetas de
        video, procesadores, RAM, almacenamiento y periféricos.
      </p>
    </main>
  );
}

function ClientePage() {
  const { accounts } = useMsal();
  const usuario = accounts[0];

  return (
    <main className="page">
      <h1>Mi cuenta</h1>
      <p>Sesión iniciada correctamente con Microsoft Entra ID.</p>

      <section className="profile-card">
        <p>
          <strong>Nombre:</strong> {usuario?.name ?? "Sin nombre disponible"}
        </p>
        <p>
          <strong>Correo:</strong>{" "}
          {usuario?.username ?? "Sin correo disponible"}
        </p>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="page">
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe.</p>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/cliente"
          element={
            <ProtectedRoute>
              <ClientePage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}