import axios from "axios";

 const axiosSecure=axios.create({
    baseURL:'https://fruits-server-c29yg4di5-mdesarulhoques-projects.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;