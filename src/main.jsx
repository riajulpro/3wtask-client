import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import IndexPage from "./routes/Index";
import LoginPage from "./routes/Login";
import SignUpPage from "./routes/SignUp";
import AuthContextProvider from "./context/authContextProvider";
import Dashboard from "./routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>There is no such page</h1>,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
