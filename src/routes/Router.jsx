import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import StartLearning from "../pages/StartLearning";
import LessonDetails from "../pages/LessonDetails";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

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
    path: "/lessons/:lesson_no",

    element: (
      <PrivateRoute>
        <LessonDetails />
      </PrivateRoute>
    ),
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
  {
    path: "/myprofile",

    element: (
      <PrivateRoute>
        <MyProfile />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/updateprofile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
