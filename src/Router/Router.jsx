import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog";
import ChefDetails from "../Pages/ChefDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
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
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/blog',
        element:<Blog/>
      },
    ],
  },
]);

export default router;
