import React from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnDef,
} from "@tanstack/react-table";
import './index.scss'

type GenericTableProps<T extends object> = {
    data: T[];
    columns: ColumnDef<T, any>[];
    onRowClick?: (row: T) => void;
};

function GenericTable<T extends object>({ data, columns, onRowClick }: GenericTableProps<T>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className="generic-table">
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} >
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} >
                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} onClick={() => onRowClick && onRowClick(row.original)} >
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default GenericTable;