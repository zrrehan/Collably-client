import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {Link} from "react-router";

function SingleGroupCard({info}) {
    const {_id, name, category, visibility, description, groupCoverPhoto, creator} = info

    return(
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 border rounded-3xl py-5 shadow-2xl" >
            <div className="w-[200px]">
                <img className="w-full rounded-3xl shadow-2xl" src={groupCoverPhoto} alt="groupCoverPhoto" />
            </div>

            <div className="w-[70%] space-y-3">
                <h1 className = "text-4xl font-semibold">{name}</h1>
                <div className="flex items-center gap-4">
                    <p className="flex items-center gap-2 text-xl"><MdOutlineCategory />{category}</p>
                    <p className="flex items-center gap-2 text-xl"><MdOutlineVisibility />{visibility}</p>
                </div>
                {
                    description.length >= 200 ? <p className="italic">{description.slice(0, 200)}...</p> : <p className="italic">{description}</p>
                }
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Link to={`/groups/${_id}`}><Button>Show Details</Button></Link>
                </div>
            </div>
            
        </div>
    )
}

export default SingleGroupCard;