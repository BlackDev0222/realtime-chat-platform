import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DashboardPage, SignUpPage } from "./pages";
import { PATH } from "./consts";

const AppRoutes = () => {
  const me = useSelector((state) => state.me.data);

  return (
    <>
      {me ? (
        <Routes>
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
          <Route
            path={PATH.NOTFOUND}
            element={<Navigate to={PATH.DASHBOARD} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path={PATH.SIGNUP} element={<SignUpPage />} />
          <Route path={PATH.NOTFOUND} element={<Navigate to={PATH.SIGNUP} />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
