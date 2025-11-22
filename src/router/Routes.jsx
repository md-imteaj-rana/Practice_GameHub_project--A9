import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/home";
import AllGames from "../pages/AllGames";

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
        }
    ]
  },
]);

export default router;