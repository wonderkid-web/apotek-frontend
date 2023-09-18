import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import Button from "./Items/Button";
// import fakeData from "../assets/MOCK_DATA.json"

const Table = ({ columns, datas }: any) => {
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const data = useMemo(() => datas, [datas]);

    const table = useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),

        state: {
            sorting: sorting,
            globalFilter: filtering,
        },

        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });

    const handleDelete = async (borrowId: string) => {
        const data = await fetch(`http://localhost:3006/delete/${borrowId}`);

        if (data.ok) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    };

    return (
        <div className="table mt-5">
            <table className="table-zebra mx-auto text-center w-full">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} id={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.index}
                                    id={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(
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
                        <tr key={row.id} id={row.id}>
                            {row.getVisibleCells().map((cell, i) => (
                                <>
                                    {i !== 6 ? (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ) : (
                                        <td
                                            key={cell.id}
                                            onClick={() =>
                                                handleDelete(
                                                    cell.row.original.id
                                                )
                                            }
                                            className="cursor-pointer"
                                        >
                                            delete
                                        </td>
                                    )}
                                </>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="btn-group mt-5 w-full flex justify-center">
                <Button
                    onClick={() => table.setPageIndex(0)}
                    variant="btn-active"
                    text="first page"
                />
                <Button
                    onClick={() => table.previousPage()}
                    text="previous page"
                    disabled={!table.getCanPreviousPage()}
                />
                <Button
                    onClick={() => table.nextPage()}
                    text="next page"
                    disabled={!table.getCanNextPage()}
                />
                <Button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    text="last page"
                />
            </div>
            {success && (
                <div className="toast toast-start">
                    <div className="alert alert-success">
                        <span>Kamu berhasil menghapus Obat.</span>
                    </div>
                </div>
            )}
            {error && (
                <div className="toast toast-start">
                    <div className="alert alert-info">
                        <span>Kamu gagal menghapus Obat.</span>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Table;
