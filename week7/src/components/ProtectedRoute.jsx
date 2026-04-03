import axios from "axios";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function ProtectedRoute({children}){
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("hexToken="))
        ?.split("=")[1];
        if(token){
          axios.defaults.headers.common['Authorization'] = token;        
        }

        const checkLogin = async () => {
          try {
            const response = await axios.post(`${API_BASE}/api/user/check`);
            console.log(response.data);
            setIsAuth(true);   
          } catch (error) {
            console.log(error.response?.data.message)
          } finally {
            setLoading(false);
          }
        };
        checkLogin();
    },[]);

    if(loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <TailSpin top={50} color="#80A5B8" />
    </div>)
    if(!isAuth) return <Navigate to="/login" />

    return children;
}

export default ProtectedRoute;