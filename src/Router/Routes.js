import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllService from "../Pages/AllService/AllService";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Info from "../Pages/Info/Info";
import Login from "../Pages/Login/Login";
import Review from "../Pages/MyReview/Review";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Register from "../Pages/Register/Register";
import Details from "../Pages/ServiceDetails/Details";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <NotFoundPage></NotFoundPage>,
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
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/review",

        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",

        element: <Details></Details>,
      },
      {
        path: "/edit/:id",

        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/blogs",

        element: <Blogs></Blogs>,
      },
      {
        path: "/info",

        element: <Info></Info>,
      },
    ],
  },
]);
