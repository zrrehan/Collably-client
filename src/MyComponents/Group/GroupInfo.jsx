import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import GroupSettings from "./GroupSettings";
import GroupData from "./GroupData";
import ShowMember from "./ShowMember";

function GroupInfo({data}) {
    const {category, creator, description, groupCoverPhoto, name, visibility, _id} = data
    return(
        <div className="space-y-7">
            <div className="space-y-6">
                <div className="">
                    <img className="h-[450px] w-full object-cover rounded-4xl" src={groupCoverPhoto} alt="" />
                </div>
                <div className="mx-auto max-w-[1100px] w-[90%] space-y-3">
                    <h1 className="text-5xl font-semibold">{name}</h1>
                    <p className="text-lg italic">{description}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-10">
                            <p className="flex items-center gap-2 text-xl"><MdOutlineCategory />{category}</p>
                            <p className="flex items-center gap-2 text-xl"><MdOutlineVisibility />{visibility}</p>
                            <GroupSettings id={_id}></GroupSettings>
                        </div>

                        <div>
                            <ShowMember id={_id}/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <GroupData id={_id}/>
            </div>
        </div>
    )
}

export default GroupInfo;