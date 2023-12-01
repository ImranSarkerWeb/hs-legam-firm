import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="fixed top-0 z-50 w-full">
                <Navbar />
            </div>
            <div className="max-h-[calc(100vh-90px)]">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;