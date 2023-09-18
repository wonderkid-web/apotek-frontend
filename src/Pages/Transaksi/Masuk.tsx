import { useEffect, useState } from "react";
import Table from "../../components/Table";
import CardItem from "../../components/Card";
import InsertAreaTransaksi from "../../components/Items/InserAreaTransaksi";
import Collapse from "../../components/Items/Collapse";
import SearchInput from "../../components/Items/SearchInput";

const Masuk = () => {
    const [filter, setFilter] = useState("");
    const [data, setData] = useState<Array>([]);

    useEffect(() => {
        const getData = async () => {
            const raw = await fetch("http://localhost:3000/purchases");
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
            header: "Obat ID",
            accessorKey: "obatId",
        },
        {
            header: "Jumlah",
            accessorKey: "jumlah",
        },
        {
            header: "Waktu Dibuat",
            accessorKey: "created_at",
        },
        {
            header: "Nama Obat",
            accessorKey: "obat.nama",
        },
    ];

    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Transaksi Masuk">
                <Collapse>
                    <InsertAreaTransaksi
                        title="Tambah Transaksi"
                        showHargaLabel={true}
                    />
                </Collapse>
                <SearchInput
                    placeholder="Cari Transaksi..."
                    filtered={setFilter}
                />

                {data && (
                    <Table datas={data} columns={columns} filtered={filter} />
                )}
            </CardItem>
        </div>
    );
};

export default Masuk;
