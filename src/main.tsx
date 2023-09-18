import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.tsx";
import RootLayout from "./Pages/RootLayout.tsx";
import TambahObat from "./Pages/MasterData/TambahObat.tsx";
import DataObat from "./Pages/MasterData/DataObat.tsx";
import Masuk from "./Pages/Transaksi/Masuk.tsx";
import Keluar from "./Pages/Transaksi/Keluar.tsx";
import StockObat from "./Pages/MasterData/StockObat.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/data-obat",
                element: <DataObat />,
            },
            {
                path: "/tambah-obat",
                element: <TambahObat />,
            },
            {
                path: "/stock-obat",
                element: <StockObat />,
            },
            {
                path: "/transaksi-masuk",
                element: <Masuk />,
            },
            {
                path: "/transaksi-keluar",
                element: <Keluar />,
            },
            {
                path: "/laporan",
                element: <DataObat />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
