import axios from "axios";

const axiosPath = axios.create({
  baseURL: "https://server-3w.vercel.app",
  withCredentials: true,
});

const useAxiosPath = () => {
  return axiosPath;
};

export default useAxiosPath;
