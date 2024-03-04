import { useContext } from "react";
import { AuthContext } from "../context/authContextProvider";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { Box } from "@mui/material";
import { Stack } from "@mui/joy";

const LoginPage = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ marginTop: "20px" }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          width: "420px",
          borderRadius: 1,
          padding: "20px",
        }}
      >
        <LoginForm />
      </Box>
    </Stack>
  );
};

export default LoginPage;
