import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
