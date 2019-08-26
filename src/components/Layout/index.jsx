import React from "react";
import { ToastContainer } from "react-toastify";

import HeaderSection from "./Header";
import FooterSection from "./Footer";
import LoadingSection from "./Loading";

const LayoutComponent = ({ children }) => {
  return (
    <div className="bg-blue-200 w-full">
      {false && <LoadingSection />}

      <HeaderSection />
      <div className="pt-16 pb-16 h-full">{children}</div>
      <FooterSection />

      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default LayoutComponent;
