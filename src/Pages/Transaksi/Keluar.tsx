import CardItem from "../../components/Card";
import InsertAreaTransaksi from "../../components/Items/InserAreaTransaksi";

const Keluar = () => {
    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Tambah Transaksi Keluar">
                <InsertAreaTransaksi />
            </CardItem>
        </div>
    );
};

export default Keluar;
