import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { FooterWithSocialLinks } from "./Footer.jsx";

export default function Layout() {

  return (
    <div className="site-wrapper">
      <Navbar />
      <Outlet />
      <FooterWithSocialLinks />
    </div>
  );
}
