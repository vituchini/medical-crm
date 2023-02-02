import './Tabs.css';

import React, { FunctionComponent, ReactNode } from 'react';

type listType = {
  id: string;
  content: ReactNode | ReactNode[];
};

type TabsProps = {
  list: listType[];
  current: string;
  onChange: (id: string) => void;
};

const Tabs: FunctionComponent<TabsProps> = (props) => {
  return (
    <ul className="tab-wrapper">
      {props.list.map((element) => (
        <li
          className={'tab-item ' + (props.current === element.id ? 'active' : '')}
          key={element.id}
          onClick={() => props.onChange(element.id)}
        >
          {element.content}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
