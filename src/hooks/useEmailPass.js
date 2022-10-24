import { useState } from "react"
import useIsLogin from "./useIsLogin"


const useEmailPass = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    return{
        email,
        setEmail,
        password,
        setPassword,
        handleEmail,
        handlePass
    }
}

export default useEmailPass;