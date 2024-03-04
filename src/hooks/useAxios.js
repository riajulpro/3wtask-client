import axios from "axios";

const axiosPath = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosPath = () => {
  return axiosPath;
};

export default useAxiosPath;
