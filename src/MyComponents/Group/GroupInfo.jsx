import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

function GroupInfo({data}) {
    const {category, creator, description, groupCoverPhoto, name, visibility} = data
    return(
        <div className="space-y-6">
            <div className="mx-auto max-w-[1100px] w-[90%]">
                <img className="h-[450px] w-full object-cover rounded-4xl" src={groupCoverPhoto} alt="" />
            </div>
            <div className="mx-auto max-w-[1100px] w-[90%] space-y-3">
                <h1 className="text-5xl font-semibold">{name}</h1>
                <p className="text-lg italic">{description}</p>
                <div className="flex gap-10">
                    <p className="flex items-center gap-2 text-xl"><MdOutlineCategory />{category}</p>
                    <p className="flex items-center gap-2 text-xl"><MdOutlineVisibility />{visibility}</p>
                </div>
            </div>
        </div>
    )
}

export default GroupInfo;