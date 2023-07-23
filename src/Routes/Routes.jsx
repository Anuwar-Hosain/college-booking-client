import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../pages/Login/Login";
import Colleges from "../pages/Colleges/Colleges";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
    ],
  },
]);

export default router;
