import Lottie from "lottie-react";
import logo from "../../lotties/logo.json"

function Logo() {
    return(
        <div className="flex items-center gap-2">
            <Lottie style={{ width: "50px" }} animationData={logo} loop={true}></Lottie>
            <h1 className="text-4xl font-semibold">Collably</h1>
        </div>
    )
}
export default Logo