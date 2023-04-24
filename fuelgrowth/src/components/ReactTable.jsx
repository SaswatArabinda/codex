import React from "react";
import { useTable } from "react-table";

export const TableMessage = ({ data }) => {
  const { title_mapping, rows: tableData } = data;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: title_mapping, data: tableData });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        {...getTableProps()}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  className="px-6 py-3"
                  {...column.getHeaderProps()}
                >
                  {column.render("header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td className="px-6 py-4" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
