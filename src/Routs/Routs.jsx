import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Menu from "../pages/Menu/Menu/Menu";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Payment from "../pages/Dashboard/Payment/Payment";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'Order',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute> 
        },



      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        }
      ]
    }
  ]);