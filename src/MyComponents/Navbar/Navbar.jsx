import { useContext } from "react";
import Logo from "./Logo";
import { AuthContext } from "../../Context/AuthContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navmenu from "./Navmenu";
import { Link } from "react-router";
import { ModeToggle } from "./ModeToggle";



function Navbar() {
    const {user} = useContext(AuthContext);
    console.log(user)

    return(
        <div className="flex items-center justify-between px-7 mt-2">
            <Logo></Logo>

            <Navmenu></Navmenu>

            <div className="flex items-center justify-center gap-2">
                <ModeToggle></ModeToggle>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src={user?.photoURL} />
                            <AvatarFallback>{user?.displayName[0]}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-7">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <Link to="/my-groups"><DropdownMenuItem>My Groups</DropdownMenuItem></Link>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar;