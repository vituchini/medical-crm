import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "../common/constants/routes";

import Dashboard from "../Dashboard/Dashboard";
// import { Sidebar } from "../common/components";

const Main = () => {

  return (
    <>
      {/*Header*/}
      {/*<Sidebar/>*/}
      <Routes>
        <Route path={PATHS.DASHBOARD.ROOT} element={<Dashboard/>}/>
        <Route path={PATHS.DASHBOARD.EDIT} element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default Main;
