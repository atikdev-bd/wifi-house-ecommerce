import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element : <Register></Register>,
      },
      {
        path: "/allService",
        element: <AllService></AllService>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
