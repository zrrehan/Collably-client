import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import axios from "axios"
import Swal from "sweetalert2";
import AddMember from "./AddMemeber";

function GroupSettings({ id, setUserData, userData }) {
    const {user} = useContext(AuthContext);
    function deleteGroup() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:3000/delete-group", {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    },
                    params: {
                        email: user.email,
                        id: id
                    }
                }).then(res => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                });
            }
        });
        
    }
    return(
        <DropdownMenu>
            <DropdownMenuTrigger><IoMdSettings size = {25} /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Group Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <AddMember id={id} userData={userData} setUserData={setUserData}></AddMember>
                <DropdownMenuItem onClick={deleteGroup} className="bg-red-200 text-red-800 hover:!bg-red-200 hover:!text-red-800"><MdDelete style = {{color:"red"}}/>Delete Group</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GroupSettings;