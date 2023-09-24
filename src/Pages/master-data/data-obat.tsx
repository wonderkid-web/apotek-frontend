import { useState, useEffect } from "react";
import SearchInput from "../../components/Items/SearchInput";
import Table from "../../components/Table";
import CardItem from "../../components/Card";

const DataObat = () => {
    const [data, setData] = useState<Array>([]);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        const getData = async () => {
            const raw = await fetch("http://localhost:3000/obat");
            const { data } = await raw.json();
            setData(data);
        };
        getData();
    }, []);

    const columns = [
        {
            header: "ID",
            accessorKey: "",
        },
        {
            header: "Nama Obat",
            accessorKey: "nama",
        },
        {
            header: "Jenis Obat",
            accessorKey: "jenis",
        },
        {
            header: "Satuan Obat",
            accessorKey: "satuan",
        },
        {
            header: "Stok",
            accessorKey: "stock",
        },
        {
            header: "Waktu Dibuat",
            accessorKey: "created_at",
        },
        {
            header: "Opsi",
            accessorKey: "",
        },
    ];
    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Tabel Obat">
                <SearchInput placeholder="Cari Obat..." filtered={setFilter} />

                {data && (
                    <Table datas={data} columns={columns} filter={filter} />
                )}
            </CardItem>
        </div>
    );
};

export default DataObat;
