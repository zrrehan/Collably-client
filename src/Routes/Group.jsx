import { useParams } from "react-router";
import GroupInfo from "../MyComponents/Group/GroupInfo";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'


function Group() {
    const {id} = useParams();
    const {isPending, error, data} = useQuery({
        queryKey: ["groupData"], 
        queryFn: async () => {
            // fetch("https://fakestoreapi.com/products")
            //     .then((res) => res.json());
            const res = await fetch(`http://localhost:3000/group-info?id=${id}`);
            return res.json();
        }
    })

    if(isPending) {
        return "loading..."
    }

    console.log("data:", data);
    return(
        <div>
            <GroupInfo data = {data}></GroupInfo>
        </div>
    )
}

export default Group;