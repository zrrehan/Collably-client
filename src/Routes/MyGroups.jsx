import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import SingleGroupCard from "../MyComponents/MyGroups/SingleGroupCard";

function MyGroups() {
    const {user} = useContext(AuthContext);
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/my-groups?email=${user.email}`);
            return res.json();
        }
    });

    if(isPending) {
        return "loading.."
    }

    
    return(
        <div>
            {
                data.map((singleData) => <SingleGroupCard info = {singleData}></SingleGroupCard>)
            }
        </div>
    )
}

export default MyGroups;