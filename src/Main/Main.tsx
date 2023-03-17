import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "../common/constants/routes";
import style from "./Main.module.css";

import Dashboard from "../Dashboard/Dashboard";
import HeaderBar from "./HeaderBar/HeaderBar";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

const Main = () => {

  return (
    <>
      <HeaderBar/>

      <div className={style.container}>
        <SidebarMenu/>
        <div className={style.contentContainer}>
          <Routes>
            <Route path={PATHS.DASHBOARD.ROOT} element={<Dashboard/>}/>
            <Route path={PATHS.DASHBOARD.EDIT} element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Main;
