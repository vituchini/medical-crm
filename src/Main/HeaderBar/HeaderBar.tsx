import React from "react";
import style from './HeaderBar.module.css';

import { Header } from "../../common/components";

const HeaderBar = () => {
  return (
    <Header
      leftActions={<>Left</>}
      rightActions={<>Right</>}
      mobileActions={<>Mobile</>}
    />
  )
}

export default HeaderBar;
