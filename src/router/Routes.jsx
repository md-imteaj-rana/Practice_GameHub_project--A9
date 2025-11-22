import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/home";
import AllGames from "../pages/AllGames";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/AllGames',
          element: <AllGames></AllGames>
        },
        {
          path: '/Login',
          element: <Login></Login>
        },
        {
          path: '/Register',
          element: <Register></Register>
        }
    ]
  },
]);

export default router;