import React, { ReactNode } from 'react';

import style from './Sidebar.module.css';

type SidebarProps = {
  isHidden?: boolean;
  content?: ReactNode | ReactNode[];
  footer?: ReactNode | ReactNode[];
};

const Sidebar = ({ isHidden = false, ...props }: SidebarProps) => {
  return (
    <div className={`${style.sidebarWrapper} ${isHidden ? style.transition : ''}`}>
      <nav className={style.sidebarContent}>
        <ul className={style.sidebarBody}>{props.content && <>{props.content}</>}</ul>
        {props.footer && <div className={style.sidebarFooter}>{props.footer}</div>}
      </nav>
    </div>
  );
};

export default Sidebar;
