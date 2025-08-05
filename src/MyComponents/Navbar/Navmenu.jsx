import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link, NavLink } from "react-router";
import { Button } from "@/components/ui/button"
import { FaHome, FaUsers } from "react-icons/fa";
import { RiStickyNoteAddLine } from "react-icons/ri";


function Navmenu() {
    return(
        <div className="flex gap-3">
            <NavLink to = "/"><Button variant="outline"><FaHome /> Home</Button></NavLink>
            <NavLink to="/all-groups"><Button variant="outline"><FaUsers />Roam Around</Button></NavLink>
        </div>
    )
}

export default Navmenu;