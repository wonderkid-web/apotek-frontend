import CardItem from "../../components/Card";
import InsertAreaTransaksi from "../../components/Items/InserAreaTransaksi";

const Masuk = () => {
    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Tambah Transaksi Masuk">
                <InsertAreaTransaksi showHargaLabel={true} />
            </CardItem>
        </div>
    );
};

export default Masuk;
