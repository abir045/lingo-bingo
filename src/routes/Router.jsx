import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import StartLearning from "../pages/StartLearning";
import LessonDetails from "../pages/LessonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/start-learning",
    element: <StartLearning />,
    loader: () => fetch("/lessons.json"),
  },
  {
    path: "/lessons/:id",
    element: <LessonDetails />,
    loader: () => fetch(`/total.json`),
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
