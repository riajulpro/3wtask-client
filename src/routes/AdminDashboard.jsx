import { Box, Button, Grid, Table } from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContextProvider";
import useAxiosPath from "../hooks/useAxios";

const AdminDashboard = () => {
  const { loading, user } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const useAxios = useAxiosPath();

  useEffect(() => {
    useAxios
      .get("/users/getAllUsers")
      .then((res) => setAllUsers(res.data))
      .catch((error) => console.log("Error fetching: ", error));
  }, [useAxios]);

  console.log(allUsers);

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
        <Box sx={{ fontSize: "24px", fontWeight: "900" }}>Admin Dashboard</Box>
        <Button variant="outlined">
          <Link to={"/"}>Home</Link>
        </Button>
      </Grid>
      <Grid xs={9}>
        <Box sx={{ padding: "12px 12px" }}>
          <h3>Username: {user?.username}</h3>
          <h3>Email: {user?.email}</h3>
        </Box>
        <Box sx={{ padding: "12px 12px" }}>
          <h1>Users list:</h1>
          <Table aria-label="basic table">
            <thead>
              <tr>
                <th style={{ width: "40%" }}>User Email</th>
                <th>Username</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((user) => (
                <tr key={user._id}>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.isAdmin ? "Admin" : "User"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
