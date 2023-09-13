import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.tsx";
import RootLayout from "./Pages/RootLayout.tsx";
import DataObat from "./Pages/DataObat.tsx";

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
                path: "/data-kategori",
                element: <DataObat />,
            },
            {
                path: "/transaksi-masuk",
                element: <DataObat />,
            },
            {
                path: "/transaksi-keluar",
                element: <DataObat />,
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
