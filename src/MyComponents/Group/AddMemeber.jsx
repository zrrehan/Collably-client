import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import Swal from "sweetalert2"

export default function AddMember({ id, setUserData, userData }) {
    const {user} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [adding, setAdding] = useState(false);
    console.log(userData)
    function handleSubmit(event) {
        event.preventDefault();
        setAdding(true);
        axios.post(`http://localhost:3000/add-member`,null , {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            },
            params: {
                email: user.email, 
                addedEmail: email, 
                groupId: id,
            }
        })
            .then((res) => {
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
                    icon: res.data.icon,
                    title: res.data.message
                });
                setAdding(false);
                if(res.data.icon === "success") {
                    setUserData([...userData, {
                        admin: "false",
                        creator: "false",
                        email: email,
                        groupId: id,
                        profilePicture: res.profilePicture,
                        _id: email
                    }])
                }
                setEmail("")
            });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className = "w-full">Add Memeber</Button>
            </DialogTrigger>
            <form onSubmit={handleSubmit}>
                
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Member</DialogTitle>
                        <DialogDescription>
                            Write the email address of the new member and click Add 
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Email</Label>
                            <Input 
                                id="name-1" 
                                name="email" 
                                placeholder = "eg: someone@exaample.com"
                                value = {email} 
                                onChange = {(event) => setEmail(event.target.value)}/>
                        </div>
                        
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled ={adding} onClick = {handleSubmit} className = "w-[200px]">
                            {
                                adding ? <>Adding...</> : <>Add member</>
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
