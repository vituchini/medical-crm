import React, { ComponentProps, ReactNode } from 'react';

import style from './TableCard.module.css';

type TableCardProps = {
  filters?: ReactNode | ReactNode[];
  actions?: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
};

const TableCard = (props: TableCardProps) => {
  return (
    <div className={style.tableCardWrapper}>
      <div className={style.tableCardContent}>
        <div className={style.tableCardHeader}>
          <div className={style.headerFilters}>{props.filters && <>{props.filters}</>}</div>
          <div className={style.headerActions}>{props.actions && <>{props.actions}</>}</div>
        </div>
        {props.children && <div className={style.tableCardBody}>{props.children}</div>}
      </div>
    </div>
  );
};

export default TableCard;
