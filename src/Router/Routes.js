import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/ServiceDetails/Details";



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
        element: <AddService></AddService>,
      },
      {
        path: "/allService/:id",
        loader: ({ params }) => {
          const id = parseInt(params.id);
          console.log(id);
          fetch(`http://localhost:5000/allService/${params._id}`);
          return
        },

        element: <Details></Details>,
      },
    ],
  },
]);
