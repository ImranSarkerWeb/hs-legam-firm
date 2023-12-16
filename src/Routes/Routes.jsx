import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import About from "../Pages/About/About";
import TeamMember from "../Pages/TeamMember/TeamMember";
import Contact from "../Pages/Contact/Contact";

//routes will be here
const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout />,
      children:[
        {
          path:'/',
          element: <HomePage />
        },
        {
          path:'/about',
          element: <About />
        },
        {
          path:'/team_member',
          element: <TeamMember />
        },
        {
          path:'/contact',
          element: <Contact />
        }
      ]
    }
  ])
  export default router
  