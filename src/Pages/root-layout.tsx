import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
    return (
        <div className="grid grid-rows-10 grid-cols-12">
            <div className="col-span-12">
                <Navbar />
            </div>
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-10 flex justify-center relative">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
