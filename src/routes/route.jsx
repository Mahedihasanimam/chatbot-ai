import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Personalinformation from "../pages/personalinformation/Personalinformation";
import PhysicalDetails from "../pages/physicaldetails/PhysicalDetails";
import Activitylevel from "../pages/activitylevel/Activitylevel";
import Lifestyle from "../pages/lifestyle/Lifestyle";
import Locationincome from "../pages/locationincome/Locationincome";
  
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
        },
        {
          path: "/physicaldetails",
          element: <PhysicalDetails/>,
        },
        {
          path: "/Activitylevel",
          element: <Activitylevel/>,
        },
        {
          path: "/lifestyle",
          element: <Lifestyle/>,
        },
        {
          path: "/locationincome",
          element: <Locationincome/>,
        },
    ]
    },
  ]);

  export default router;