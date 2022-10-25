
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const navigate = useNavigate();

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
                setUser(result.user)
                changeRouteToHome()
            })
            .catch(error=>{
               setError(error.message)

         })
    }
    const signInWithGoogle = (e) => {
        // e.preventDefault()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                changeRouteToHome()
                
            })
            .catch(error=>{
                setError(error.message)
            })
    }
    return{
        user,
        signInWithGoogle,
        singInwithEmailPass,
        signUpwithEmailPass,

    }
}
export default useFirebase;