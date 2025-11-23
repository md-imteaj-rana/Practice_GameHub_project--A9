import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/home";
import AllGames from "../pages/AllGames";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import GameDetail from "../pages/GameDetail";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <Error></Error>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/AllGames',
          element: <PrivateRoutes><AllGames></AllGames></PrivateRoutes>
        },
        {
          path: '/Login',
          element: <Login></Login>
        },
        {
          path: '/Register',
          element: <Register></Register>
        },
        {
          path: '/Profile',
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path: '/GameDetail/:id',
          element:<PrivateRoutes><GameDetail></GameDetail></PrivateRoutes>
        },
        {
          path: '/ForgetPass/:email',
          element: <ForgetPass></ForgetPass>
        }
    ]
  },
]);

export default router;