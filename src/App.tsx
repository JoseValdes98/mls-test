import {
 AuthenticatedTemplate,
 UnauthenticatedTemplate,
 useMsal,
} from "@azure/msal-react";
import "./App.css";
function App() {
 const { instance, accounts } = useMsal();
 const iniciarSesion = () => {
 instance.loginRedirect();
 };
 const cerrarSesion = () => {
 instance.logoutRedirect({
 postLogoutRedirectUri: window.location.origin,
 });
 };
 const usuario = accounts[0];
 return (
 <div className="container">
 <UnauthenticatedTemplate>
 <h1>Demo React + MSAL</h1>
 <p>Debes iniciar sesión para acceder a la aplicación.</p>
 <button onClick={iniciarSesion}>
 Iniciar sesión con Microsoft
 </button>
 </UnauthenticatedTemplate>
 <AuthenticatedTemplate>
 <h1>Demo React + MSAL</h1>
 <p>
 Usuario autenticado:
 <strong> {usuario?.name}</strong>
 </p>
 <p>
 Cuenta:
 <strong> {usuario?.username}</strong>
 </p>
 <button onClick={cerrarSesion}>
 Cerrar sesión
 </button>
 <div className="contenido">
 <h2>Contenido de la aplicación</h2>
 <p>
 Este contenido solamente puede ser visualizado
 por usuarios autenticados.
 </p>
 </div>
 </AuthenticatedTemplate>
 </div>
 );
}
export default App;