import { MdDashboardCustomize, MdOutlineLocalPharmacy } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { PiBooksFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const iconSize = "h-5 w-6 mr-1";

    return (
        <div className="drawer lg:drawer-open z-10">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-60 min-h-full bg-base-200 text-base-content py-12">
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li>
                            <summary>
                                <MdDashboardCustomize className={iconSize} />
                                <Link to="/dashboard">Dashboard</Link>
                            </summary>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <MdOutlineLocalPharmacy
                                        className={iconSize}
                                    />
                                    Master Data
                                </summary>
                                <ul className="ml-10">
                                    <li>
                                        <Link to="/data-kategori">
                                            Data Kategori
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/data-obat">Data Obat</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <BiTransfer className={iconSize} />
                                    Transaksi
                                </summary>
                                <ul className="ml-10">
                                    <li>
                                        <Link to="/transaksi-masuk">Masuk</Link>
                                    </li>
                                    <li>
                                        <Link to="/transaksi-keluar">
                                            Keluar
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <summary>
                                <PiBooksFill className={iconSize} />
                                <Link to="/laporan">Laporan</Link>
                            </summary>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
