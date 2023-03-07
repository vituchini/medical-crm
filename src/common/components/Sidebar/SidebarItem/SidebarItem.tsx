import Icon, { IconTypes } from '../../Icon/Icon';
import React, { useState } from 'react';

import style from './SidebarItem.module.css';
import { useLocation } from 'react-router-dom';

type sidebarItemProps = {
  label: string;
  to: string;
  icon: IconTypes;
};

const SidebarItem = ({ label, to, icon }: sidebarItemProps) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.includes(to));

  return (
    <li className={`${style.sidebarItem} ${active ? style.active : ''}`}>
      <Icon iconColor={active ? 'secondary' : 'gray'} size={20} type={icon} />
      <a className={style.linkItem} href={to}>
        {label}
      </a>
    </li>
  );
};

export default SidebarItem;
