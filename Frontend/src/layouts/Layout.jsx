import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="w-full p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
