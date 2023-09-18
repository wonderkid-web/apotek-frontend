
import { useEffect, useState } from 'react';
import Table from '../../components/Items/Table';

const Masuk = () => {
  const [data, setData] = useState<Array>([])

  useEffect(()=>{
      const getData = async () =>{
        const raw = await fetch('http://localhost:3000/purchases')
        const {data} = await raw.json()
        setData(data)
      }
      getData()
  }, [])

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

  const header = [
    "ID",
    "Obat ID",
    "Jumlah",
    "Waktu Dibuat",
    "Nama Obat",
  ];
  

// const columns  = [
//   {
//     header: "Nama Obat",
//     accessorKey: "namaObat",
//   },
//   {
//     header: "Harga",
//     accessorKey: "harga",
//   },
//   {
//     header: "Jenis Obat",
//     accessorKey: "jenisObat",
//   },
//   {
//     header: "Satuan Obat",
//     accessorKey: "satuanObat",
//   },
//   {
//       header: "",
//       accessorKey: "opsi"
//   }
// ];

  return (
    <div>
      <h1 className='text-center text-xl my-4 w-fit bg-primary text-white p-2 rounded-md'>Table Transaksi Masuk</h1>
      {data && <Table datas={data} columns={columns} header={header} />}
    </div>
  )
}

export default Masuk