import axios from "axios";

 const axiosSecure=axios.create({
    baseURL:'http://localhost:5016https://fruits-server.vercel.app/'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;