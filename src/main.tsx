import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SymptomChecker from "./pages/symptom-checker.tsx";
import Home from "./pages/home.tsx";
import "./index.css";
import Layout from "./components/layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/symptom-checker",
    element: <SymptomChecker />,
  },
  {
    path: "/care",
    element: (
      <Layout>
        <div className="p-5 text-blue-500 flex items-center justify-center bg-blue-50">
          Care Page
        </div>
      </Layout>
    ),
  },
  {
    path: "/coverage",
    element: (
      <Layout>
        <div className="p-5 text-blue-500 flex items-center justify-center bg-blue-50">
          Coverage Page
        </div>
      </Layout>
    ),
  },
  {
    path: "/claim",
    element: (
      <Layout>
        <div className="p-5 text-blue-500 flex items-center justify-center bg-blue-50">
          Claim Page
        </div>
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
