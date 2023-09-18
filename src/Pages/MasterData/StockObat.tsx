import { Fragment, useState } from "react";
import CardItem from "../../components/Card";
import SearchInput from "../../components/Items/SearchInput";
import Table from "../../components/Table";

const Span = ({ text, variant }) => {
    return <span className={`p-2 ${variant} bg-green `}>{text}</span>;
};

const StockObat = () => {
    // const [data, setData] = useState<Array>([]);
    const [filter, setFilter] = useState<string>("");

    const data = [
        {
            nomor: "1111",
            nama: "OBAT_RINGAN",
            stock: 10,
            status: "",
        },
    ];

    data.forEach((item) => {
        item.status = item.stock > 0 ? "ada" : "habis";
    });

    const columns = [
        {
            header: "Nomor Obat",
            accessorKey: "nomor",
        },
        {
            header: "Nama Obat",
            accessorKey: "nama",
        },
        {
            header: "Stock",
            accessorKey: "stock",
        },
        {
            header: "Status Obat",
            accessorKey: "status",
        },
    ];

    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Stock Obat">
                <SearchInput placeholder="Cari Obat..." filtered={setFilter} />
                {data && (
                    <Table datas={data} columns={columns} filter={filter} />
                )}
            </CardItem>
        </div>
    );
};

export default StockObat;
