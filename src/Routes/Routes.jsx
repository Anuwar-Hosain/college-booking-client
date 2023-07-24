import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../pages/Login/Login";
import Colleges from "../pages/Colleges/Colleges";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Admission from "../pages/Admission/Admission";
import ApplyForm from "../Components/ApplyForm/ApplyForm";
import MyCollege from "../pages/MyCollege/MyCollege";

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
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "admission/:id",
        element: <ApplyForm></ApplyForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.id}`),
      },
      {
        path: "my-college",
        element: <MyCollege></MyCollege>,
      },
    ],
  },
]);

export default router;
