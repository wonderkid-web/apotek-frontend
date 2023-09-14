import { useState } from "react";
import SearchInput from "../../components/Items/SearchInput";
import InputBox from "../../components/Items/InputBox";
import Button from "../../components/Items/Button";

const Table = ({ datas, filtered }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Jenis</th>
                        <th align="center">Opsi</th>
                    </tr>
                </thead>
                <tbody>
                    {datas
                        ?.filter((data) =>
                            data.jenis.toLowerCase() === ""
                                ? datas
                                : data.jenis
                                      .toLowerCase()
                                      .includes(filtered.toLowerCase())
                        )
                        .map((data, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{data.jenis}</td>
                                <td align="center">
                                    <Button
                                        text="Edit"
                                        variant="btn-warning mr-5"
                                    />
                                    <Button text="Delete" variant="btn-error" />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const CardItem = ({ cardTitle, datas }) => {
    const [filter, setFilter] = useState<string>("");

    return (
        <div className="card card-compact w-[72vw] max-h-[75vh]  bg-base-100 shadow-lg">
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <h5 className="font-semibold mt-3">Tambah Kategori</h5>
                <div className="flex gap-5 mb-10">
                    <InputBox />
                    <Button text="Save" variant="btn-primary" />
                </div>
                <SearchInput placeholder="Cari Obat..." filtered={setFilter} />
            </div>
            <Table filtered={filter} datas={datas} />
        </div>
    );
};

const DataKategori = () => {
    const datas = [
        {
            id: "12345678-9012-3456-7890-123456789012",
            jenis: "OBAT_RINGAN",
        },
    ];

    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Jenis Obat" datas={datas} />
        </div>
    );
};

export default DataKategori;
