import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { useState } from "react";

const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    function googleLogin() {
        return signInWithPopup(auth, provider)
    }

    useState(() => {
        const unSubscribe = onAuthStateChanged(auth, (userInfo) => {
            setUser(userInfo);
        });

        return(() => {
            unSubscribe()
        })
    }, [])

    const value = {
        googleLogin, user
    }

    return(
        <AuthContext value = {value}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;