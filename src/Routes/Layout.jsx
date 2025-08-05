import { Outlet } from "react-router";
import Navbar from "../MyComponents/Navbar/Navbar";

function Layout() {
    return(
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <h1>footer</h1>
        </div>
    )
}

export default Layout;