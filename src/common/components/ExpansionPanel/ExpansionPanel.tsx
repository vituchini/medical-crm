import Icon, { IconTypes } from '../Icon/Icon';
import { ReactNode, useRef, useState } from 'react';

import styles from './ExpansionPanel.module.css';

type ExpansionPanelProps = {
  title: string;
  header: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
};

const ExpansionPanel = ({ title, header, children }: ExpansionPanelProps) => {
  const [expanded, setExpanded] = useState(false);
  const accordian = useRef<any>();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span>{title}</span>
          <div className={styles.icon} onClick={() => setExpanded((prev) => !prev)}>
            <Icon type={expanded ? IconTypes.arrowDown : IconTypes.arrowUp} size={12} />
          </div>
        </div>
        <div>{header}</div>
      </div>
      <div className={`${styles.accordian} ${expanded ? styles.active : ''}`}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
