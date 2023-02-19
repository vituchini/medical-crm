import React, { ReactNode } from 'react';

import style from './Sidebar.module.css';

type sidebarItemProps = {
  label: string;
  url: string;
  icon: string;
};

type SidebarProps = {
  isHidden?: boolean;
  sidebarItems?: sidebarItemProps[];
  sidebarFooter?: ReactNode | ReactNode[];
};

const SidebarItem = (props: sidebarItemProps) => (
  <li>
    <a href={props.url}>
      {props.label} {props.icon}
    </a>
  </li>
);

const Sidebar = ({ isHidden = false, ...props }: SidebarProps) => {
  return (
    <div className={`${style.sidebarWrapper} ${isHidden ? style.transition : ''}`}>
      <div className={style.sidebarContent}>
        <ul className={style.sidebarBody}>
          {props.sidebarItems?.map((item) => (
            <SidebarItem {...item} />
          ))}
        </ul>
        <div className={style.sidebarFooter}>cii</div>
      </div>
    </div>
  );
};

export default Sidebar;
