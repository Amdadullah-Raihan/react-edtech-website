
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";
import useIsLogin from "./useIsLogin";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const {isLogin, setIsLogin} = useIsLogin();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const changeRouteToHome = () => {
        navigate('/home')
    }
    const singInwithEmailPass = (email, password) => {
       signInWithEmailAndPassword(auth, email, password)
        .then(result=> {
            console.log(result.user);
        })
    }
    const signUpwithEmailPass = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result=> {
                console.log(result.user);
            })

    }

    const signInWithGoogle = (e) => {
        e.preventDefault()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                changeRouteToHome()
                setIsLogin(!isLogin)
            })
    }
    return{
        signInWithGoogle,
        user,
        singInwithEmailPass,
        signUpwithEmailPass,

    }
}
export default useFirebase;