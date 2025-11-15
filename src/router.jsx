import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./pages/ErrorPage";
import Body from "./components/Body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
        {
        path: "",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
