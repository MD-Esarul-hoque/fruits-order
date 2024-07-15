import axios from "axios";

 const axiosSecure=axios.create({
    baseURL:'https://fruits-server-7ad1vkmcw-mdesarulhoques-projects.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;