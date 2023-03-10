import React, { ReactElement, useState } from "react";

export type TheadProps = {
  sort?: string[];
  onSort?: (data?: string[]) => void;
  children?: Array<ReactElement | false>;
  multiple?: boolean;
};

const Thead = ({ sort = [], multiple, onSort, children }: TheadProps) => {
  const items = children as Array<ReactElement>;
  const [arrSortField, setArrSortField] = useState<string[]>(sort);

  const onClick = (field: string): void => {
    let sortArray = arrSortField;
    const index = sortArray.findIndex((f) => f.includes(field));

    if (index === -1) sortArray.push(field);
    else if (!sortArray?.[index]?.includes('-')) sortArray[index] = '-' + sortArray?.[index];
    else sortArray.splice(index, 1);

    if (!multiple) sortArray = sortArray.filter((f) => f.includes(field));

    setArrSortField(sortArray);
    onSort && onSort(sortArray);
  };

  const isField = (name: string): string | undefined => arrSortField.find((f) => f.includes(name));

  return (
    <thead>
    <tr>
      {items.map((item, index) =>
        item.props?.['data-sort-field']
          ? React.cloneElement(item, {
            key: `sortable-item-${index}`,
            className: isField(item.props?.['data-sort-field'])
              ? !isField(item.props?.['data-sort-field'])?.includes('-')
                ? 'sortable-asc'
                : 'sortable-desc'
              : '',
            onClick: () => onClick(item.props?.['data-sort-field']),
          })
          : item,
      )}
    </tr>
    </thead>
  )
}

export default Thead;
