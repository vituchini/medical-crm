import React from "react";
import style from './HeaderBar.module.css';

import { Header } from "../../common/components";

const HeaderBar = () => {
  return (
    <div className={style.test}>

      <Header leftActions={<>Left</>} rightActions={<>Right</>} mobileActions={<>Mobile</>}/>
    </div>
  )
}

export default HeaderBar;
