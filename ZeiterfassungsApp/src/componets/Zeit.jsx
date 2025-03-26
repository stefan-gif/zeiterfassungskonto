import * as React from "react";
import { berechneMonatlicheArbeitszeit, getMonatsArbeitszeiten, monatsArbeitsZeitUmrechnen } from "../script/terminalTime";
import '../assets/zeit.css';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";




function Zeit({selectedItemId}) {
  
  let [monatsZeit, setMonatsZeit] = React.useState({});  
  let [monatsArbeitsZeit, setMonatsArbeitsZeit] = React.useState({});
  let [arbeitsZeit, setArbeitsZeit] = React.useState({});

  React.useEffect(()  => {
    const fetchData = async () => {
      setMonatsZeit(await berechneMonatlicheArbeitszeit());
      setMonatsArbeitsZeit(await getMonatsArbeitszeiten(selectedItemId));
    };
      fetchData();
    }, 
    [selectedItemId]);

  React.useEffect(() => {
    const fetchArbeitszeit = async () => {
      const zeit = await monatsArbeitsZeitUmrechnen(monatsArbeitsZeit);
      setArbeitsZeit(zeit);
    };
    fetchArbeitszeit();
  }, [monatsArbeitsZeit]);  
  let monate = [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ];
  let newDate = new Date();
  monate = monate.slice(0,newDate.getMonth() + 1);
  
  React.useEffect(() => {
    let updatedTimeData = [];
    monate.forEach((monat,key) => {
      updatedTimeData.push({ 
        Monat: monat,
        MonatsArbeitsZeit: monatsZeit[monat] || 0,
        ArbeitsZeit: arbeitsZeit[key],
        Saldo: '',
      });
    });
    _setData(updatedTimeData);
  }, [monatsZeit, arbeitsZeit]);

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
  const [data, _setData] = React.useState([]);

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