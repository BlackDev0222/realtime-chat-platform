import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "../../../consts";

const HeaderSection = () => {
  return (
    <div className="flex align-center justify-between bg-gray-700 p-4 w-full fixed top-0 text-gray-100 border-b-2 border-cyan-900">
      <Link to={PATH.DASHBOARD} className="text-3xl font-bold">
        Realtime Chat Platform
      </Link>
    </div>
  );
};

export default HeaderSection;
