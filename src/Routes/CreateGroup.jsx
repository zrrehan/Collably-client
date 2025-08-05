import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Lottie from "lottie-react";
import { useState } from "react"
import team from "../lotties/team.json"
import { Button } from "@/components/ui/button"
import { IoMdAddCircleOutline } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

function CreateGroup() {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    async function formSubmit(event) {
        event.preventDefault();
        // console.log(event.target.value.name)
        const [name, category, picture, visibility, description] = [
            event.target.name.value, event.target.category.value, event.target.picture.files, event.target.visibility.value, event.target.description.value
        ]

        const img = picture[0];
        console.log(img);
        const formData = new FormData();
        formData.append("image", img)
        const imgbbUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
        const res = await axios.post(imgbbUrl, formData)
        const imageUrl = res.data.data.display_url;
        const data = {
            name, category, visibility, description, groupCoverPhoto: imageUrl, creator: user.email
        }
        console.log(data);
        axios.post("http://localhost:3000/create-group", data, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }, 
            params: {
                email: user.email
            }
        })
            .then((response) => {
                navigate(`/groups/${response.data.insertedId}`);
            })
    }

    const [category, setCategory] = useState("Gaming");
    return(
        <form onSubmit={formSubmit} className="border-2 rounded-3xl mt-15 p-20 px-35 max-w-[1100px] mx-auto flex flex-col-reverse gap-5 lg:flex-row justify-between items-center">
            <div className="flex flex-col gap-7">
                <div>
                    <h1 className="text-4xl font-semibold">Create New Group</h1>
                    <p className="italic mt-2">~ Start collaborating by creating your own group.</p>
                </div>
                <div className="grid w-full max-w-sm items-center gap-3">
                    <Label>Group Name</Label>
                    <Input type="text" placeholder="Select A Group Name" name = "name"/>
                </div>

                <div>
                    <Label className="mb-2">Category</Label>
                    <Select defaultValue="Gaming" onValueChange={(value) => setCategory(value)} name = "category">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select a category</SelectLabel>
                                <SelectItem value="Gaming">Gaming</SelectItem>
                                <SelectItem value="Study">Study</SelectItem>
                                <SelectItem value="Hangout">Hangout</SelectItem>
                                <SelectItem value="Others">Others</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {
                        category === "Others" && <div className="grid w-full max-w-sm items-center mt-5">
                            <Label>Write you Group Category</Label>
                            <Input type="text" id="email" className="mt-4 " placeholder="eg. Education" />

                        </div>
                    }

                </div>

                <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="picture">Group Picture</Label>
                    <Input id="picture" type="file" name = "picture"/>
                </div>

                <div>
                    <Label className="mb-2">Visibility</Label>
                    <Select defaultValue="public" name = "visibility">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select a category</SelectLabel>
                                <SelectItem value="public">Public</SelectItem>
                                <SelectItem value="private">Private</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full gap-3">
                    <Label htmlFor="message">Description</Label>
                    <textarea placeholder="Type group description here." name = "description" id="message" className= "h-[100px] p-2 border border-[#e5e5e5] rounded-xl resize-y"></textarea>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button><IoMdAddCircleOutline />Create</Button>
                </div>
            </div>

            <div>
                <Lottie style = {{width: "450px"}} animationData={team} loop = {true}></Lottie>
            </div>
        </form>
    )
}

export default CreateGroup;