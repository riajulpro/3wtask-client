import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPath from "../hooks/useAxios";

export default function RegisterForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const useAxios = useAxiosPath();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    useAxios
      .post("/auth/register", userInfo)
      .then((res) => {
        console.log("User successfully registered!", res.data);
        navigate("/login");
      })
      .catch((error) =>
        console.log("Something went wrong in registration!", error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} alignItems="center">
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Username:</FormLabel>
          <Input
            placeholder="Enter username"
            type="text"
            onChange={(e) => handleInput(e)}
            name="username"
            required
          />
        </FormControl>
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
          Register
        </Button>
        <div>
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
        <div>Or</div>
      </Stack>
    </form>
  );
}
