import { useState } from "react";
import Button from "../../components/Items/Button";
import InputBox from "../../components/Items/InputBox";
import SearchInput from "../../components/Items/SearchInput";
import Collapse from "../../components/Items/Collapse";

const Label = ({ text, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="min-w-[70px]">
            {text}
        </label>
    );
};

const Table = ({ datas, filtered }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead align="center">
                    <tr>
                        <th>Nama Obat</th>
                        <th>Harga</th>
                        <th>Jenis Obat</th>
                        <th>Satuan Obat</th>
                        <th>Opsi</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {datas
                        ?.filter((data) =>
                            data.jenis.toLowerCase() === ""
                                ? datas
                                : data.nama
                                      .toLowerCase()
                                      .includes(filtered.toLowerCase())
                        )
                        .map((data, index) => (
                            <tr key={index}>
                                <td>{data.nama}</td>
                                <td>{data.harga}</td>
                                <td>{data.jenis}</td>
                                <td>{data.satuan}</td>
                                <td>
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
    const [filter, setFilter] = useState("");
    return (
        <div className="card card-compact w-[72vw] bg-base-100 shadow-lg text-sky-800">
            <div className="card-body max-h-[80vh]">
                <h2 className="card-title">{cardTitle}</h2>
                <Collapse dataObat={true}>
                    <div className="border rounded-md p-3 mb-2">
                        <select className="select select-info select-sm w-full max-w-xs mb-5">
                            <option disabled selected>
                                Jenis Obat{" "}
                            </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <div className="input-box flex gap-5 flex-col">
                            <div className="input-box flex items-center gap-4">
                                <Label text="Nama Obat" htmlFor="nama-obat" />
                                <InputBox id="nama-obat" />
                            </div>
                            <div className="input-box flex items-center gap-4">
                                <Label text="Harga" htmlFor="harga" />
                                <InputBox id="harga" />
                            </div>
                            <Button
                                text="Save"
                                variant="btn-primary w-1/12 ml-[85px]"
                            />
                        </div>
                    </div>
                </Collapse>
                <SearchInput placeholder="Cari Obat..." filtered={setFilter} />
                <Table filtered={filter} datas={datas} />
            </div>
        </div>
    );
};

const TambahObat = () => {
    const datas = [
        {
            id: "12345678-9012-3456-7890-123456789012",
            nama: "OBAT_RINGAN",
            harga: "OBAT_RINGAN",
            jenis: "OBAT_RINGAN",
            satuan: "OBAT_RINGAN",
        },
    ];

    return (
        <div className=" absolute top-12 justify-center">
            <CardItem cardTitle="Tambah Data Obat" datas={datas} />
        </div>
    );
};

export default TambahObat;
