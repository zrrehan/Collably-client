import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { IoIosImages } from "react-icons/io"

function GroupPostForm() {
    function postSubmitHandler(event) {
        event.preventDefault();
    }
    return(
        <form onSubmit={postSubmitHandler} className="px-12 py-4 rounded-2xl space-y-5 border-b border-r">
            <Textarea 
                placeholder = "Write something here..."
                className = "shadow-2xl"
            />
            <div className="flex items-end justify-end gap-2">
                <div className="flex justify-center w-fit max-w-sm items-center gap-1">
                    <IoIosImages size = {25}/>
                    <Input id="picture" type="file" className = "w-[200px]"/>
                </div>
                <Button>Post Now</Button>
            </div>
        </form>
    )
}

export default GroupPostForm;