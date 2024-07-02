import { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";


const useAuth = () => {
   const auth=useContext(AuthContext);
   return auth;
};

export default useAuth;