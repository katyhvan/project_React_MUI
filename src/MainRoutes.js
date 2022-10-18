import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 4,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
