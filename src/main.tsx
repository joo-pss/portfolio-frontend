import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { FetchProvider } from "./contexts/FetchContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <FetchProvider>
      <RouterProvider router={router} />
    </FetchProvider>
  </StrictMode>,
);
