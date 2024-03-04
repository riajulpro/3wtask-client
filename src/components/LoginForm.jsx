import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { FormControl, FormLabel } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPath from "../hooks/useAxios";
import { AuthContext } from "../context/authContextProvider";

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const useAxios = useAxiosPath();
  const { setUser, setLoading } = useContext(AuthContext);

  const handleInput = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await useAxios.post("/auth/login", userInfo);
      const data = await res.data.userData;

      if (data) {
        localStorage.setItem("localUser", "true");
        setUser(data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Axios error: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} alignItems="center">
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Email:</FormLabel>
          <Input
            placeholder="Enter email"
            type="email"
            onChange={(e) => handleInput(e)}
            name="email"
            required
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Password:</FormLabel>
          <Input
            placeholder="Enter Password"
            type="password"
            onChange={(e) => handleInput(e)}
            name="password"
            required
          />
        </FormControl>
        <Button sx={{ width: "100%" }} type="submit">
          Login
        </Button>
        <div>
          Don&apos;t have an account? <Link to={"/register"}>Sign Up</Link>
        </div>
        <div>Or</div>
      </Stack>
    </form>
  );
}
