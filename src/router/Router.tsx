import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../components/Home/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
