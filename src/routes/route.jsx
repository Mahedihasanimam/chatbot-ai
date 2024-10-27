import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Personalinformation from "../pages/personalinformation/Personalinformation";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/personalinfo",
          element: <Personalinformation/>,
        }
    ]
    },
  ]);

  export default router;