import React, { ReactNode } from "react";

type TableNoData = {
  colSpan: number;
  children?: ReactNode | ReactNode[];
}

const TableNoData = ({ colSpan, children }: TableNoData) => (
  <tr className="empty-string">
    <td colSpan={colSpan}>{children}</td>
  </tr>
)

export default TableNoData;
