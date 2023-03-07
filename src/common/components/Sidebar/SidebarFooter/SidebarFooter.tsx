import React, { ReactNode } from 'react';

import style from './SidebarFooter.module.css';

type SidebarFooterWrapperProps = {
  children?: ReactNode | ReactNode[];
};

const SidebarFooterWrapper = (props: SidebarFooterWrapperProps) => (
  <div className={style.sidebarFooter}>{props.children}</div>
);

export { SidebarFooterWrapper };
