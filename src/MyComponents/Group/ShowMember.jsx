import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useQuery } from "@tanstack/react-query";

export default function ShowMember({id}) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/group-members?groupId=${id}`);
            return res.json();
        }
    })

    if(isPending) {
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

    console.log(data);
    return (
        <div className="flex flex-row flex-wrap items-center gap-12">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]">
                {
                    data.slice(0,3).map((singleData) => <Avatar>
                        <AvatarImage src={singleData.profilePicture} alt="DP" />
                        <AvatarFallback>{singleData.email[0].toUpperCase()}</AvatarFallback>
                    </Avatar>)
                } 
            </div>
        </div>
    )
}
