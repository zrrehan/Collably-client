import Lottie from "lottie-react";
import logo from "../../lotties/logo.json"
import darkLogo from "../../lotties/logo-dark.json"
import { useTheme } from "../../ThemeProvider";

function Logo() {
    const {theme} = useTheme();
    return(
        <div className="flex items-center gap-2">
            {
                theme === "light" ? 
                    <Lottie style={{ width: "50px" }} animationData={logo} loop={true}></Lottie> :
                    <Lottie style={{ width: "50px" }} animationData={darkLogo} loop={true}></Lottie>
            }
            <h1 className="text-4xl font-semibold">Collably</h1>
        </div>
    )
}
export default Logo