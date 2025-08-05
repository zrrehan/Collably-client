import { useParams } from "react-router";
import GroupInfo from "../MyComponents/Group/GroupInfo";

function Group() {
    const {id} = useParams();
     
    return(
        <div>
            <GroupInfo></GroupInfo>
        </div>
    )
}

export default Group;