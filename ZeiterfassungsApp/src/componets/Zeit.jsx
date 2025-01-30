import * as React from "react";
import { berechneMonatlicheArbeitszeit } from "../script/terminalTime";
import '../assets/zeit.css';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const monatsZeit = await berechneMonatlicheArbeitszeit();
const monate = [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ];
let timeData = [];
monate.forEach((monat) => {
  timeData.push({ 
    Monat: monat,
    MonatsArbeitsZeit: monatsZeit[monat] || 0,
    ArbeitsZeit: 9,
    Saldo: '',
  });
});

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("Monat", {
    cell: (info) => info.getValue(),
    header: () => <span>Monat</span>,
    footer: () => '',
  }),
  columnHelper.accessor("MonatsArbeitsZeit", {
    id: "MonatsArbeitsZeit",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Monats Arbeitszeit</span>,
    footer: (info) => 
      info.table.getFilteredRowModel()
     .rows.reduce((sum, row) => sum + row.original.MonatsArbeitsZeit, 0)
  }),
  columnHelper.accessor("ArbeitsZeit", {
    header: () => <span> Arbeitszeit</span>,
    cell: (info) => info.getValue(),
    footer: (info) => 
      info.table.getFilteredRowModel()
     .rows.reduce((sum, row) => sum + row.original.ArbeitsZeit, 0)
  }),
  columnHelper.accessor("Saldo", {
    header: () => <span>Saldo</span>,
    cell: (info) => {
      const row = info.row.original;
      return row.MonatsArbeitsZeit - row.ArbeitsZeit;
    },      
    footer: (info) => {
      return info.table.getFilteredRowModel()
      .rows.reduce((sum, row) => sum + (row.original.MonatsArbeitsZeit - row.original.ArbeitsZeit), 0)
    }      
  })
];

function Zeit() {
  const [data, _setData] = React.useState(() => [...timeData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>      
    </div>
  );
}

export default Zeit;