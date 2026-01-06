import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="53522991528-g6qv4f8iiosmenvaj9m153mg0fegk4om.apps.googleusercontent.com">
    <AuthProvider>

    
    <App />
    </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
