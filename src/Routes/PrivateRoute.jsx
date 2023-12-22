import { Navigate, useLocation } from "react-router";


import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return    
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;