import { Stack } from "@mui/joy";
import { Box } from "@mui/material";
import RegisterForm from "../components/RegisterForm";

const SignUpPage = () => {
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
        <RegisterForm />
      </Box>
    </Stack>
  );
};

export default SignUpPage;
