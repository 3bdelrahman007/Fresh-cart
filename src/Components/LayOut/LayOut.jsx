import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function LayOut() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto pt-24 max-w-screen-xl">
        <Outlet />
      </div>
    </>
  );
}
