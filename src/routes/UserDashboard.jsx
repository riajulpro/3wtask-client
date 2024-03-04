import { useContext } from "react";
import { AuthContext } from "../context/authContextProvider";
import { Box, Button, Grid } from "@mui/joy";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return "Please wait...";
  }

  return (
    <Grid container spacing={1} sx={{ width: "100%" }}>
      <Grid
        xs={3}
        sx={{
          bgcolor: "primary.400",
          color: "#fff",
          height: "100vh",
          padding: "24px",
        }}
      >
        <Box sx={{ fontSize: "24px", fontWeight: "900" }}>User Dashboard</Box>
        <Button variant="outlined">
          <Link to={"/"}>Home</Link>
        </Button>
      </Grid>
      <Grid xs={9}>
        <Box sx={{ padding: "12px 12px" }}>
          <h3>Username: {user?.username}</h3>
          <h3>Email: {user?.email}</h3>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
