import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ChefDetails from "../Pages/ChefDetails";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://chef-recipe-hunter-server-side-khairul-bashar.vercel.app/data"
          ),
      },
      {
        path: "/chef-details/:id",
        element: <ChefDetails />,
        loader: () =>
          fetch(
            "https://chef-recipe-hunter-server-side-khairul-bashar.vercel.app/data"
          ),
      },
    ],
  },
]);

export default router;
