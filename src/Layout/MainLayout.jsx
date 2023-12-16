import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";


const MainLayout = () => {
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        }, 2000)
    }, [])
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="fixed top-0 z-50 w-full">
                <Navbar />
            </div>
            <div className=" ">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;