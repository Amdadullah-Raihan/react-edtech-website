import { useState } from "react";


const useIsLogin = () => {

    const [isLogin, setIslogin]=useState(false);


   return{
    isLogin,
    setIslogin
   }
}
export default useIsLogin;