import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles"; // Import dos estilos globais
import { RouterProvider } from "react-router-dom";
import router from "./routes";



// Renderiza o componente principal da aplicação
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />  {/* Global styles aplicado no nível mais alto */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
