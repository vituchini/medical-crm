import Icon, { IconTypes } from '../../Icon/Icon';
import React, { ReactNode, useState } from 'react';

import style from './SidebarItem.module.css';
import { useLocation } from 'react-router-dom';

type SidebarItemProps = {
  label: string;
  to: string;
  icon: IconTypes;
};

type SidebarItemWrapperProps = {
  children?: ReactNode | ReactNode[];
};

const SidebarItemWrapper = (props: SidebarItemWrapperProps) => (
  <div className={style.sidebarBody}>{props.children}</div>
);

const SidebarItem = ({ label, to, icon }: SidebarItemProps) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.includes(to));

  return (
    <a className={`${style.linkItem} ${active ? style.active : ''}`} href={to}>
      <Icon iconColor={active ? 'secondary' : 'gray'} size={20} type={icon} />
      <span className={style.linkLabel}>{label}</span>
    </a>
  );
};

export { SidebarItem, SidebarItemWrapper };
