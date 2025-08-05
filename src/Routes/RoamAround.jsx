import { Button } from "@/components/ui/button"
import { Link } from "react-router";
import { RiStickyNoteAddLine } from "react-icons/ri";

function RoamAround() {
    return(
        <div>
            <div>
                <Link to="/crete-group"><Button variant="outline"><RiStickyNoteAddLine/>Create Group</Button></Link>
            </div>
        </div>
    )
}

export default RoamAround;