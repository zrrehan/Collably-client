import { Outlet } from "react-router";
import Navbar from "../MyComponents/Navbar/Navbar";

function Layout() {
    return(
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-[1100px] w-[90%]">
                <Outlet></Outlet>
            </div>
            <h1>footer</h1>
        </div>
    )
}

export default Layout;