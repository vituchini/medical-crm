import React, { MouseEvent, ReactNode } from 'react';

import style from './Tabs.module.css';

type listType = {
  _id: string;
  content: ReactNode | ReactNode[];
};

type TabsProps = {
  list: listType[];
  current: string;
  onChange: (_id: string, ev: MouseEvent<HTMLLIElement>) => void;
};

const Tabs = (props: TabsProps) => {
  return (
    <ul className={style.tabWrapper}>
      {props.list.map((element, index) => (
        <li
          className={`${style.tabItem} ${props.current === element._id ? style.active : ''}`}
          key={'tab-' + index}
          onClick={(ev) => props.onChange(element._id, ev)}
        >
          {element.content}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
