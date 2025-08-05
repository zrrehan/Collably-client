import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router";

function GoogleLogin() {
    const { googleLogin, user } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(user);
    function buttonClicked() {
        googleLogin().then(() => {
            navigate("/")
        })
    }

    return(
        <Button onClick = {buttonClicked} variant="outline" className="w-full">
            <FcGoogle />
            Login with Google
        </Button>
    )
}

export default GoogleLogin