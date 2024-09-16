import React from "react";
import HomePage  from "../Pages/Home/homePage"
import { Routes, Route, Navigate } from "react-router-dom";
// import RouterUser from "./RouterUser";


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        {/* <Route path="/user/*" index element={<RouterUser />} /> */}
      </Routes>
    </>
  );
};
export default AppRouter;
