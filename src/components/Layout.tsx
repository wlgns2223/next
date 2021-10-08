import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="content">
      <Navbar/>
        {children}
      <Footer/>
    </div>
  );
}

export default Layout;