import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { FaCrown } from "react-icons/fa6";

import { useQuery } from "@tanstack/react-query";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { AiOutlineUserDelete } from "react-icons/ai";

import { Button } from "@/components/ui/button"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";


export default function ShowMember({ id, setUserData, userData }) {
    const {user} = useContext(AuthContext);
    let { data, isPending, isError, error } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/group-members?groupId=${id}`);
            return res.json();
        }
    })

    useEffect(() => {
        setUserData(data);
    }, [data])

    if(isPending || !userData) {
        return <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
                <AvatarFallback>1</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>2</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>3</AvatarFallback>
            </Avatar>
        </div>
    }
    

    function deleteUser(email, id) {
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
                axios.delete("http://localhost:3000/delete-user-from-group", {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    },
                    params: {
                        email: user.email,
                        id: id,
                        deletedUser: email
                    }
                }).then(() => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "This member is deleted from the group."
                    });
                    const filteredUser = userData.filter((singleData) => singleData.email !== email);
                    setUserData(filteredUser);
                })
            }
        });

        
    }

    return (
        <Popover >
            <PopoverTrigger asChild>
                <div className="flex flex-row flex-wrap items-center gap-12">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]">
                        {
                            userData.slice(0, 3).map((singleData) => <Avatar>
                                <AvatarImage src={singleData.profilePicture} alt="DP" />
                                <AvatarFallback>{singleData.email[0].toUpperCase()}</AvatarFallback>
                            </Avatar>)
                        }
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="leading-none font-medium">All members</h4>
                    </div>
                    {
                        userData.map(singleData => <div className="flex items-center justify-between gap-10">
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src={singleData.profilePicture} alt="DP" />
                                    <AvatarFallback>{singleData.email[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <h1>{singleData.email}</h1>
                            </div>
                            {
                                singleData.creator === "true" && <div  variant="outline" className="rounded-full h-10 w-10 bg-amber-200 text-amber-700 flex items-center justify-center" ><FaCrown /></div>  
                            }
                            {
                                (singleData.admin !== "true" && singleData.creator !== "true") &&
                                    <Button onClick = {() => deleteUser(singleData.email, id)} disabled={singleData.creator === "true" || singleData.admin === "true"} variant="outline" className="rounded-full h-10 w-10 bg-red-200 text-red-700" ><AiOutlineUserDelete /></Button>  
                            }
                        </div>)
                    }
                </div>
            </PopoverContent>
        </Popover >
    )
}
