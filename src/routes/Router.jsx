import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/start-learning",
    element: <h2>Start Learning</h2>,
  },
  {
    path: "/tutorials",
    element: <h2>Tutorials</h2>,
  },
  {
    path: "/about-us",
    element: <h2>about us</h2>,
  },
]);

export default router;
