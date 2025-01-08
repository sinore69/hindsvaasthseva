import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AuthPage from "./components/Auth/AuthPage.jsx";
import HospitalInfo from "./components/HospitalInfo/HospitalInfoPage.jsx";
import DoctorsPage from "./components/Doctors/DoctorsPage.jsx";
import ProfilePage from "./components/Profile/ProfilePage.jsx";
import LoginPage from "./components/Admin/LoginPage.jsx";
import EditHospital from "./components/Admin/EditHospital2.jsx";
import AddDoctor from "./components/Admin/AddDoctor.jsx";
import ManageDoctors from "./components/Admin/ManageDoctors.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/hospitalinfo",
        element: <HospitalInfo />,
      },
      {
        path: "/search-doctors",
        element: <DoctorsPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <AuthPage />,
      },
    ],
  },
  {
    path:"login",
    element:<LoginPage />
  },
  {
    path:"edithospital",
    element:<EditHospital />
  },
  {
    path:"adddoctor",
    element:<AddDoctor />
  },
  {
    path: "managedoctor",
    element:<ManageDoctors />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
