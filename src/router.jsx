import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./pages/ErrorPage";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

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
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

export default router;
