import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Review from "../Pages/MyReview/Review";
import Register from "../Pages/Register/Register";
import Details from "../Pages/ServiceDetails/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
        element: <Register></Register>,
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
      {
        path: "/addService",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: "/review",
        

        element: <PrivateRoute><Review></Review></PrivateRoute>,
      },
      {
        path: "/service/:id",
        

        element:<Details></Details>,
      },
    ],
  },
]);
