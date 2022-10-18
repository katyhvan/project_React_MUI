import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
};

export default App;
