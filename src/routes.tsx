import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
    ],
  },
]);
